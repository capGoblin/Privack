import React, { useState } from 'react';
import styled from 'styled-components';
import { CreatedReceiptsSidebar } from '../../components/dashboard/created-receipts-sidebar';
import { ReceivedReceiptsList } from '../../components/dashboard/received-receipts-list';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background: linear-gradient(to bottom right, #1a1a1a, #2d2d2d);
`;

const MenuButton = styled.button`
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 40;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 0.25rem;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Container>
      <MenuButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        {isSidebarOpen ? '✕' : '☰'}
      </MenuButton>
      <CreatedReceiptsSidebar isOpen={isSidebarOpen} />
      <ReceivedReceiptsList />
    </Container>
  );
}
