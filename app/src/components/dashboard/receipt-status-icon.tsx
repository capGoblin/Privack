import React from 'react';
import styled from 'styled-components';

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
`;

const CheckIcon = styled.div`
  color: #22c55e;
  &:before {
    content: '✓';
  }
`;

const XIcon = styled.div`
  color: #ef4444;
  &:before {
    content: '×';
  }
`;

interface ReceiptStatusIconProps {
  isAcknowledged: boolean;
}

export function ReceiptStatusIcon({ isAcknowledged }: ReceiptStatusIconProps) {
  return (
    <IconContainer>{isAcknowledged ? <CheckIcon /> : <XIcon />}</IconContainer>
  );
}
