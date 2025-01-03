import React from 'react';
import styled from 'styled-components';

const AddressText = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  font-family: monospace;
  color: white;
`;

interface ReceiptAddressProps {
  address: string;
  label?: string;
}

export function formatAddress(address: string): string {
  if (address.length <= 13) return address;
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function ReceiptAddress({ address, label }: ReceiptAddressProps) {
  return (
    <AddressText>
      {label && `${label}: `}
      {formatAddress(address)}
    </AddressText>
  );
}
