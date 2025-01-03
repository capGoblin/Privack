import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { EmptyState } from '../ui/empty-state';
import { ReceivedReceiptCard } from './received-receipt-card';
import { ReceivedReceipt } from '../../types/receipt';
import { ClientApiDataSource } from '../../api/dataSource/ClientApiDataSource';

const Container = styled.div`
  flex: 1;
  padding: 1.5rem;
  overflow-y: auto;
`;

const Header = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  margin: 0 0 0.5rem 0;
`;

const Description = styled.p`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
`;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 1rem;
`;

export function ReceivedReceiptsList() {
  const [receipts, setReceipts] = useState<ReceivedReceipt[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchReceipts() {
      try {
        setIsLoading(true);
        setError(null);
        const api = new ClientApiDataSource();

        // Fetch received receipts
        const receivedResult = await api.getReceivedReceipts({
          caller: '', // Will be set by ClientApiDataSource
        });
        if (!isMounted) return;

        if (receivedResult?.error) {
          throw new Error(receivedResult.error.message);
        }

        // Fetch acknowledged receipt contents
        const acknowledgedContentsResult =
          await api.getReceivedAcknowledgedContents({
            caller: '', // Will be set by ClientApiDataSource
          });
        if (!isMounted) return;

        if (acknowledgedContentsResult?.error) {
          throw new Error(acknowledgedContentsResult.error.message);
        }

        // Combine the data
        const receiptsList = Object.entries(
          receivedResult.data.acknowledgments,
        ).map(([id, isAcknowledged]) => ({
          id,
          senderAddress: 'Unknown', // We'll need to implement this in the API later
          content: isAcknowledged
            ? acknowledgedContentsResult.data.contents[id] || ''
            : '',
          isAcknowledged,
        }));

        if (isMounted) {
          setReceipts(receiptsList);
        }
      } catch (error) {
        if (isMounted) {
          const message =
            error instanceof Error ? error.message : 'Failed to fetch receipts';
          setError(message);
          console.error('Failed to fetch receipts:', error);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    fetchReceipts();

    return () => {
      isMounted = false;
    };
  }, []);

  if (error) {
    return (
      <Container>
        <Header>
          <Title>Received Receipts</Title>
          <Description>View and acknowledge receipts sent to you</Description>
        </Header>
        <EmptyState
          icon="⚠️"
          title="Error loading receipts"
          description={error}
        />
      </Container>
    );
  }

  if (isLoading) {
    return (
      <Container>
        <Header>
          <Title>Received Receipts</Title>
          <Description>View and acknowledge receipts sent to you</Description>
        </Header>
        <EmptyState
          icon="⌛"
          title="Loading receipts"
          description="Please wait while we fetch your receipts..."
        />
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <Title>Received Receipts</Title>
        <Description>View and acknowledge receipts sent to you</Description>
      </Header>
      {receipts.length === 0 ? (
        <EmptyState
          icon="📬"
          title="No receipts received"
          description="Receipts sent to you will appear here"
        />
      ) : (
        <List>
          {receipts.map((receipt) => (
            <ReceivedReceiptCard key={receipt.id} receipt={receipt} />
          ))}
        </List>
      )}
    </Container>
  );
}
