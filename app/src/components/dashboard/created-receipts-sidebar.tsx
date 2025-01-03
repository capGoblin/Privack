import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { EmptyState } from '../ui/empty-state';
import { CreatedReceiptCard } from './created-receipt-card';
import { CreatedReceipt } from '../../types/receipt';
import { ClientApiDataSource } from '../../api/dataSource/ClientApiDataSource';
import { ReceiptAddress } from './receipt-address';

const Aside = styled.aside<{ isOpen: boolean }>`
  position: fixed;
  inset-block: 0;
  left: 0;
  z-index: 30;
  width: 18rem;
  transform: translateX(${(props) => (props.isOpen ? '0' : '-100%')});
  background: rgba(0, 0, 0, 0.3);
  padding: 1.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
  transition: transform 0.3s ease-in-out;

  @media (min-width: 1024px) {
    position: relative;
    transform: none;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: white;
  margin: 0;
`;

const ScrollArea = styled.div`
  height: calc(100vh - 10rem);
  overflow-y: auto;
  padding-block: 1rem;
  margin-right: -0.5rem;
  padding-right: 0.5rem;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 0.25rem;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 0.25rem;
  }
`;

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

interface CreatedReceiptsSidebarProps {
  isOpen: boolean;
}

export function CreatedReceiptsSidebar({
  isOpen,
}: CreatedReceiptsSidebarProps) {
  const [receipts, setReceipts] = useState<CreatedReceipt[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchReceipts() {
      try {
        setIsLoading(true);
        setError(null);
        const api = new ClientApiDataSource();

        // Fetch created receipts
        const createdResult = await api.getCreatedReceipts({
          caller: '', // Will be set by ClientApiDataSource
        });
        if (!isMounted) return;

        if (createdResult?.error) {
          throw new Error(createdResult.error.message);
        }

        // Fetch created receipt contents
        const contentsResult = await api.getCreatedReceiptContents({
          caller: '', // Will be set by ClientApiDataSource
        });
        if (!isMounted) return;

        if (contentsResult?.error) {
          throw new Error(contentsResult.error.message);
        }

        // Combine the data
        const receiptsList = Object.entries(
          createdResult.data.acknowledgments,
        ).map(([id, isAcknowledged]) => ({
          id,
          recipientAddress: 'Unknown', // We'll need to implement this in the API later
          content: contentsResult.data.contents[id] || '',
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
      <Aside isOpen={isOpen}>
        <Header>
          <Title>Created Receipts</Title>
        </Header>
        <EmptyState
          icon="⚠️"
          title="Error loading receipts"
          description={error}
        />
      </Aside>
    );
  }

  if (isLoading) {
    return (
      <Aside isOpen={isOpen}>
        <Header>
          <Title>Created Receipts</Title>
        </Header>
        <EmptyState
          icon="⌛"
          title="Loading receipts"
          description="Please wait while we fetch your receipts..."
        />
      </Aside>
    );
  }

  return (
    <Aside isOpen={isOpen}>
      <Header>
        <Title>Created Receipts</Title>
      </Header>
      <ScrollArea>
        {receipts.length === 0 ? (
          <EmptyState
            icon="📄"
            title="No receipts created"
            description="Create a new receipt to get started"
          />
        ) : (
          <CardList>
            {receipts.map((receipt) => (
              <CreatedReceiptCard key={receipt.id} receipt={receipt} />
            ))}
          </CardList>
        )}
      </ScrollArea>
    </Aside>
  );
}
