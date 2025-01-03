import React from 'react';
import styled from 'styled-components';
import { ReceivedReceipt } from '../../types/receipt';
import { ClientApiDataSource } from '../../api/dataSource/ClientApiDataSource';

const Card = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  padding: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const Title = styled.h4`
  font-size: 0.875rem;
  font-weight: 500;
  color: white;
  margin: 0;
`;

const Status = styled.span<{ isAcknowledged: boolean }>`
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  background: ${(props) =>
    props.isAcknowledged ? 'rgba(34, 197, 94, 0.2)' : 'rgba(234, 179, 8, 0.2)'};
  color: ${(props) =>
    props.isAcknowledged ? 'rgb(34, 197, 94)' : 'rgb(234, 179, 8)'};
`;

const Content = styled.p`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const SenderAddress = styled.div`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 0.5rem;
`;

const AcknowledgeButton = styled.button`
  width: 100%;
  margin-top: 1rem;
  padding: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  background: rgba(34, 197, 94, 0.2);
  color: rgb(34, 197, 94);
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: rgba(34, 197, 94, 0.3);
  }

  &:disabled {
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.3);
    cursor: not-allowed;
  }
`;

interface ReceivedReceiptCardProps {
  receipt: ReceivedReceipt;
}

export function ReceivedReceiptCard({ receipt }: ReceivedReceiptCardProps) {
  const handleAcknowledge = async () => {
    try {
      const api = new ClientApiDataSource();
      const result = await api.acknowledgeReceipt({
        caller: '', // Will be set by ClientApiDataSource
        receipt_id: receipt.id,
      });

      if (result?.error) {
        console.error('Error:', result.error);
        window.alert(`${result.error.message}`);
        return;
      }

      window.alert('Receipt acknowledged successfully!');
      window.location.reload(); // Refresh to update the UI
    } catch (error) {
      console.error('Failed to acknowledge receipt:', error);
      window.alert('Failed to acknowledge receipt. Please try again.');
    }
  };

  return (
    <Card>
      <Header>
        <Title>Receipt #{receipt.id}</Title>
        <Status isAcknowledged={receipt.isAcknowledged}>
          {receipt.isAcknowledged ? 'Acknowledged' : 'Pending'}
        </Status>
      </Header>
      <Content>{receipt.content}</Content>
      <SenderAddress>From: {receipt.senderAddress}</SenderAddress>
      {!receipt.isAcknowledged && (
        <AcknowledgeButton onClick={handleAcknowledge}>
          Acknowledge Receipt
        </AcknowledgeButton>
      )}
    </Card>
  );
}
