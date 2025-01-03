// Receipt type definitions
export interface BaseReceipt {
  id: string;
  content: string;
  isAcknowledged: boolean;
}

export interface CreatedReceipt {
  id: string;
  recipientAddress: string;
  content: string;
  isAcknowledged: boolean;
}

export interface ReceivedReceipt {
  id: string;
  senderAddress: string;
  content: string;
  isAcknowledged: boolean;
}

export interface GetCreatedReceiptsResponse {
  data: {
    acknowledgments: Record<string, boolean>;
  };
  error?: {
    message: string;
  };
}

export interface GetCreatedReceiptContentsResponse {
  data: {
    contents: Record<string, string>;
  };
  error?: {
    message: string;
  };
}

export interface GetReceivedReceiptsResponse {
  data: {
    acknowledgments: Record<string, boolean>;
  };
  error?: {
    message: string;
  };
}

export interface GetReceivedReceiptContentsResponse {
  data: {
    contents: Record<string, string>;
  };
  error?: {
    message: string;
  };
}

export interface AcknowledgeReceiptResponse {
  data: {
    success: boolean;
  };
  error?: {
    message: string;
  };
}

export interface CreateReceiptResponse {
  data: {
    id: string;
  };
  error?: {
    message: string;
  };
}
