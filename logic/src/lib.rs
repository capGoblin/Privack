use calimero_sdk::app;
use calimero_sdk::borsh::{BorshDeserialize, BorshSerialize};
use calimero_storage::collections::{StoreError, UnorderedMap};
use serde::{Deserialize, Serialize};
use std::collections::BTreeMap;

#[app::event]
pub enum ParcEvent<'a> {
    ReceiptAcknowledged {
        receipt_id: &'a str,
        recipient: &'a str,
    },
}

#[app::state(emits = for<'a> ParcEvent<'a>)]
#[derive(Default, BorshSerialize, BorshDeserialize)]
#[borsh(crate = "calimero_sdk::borsh")]
struct ParcState {
    receipts: UnorderedMap<String, String>, // Maps receipt IDs to recipient addresses
    acknowledgments: UnorderedMap<String, bool>, // Maps receipt IDs to acknowledgment status
    creators: UnorderedMap<String, String>, // Maps receipt IDs to creator addresses
    contents: UnorderedMap<String, String>, // Maps receipt IDs to content
    receipt_ids: Vec<String>,               // Track receipt IDs for listing
}

fn handle_store_error(error: StoreError) -> String {
    error.to_string()
}

#[app::logic]
impl ParcState {
    /// Initialize the PARC system
    #[app::init]
    pub fn init() -> Self {
        Self {
            receipts: UnorderedMap::new(),
            acknowledgments: UnorderedMap::new(),
            creators: UnorderedMap::new(),
            contents: UnorderedMap::new(),
            receipt_ids: Vec::new(),
        }
    }

    /// Add a receipt to the system
    pub fn add_receipt(
        &mut self,
        receipt_id: String,
        recipient: String,
        content: String,
        caller: String,
    ) -> Result<(), String> {
        // Check if receipt already exists
        if self
            .receipts
            .contains(&receipt_id)
            .map_err(handle_store_error)?
        {
            return Err(format!("Receipt ID {:?} already exists", receipt_id));
        }

        // Store receipt, acknowledgment status, creator, and content
        self.receipts
            .insert(receipt_id.clone(), recipient)
            .map_err(handle_store_error)?;
        self.acknowledgments
            .insert(receipt_id.clone(), false)
            .map_err(handle_store_error)?;
        self.creators
            .insert(receipt_id.clone(), caller)
            .map_err(handle_store_error)?;
        self.contents
            .insert(receipt_id.clone(), content)
            .map_err(handle_store_error)?;

        // Track receipt ID
        self.receipt_ids.push(receipt_id);

        Ok(())
    }

    /// Acknowledge a receipt by ID and return its content upon successful acknowledgment
    pub fn acknowledge_receipt(
        &mut self,
        receipt_id: &str,
        caller: &str,
    ) -> Result<String, String> {
        // Get the recipient for the specified receipt ID
        let recipient = self
            .receipts
            .get(receipt_id)
            .map_err(handle_store_error)?
            .ok_or_else(|| format!("Receipt ID {:?} not found", receipt_id))?;

        // Check if the caller matches the recipient
        if recipient != caller {
            return Err(format!(
                "Caller {:?} is not authorized to acknowledge this receipt",
                caller
            ));
        }

        // Update acknowledgment status
        self.acknowledgments
            .insert(receipt_id.to_string(), true)
            .map_err(handle_store_error)?;

        // Emit an event for acknowledgment
        app::emit!(ParcEvent::ReceiptAcknowledged {
            receipt_id,
            recipient: &recipient,
        });

        // Retrieve and return the content associated with the receipt ID
        self.contents
            .get(receipt_id)
            .map_err(handle_store_error)?
            .ok_or_else(|| format!("Content for Receipt ID {:?} not found", receipt_id))
    }

    /// Check if a receipt has been acknowledged
    /// Only the creator of the receipt can check acknowledgment
    pub fn is_acknowledged(&self, receipt_id: &str, caller: &str) -> Result<bool, String> {
        // Verify the caller is the creator of the receipt
        let creator = self
            .creators
            .get(receipt_id)
            .map_err(handle_store_error)?
            .ok_or_else(|| format!("Receipt ID {:?} not found", receipt_id))?;

        if creator != caller {
            return Err(format!(
                "Caller {:?} is not authorized to check this receipt",
                caller
            ));
        }

        // Return acknowledgment status
        self.acknowledgments
            .get(receipt_id)
            .map_err(handle_store_error)?
            .ok_or_else(|| format!("Receipt ID {:?} not found", receipt_id))
    }
    /// Get all receipts created by the caller along with their acknowledgment status
    pub fn get_created_receipts(&self, caller: &str) -> Result<BTreeMap<String, bool>, String> {
        let mut entries = BTreeMap::new();

        for receipt_id in &self.receipt_ids {
            // Check if the creator matches the caller
            if let Ok(Some(creator)) = self.creators.get(receipt_id) {
                if creator == caller {
                    // Get acknowledgment status for the receipt
                    if let Ok(Some(status)) = self.acknowledgments.get(receipt_id) {
                        entries.insert(receipt_id.clone(), status);
                    }
                }
            }
        }

        Ok(entries)
    }

    /// Get all receipts received by the caller along with their acknowledgment status
    pub fn get_received_receipts(&self, caller: &str) -> Result<BTreeMap<String, bool>, String> {
        let mut entries = BTreeMap::new();

        for receipt_id in &self.receipt_ids {
            // Check if the recipient matches the caller
            if let Ok(Some(recipient)) = self.receipts.get(receipt_id) {
                if recipient == caller {
                    // Get acknowledgment status for the receipt
                    if let Ok(Some(status)) = self.acknowledgments.get(receipt_id) {
                        entries.insert(receipt_id.clone(), status);
                    }
                }
            }
        }

        Ok(entries)
    }
    /// Get all receipts created by the caller along with their content
    pub fn get_created_receipt_contents(
        &self,
        caller: &str,
    ) -> Result<BTreeMap<String, String>, String> {
        let mut entries = BTreeMap::new();

        for receipt_id in &self.receipt_ids {
            // Check if the creator matches the caller
            if let Ok(Some(creator)) = self.creators.get(receipt_id) {
                if creator == caller {
                    // Get the content for the receipt
                    if let Ok(Some(content)) = self.contents.get(receipt_id) {
                        entries.insert(receipt_id.clone(), content);
                    }
                }
            }
        }

        Ok(entries)
    }

    /// Get all receipts with acknowledged status true that were received by the caller, along with their content
    pub fn get_received_acknowledged_receipt_contents(
        &self,
        caller: &str,
    ) -> Result<BTreeMap<String, String>, String> {
        let mut entries = BTreeMap::new();

        for receipt_id in &self.receipt_ids {
            // Check if the recipient matches the caller
            if let Ok(Some(recipient)) = self.receipts.get(receipt_id) {
                if recipient == caller {
                    // Get acknowledgment status for the receipt
                    if let Ok(Some(true)) = self.acknowledgments.get(receipt_id) {
                        // If acknowledged, get the content
                        if let Ok(Some(content)) = self.contents.get(receipt_id) {
                            entries.insert(receipt_id.clone(), content);
                        }
                    }
                }
            }
        }

        Ok(entries)
    }
    /// Get the creator of a receipt by receipt_id
    pub fn get_creator_of_receipt(&self, receipt_id: &str) -> Result<String, String> {
        self.creators
            .get(receipt_id)
            .map_err(handle_store_error)?
            .ok_or_else(|| format!("Creator for Receipt ID {:?} not found", receipt_id))
    }

    /// Get the recipient of a receipt by receipt_id
    pub fn get_recipient_of_receipt(&self, receipt_id: &str) -> Result<String, String> {
        self.receipts
            .get(receipt_id)
            .map_err(handle_store_error)?
            .ok_or_else(|| format!("Recipient for Receipt ID {:?} not found", receipt_id))
    }
}
