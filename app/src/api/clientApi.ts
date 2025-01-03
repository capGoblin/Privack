import { ApiResponse } from '@calimero-network/calimero-client';

export interface AddReceiptRequest {
  receipt_id: string;
  recipient: string;
  content: string;
  caller: string;
}

export interface AddReceiptResponse {
  success: boolean;
}

export interface GetCreatedReceiptsRequest {
  caller: string;
}

export interface GetReceivedReceiptsRequest {
  caller: string;
}

export interface GetCreatedReceiptContentsRequest {
  caller: string;
}

export interface GetReceivedAcknowledgedContentsRequest {
  caller: string;
}

export interface ReceiptContentsResponse {
  contents: Record<string, string>;
}

export interface ReceiptsResponse {
  acknowledgments: Record<string, boolean>;
}

export interface AcknowledgeReceiptRequest {
  receipt_id: string;
  caller: string;
}

export interface AcknowledgeReceiptResponse {
  success: boolean;
  content: string;
}

export interface IsAcknowledgedRequest {
  receipt_id: string;
  caller: string;
}

export interface IsAcknowledgedResponse {
  is_acknowledged: boolean;
}

export interface GetCreatorOfReceiptRequest {
  receipt_id: string;
}

export interface GetRecipientOfReceiptRequest {
  receipt_id: string;
}

export interface GetCreatorOfReceiptResponse {
  creator: string;
}

export interface GetRecipientOfReceiptResponse {
  recipient: string;
}

export enum ClientMethod {
  ADD_RECEIPT = 'add_receipt',
  GET_CREATED_RECEIPTS = 'get_created_receipts',
  GET_RECEIVED_RECEIPTS = 'get_received_receipts',
  ACKNOWLEDGE_RECEIPT = 'acknowledge_receipt',
  IS_ACKNOWLEDGED = 'is_acknowledged',
  GET_CREATED_RECEIPT_CONTENTS = 'get_created_receipt_contents',
  GET_RECEIVED_ACKNOWLEDGED_CONTENTS = 'get_received_acknowledged_receipt_contents',
  GET_CREATOR_OF_RECEIPT = 'get_creator_of_receipt',
  GET_RECIPIENT_OF_RECEIPT = 'get_recipient_of_receipt',
}

export interface ClientApi {
  addReceipt(params: AddReceiptRequest): ApiResponse<AddReceiptResponse>;
  getCreatedReceipts(
    params: GetCreatedReceiptsRequest,
  ): ApiResponse<ReceiptsResponse>;
  getReceivedReceipts(
    params: GetReceivedReceiptsRequest,
  ): ApiResponse<ReceiptsResponse>;
  acknowledgeReceipt(
    params: AcknowledgeReceiptRequest,
  ): ApiResponse<AcknowledgeReceiptResponse>;
  isAcknowledged(
    params: IsAcknowledgedRequest,
  ): ApiResponse<IsAcknowledgedResponse>;
  getCreatedReceiptContents(
    params: GetCreatedReceiptContentsRequest,
  ): ApiResponse<ReceiptContentsResponse>;
  getReceivedAcknowledgedContents(
    params: GetReceivedAcknowledgedContentsRequest,
  ): ApiResponse<ReceiptContentsResponse>;
  getCreatorOfReceipt(
    params: GetCreatorOfReceiptRequest,
  ): ApiResponse<GetCreatorOfReceiptResponse>;
  getRecipientOfReceipt(
    params: GetRecipientOfReceiptRequest,
  ): ApiResponse<GetRecipientOfReceiptResponse>;
}
