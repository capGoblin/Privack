import React from 'react';
import styled from 'styled-components';
import { CreatedReceipt } from '../../types/receipt';

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

const RecipientAddress = styled.div`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

interface CreatedReceiptCardProps {
  receipt: CreatedReceipt;
}

export function CreatedReceiptCard({ receipt }: CreatedReceiptCardProps) {
  return (
    <Card>
      <Header>
        <Title>Receipt #{receipt.id}</Title>
        <Status isAcknowledged={receipt.isAcknowledged}>
          {receipt.isAcknowledged ? 'Acknowledged' : 'Pending'}
        </Status>
      </Header>
      <Content>{receipt.content}</Content>
      <RecipientAddress>To: {receipt.recipientAddress}</RecipientAddress>
    </Card>
  );
}
