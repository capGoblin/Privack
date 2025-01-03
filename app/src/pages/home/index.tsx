import {
  clearAppEndpoint,
  clearJWT,
  getAccessToken,
  getAppEndpointKey,
  getRefreshToken,
} from '@calimero-network/calimero-client';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ClientApiDataSource } from '../../api/dataSource/ClientApiDataSource';
import { getStorageApplicationId } from '../../utils/node';
import { clearApplicationId } from '../../utils/storage';
import { useNavigate } from 'react-router-dom';

const FullPageCenter = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #111111;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TextStyle = styled.div`
  color: white;
  margin-bottom: 2em;
  font-size: 2em;
`;

const Button = styled.div`
  color: white;
  padding: 0.25em 1em;
  border-radius: 8px;
  font-size: 2em;
  background: #5dbb63;
  cursor: pointer;
  justify-content: center;
  display: flex;
`;

const AddReceiptSection = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  border-top: 1px solid #333;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  border-radius: 4px;
  border: none;
`;

const AddReceiptButton = styled(Button)`
  font-size: 1em;
  background: #4a90e2;
`;

const AcknowledgmentsSection = styled(AddReceiptSection)`
  margin-top: 1rem;
`;

const AcknowledgmentsList = styled.div`
  color: white;
  margin-top: 1rem;
  max-height: 200px;
  overflow-y: auto;
`;

const AcknowledgmentItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  border-bottom: 1px solid #333;
  &:last-child {
    border-bottom: none;
  }
`;
const ButtonReset = styled.div`
  color: white;
  padding: 0.25em 1em;
  border-radius: 8px;
  font-size: 1em;
  background: #ffa500;
  cursor: pointer;
  justify-content: center;
  display: flex;
  margin-top: 1rem;
`;

const RefreshButton = styled(ButtonReset)`
  background: #4a90e2;
  margin-top: 0.5rem;
`;

const AcknowledgeButton = styled(ButtonReset)`
  background: #5dbb63;
  margin-left: 1rem;
  padding: 0.25em 0.5em;
  font-size: 0.8em;
`;

const ReceiptInfo = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: space-between;
  margin-right: 1rem;
`;

const ReceiptTabs = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const Tab = styled.div<{ active: boolean }>`
  color: white;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-bottom: 2px solid
    ${(props) => (props.active ? '#4a90e2' : 'transparent')};
  &:hover {
    border-bottom-color: ${(props) => (props.active ? '#4a90e2' : '#666')};
  }
`;

const ContentTextArea = styled.textarea`
  padding: 0.5em;
  margin: 0.5em;
  border-radius: 4px;
  border: none;
  width: calc(100% - 1em);
  min-height: 100px;
  resize: vertical;
  font-family: inherit;
`;

const ReceiptContent = styled.div`
  color: #a0a0a0;
  font-size: 0.9em;
  margin-top: 0.5rem;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  white-space: pre-wrap;
  word-break: break-word;
`;

const ReceiptDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const LogoutButton = styled.div`
  color: black;
  margin-top: 2rem;
  padding: 0.25em 1em;
  border-radius: 8px;
  font-size: 1em;
  background: white;
  cursor: pointer;
  justify-content: center;
  display: flex;
`;

const StatusTitle = styled.div`
  color: white;
  justify-content: center;
  display: flex;
`;

export default function HomePage() {
  const navigate = useNavigate();
  const url = getAppEndpointKey();
  const applicationId = getStorageApplicationId();
  const accessToken = getAccessToken();
  const refreshToken = getRefreshToken();
  const [receiptId, setReceiptId] = useState('');
  const [recipient, setRecipient] = useState('');
  const [content, setContent] = useState('');
  const [activeTab, setActiveTab] = useState<'created' | 'received'>('created');
  const [createdReceipts, setCreatedReceipts] = useState<
    Record<string, boolean>
  >({});
  const [receivedReceipts, setReceivedReceipts] = useState<
    Record<string, boolean>
  >({});
  const [receivedContents, setReceivedContents] = useState<
    Record<string, string>
  >({});
  const [createdContents, setCreatedContents] = useState<
    Record<string, string>
  >({});

  useEffect(() => {
    if (!url || !applicationId || !accessToken || !refreshToken) {
      navigate('/auth');
    }
  }, [accessToken, applicationId, navigate, refreshToken, url]);

  const logout = () => {
    clearAppEndpoint();
    clearJWT();
    clearApplicationId();
    navigate('/auth');
  };

  async function handleAddReceipt() {
    if (!receiptId || !recipient || !content) {
      window.alert('Please fill in Receipt ID, Recipient, and Content');
      return;
    }

    // Trim whitespace and ensure proper string formatting
    const formattedReceiptId = receiptId.trim();
    const formattedRecipient = recipient.trim();
    const formattedContent = content.trim();

    // Validate input lengths and format
    if (
      formattedReceiptId.length === 0 ||
      formattedRecipient.length === 0 ||
      formattedContent.length === 0
    ) {
      window.alert('Receipt ID, Recipient, and Content cannot be empty');
      return;
    }

    try {
      const result = await new ClientApiDataSource().addReceipt({
        receipt_id: formattedReceiptId,
        recipient: formattedRecipient,
        content: formattedContent,
        caller: '', // Will be set by ClientApiDataSource
      });

      if (result?.error) {
        console.error('Error:', result.error);
        window.alert(`${result.error.message}`);
        return;
      }

      window.alert('Receipt added successfully!');
      setReceiptId('');
      setRecipient('');
      setContent('');
      await fetchReceipts();
    } catch (error) {
      console.error('Failed to add receipt:', error);
      window.alert('Failed to add receipt. Please try again.');
    }
  }

  async function fetchReceipts() {
    // Fetch created receipts
    const createdResult = await new ClientApiDataSource().getCreatedReceipts({
      caller: '', // Will be set by ClientApiDataSource
    });
    if (createdResult?.error) {
      console.error('Error:', createdResult.error);
      window.alert(`${createdResult.error.message}`);
      return;
    }
    setCreatedReceipts(createdResult.data.acknowledgments);

    // Fetch created receipt contents
    const createdContentsResult =
      await new ClientApiDataSource().getCreatedReceiptContents({
        caller: '', // Will be set by ClientApiDataSource
      });
    if (createdContentsResult?.error) {
      console.error('Error:', createdContentsResult.error);
      window.alert(`${createdContentsResult.error.message}`);
      return;
    }
    setCreatedContents(createdContentsResult.data.contents);

    // Fetch received receipts
    const receivedResult = await new ClientApiDataSource().getReceivedReceipts({
      caller: '', // Will be set by ClientApiDataSource
    });
    if (receivedResult?.error) {
      console.error('Error:', receivedResult.error);
      window.alert(`${receivedResult.error.message}`);
      return;
    }
    setReceivedReceipts(receivedResult.data.acknowledgments);

    // Fetch received acknowledged receipt contents
    const receivedContentsResult =
      await new ClientApiDataSource().getReceivedAcknowledgedContents({
        caller: '', // Will be set by ClientApiDataSource
      });
    if (receivedContentsResult?.error) {
      console.error('Error:', receivedContentsResult.error);
      window.alert(`${receivedContentsResult.error.message}`);
      return;
    }
    setReceivedContents(receivedContentsResult.data.contents);
  }

  useEffect(() => {
    fetchReceipts();
  }, []);

  async function handleAcknowledgeReceipt(receiptId: string) {
    const result = await new ClientApiDataSource().acknowledgeReceipt({
      receipt_id: receiptId,
      caller: '',
    });

    if (result?.error) {
      console.error('Error:', result.error);
      window.alert(`${result.error.message}`);
      return;
    }

    // Refresh the acknowledgments list and contents after successful acknowledgment
    await fetchReceipts();
  }

  return (
    <FullPageCenter>
      <TextStyle>
        <span> Welcome to home page!</span>
      </TextStyle>

      <AddReceiptSection>
        <StatusTitle>Add New Receipt</StatusTitle>
        <Input
          type="text"
          placeholder="Receipt ID"
          value={receiptId}
          onChange={(e) => setReceiptId(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Recipient"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />
        <ContentTextArea
          placeholder="Receipt Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <AddReceiptButton onClick={handleAddReceipt}>
          Add Receipt
        </AddReceiptButton>
      </AddReceiptSection>

      <AcknowledgmentsSection>
        <StatusTitle>Receipt Acknowledgments</StatusTitle>
        <ReceiptTabs>
          <Tab
            active={activeTab === 'created'}
            onClick={() => setActiveTab('created')}
          >
            Created Receipts
          </Tab>
          <Tab
            active={activeTab === 'received'}
            onClick={() => setActiveTab('received')}
          >
            Received Receipts
          </Tab>
        </ReceiptTabs>
        <RefreshButton onClick={fetchReceipts}>Refresh Receipts</RefreshButton>
        <AcknowledgmentsList>
          {Object.entries(
            activeTab === 'created' ? createdReceipts : receivedReceipts,
          ).map(([receiptId, isAcknowledged]) => (
            <AcknowledgmentItem key={receiptId}>
              <ReceiptDetails>
                <ReceiptInfo>
                  <span>{receiptId}</span>
                  <span>{isAcknowledged ? '✓ Acknowledged' : '⨯ Pending'}</span>
                </ReceiptInfo>
                {activeTab === 'received' && receivedContents[receiptId] && (
                  <ReceiptContent>{receivedContents[receiptId]}</ReceiptContent>
                )}
                {activeTab === 'created' && createdContents[receiptId] && (
                  <ReceiptContent>{createdContents[receiptId]}</ReceiptContent>
                )}
              </ReceiptDetails>
              {!isAcknowledged && activeTab === 'received' && (
                <AcknowledgeButton
                  onClick={() => handleAcknowledgeReceipt(receiptId)}
                >
                  Acknowledge
                </AcknowledgeButton>
              )}
            </AcknowledgmentItem>
          ))}
        </AcknowledgmentsList>
      </AcknowledgmentsSection>

      <LogoutButton onClick={logout}>Logout</LogoutButton>
    </FullPageCenter>
  );
}
