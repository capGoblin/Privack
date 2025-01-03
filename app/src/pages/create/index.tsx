import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ReceiptForm, ReceiptFormData } from './receipt-form';
import { ClientApiDataSource } from '../../api/dataSource/ClientApiDataSource';

const PageContainer = styled.div`
  max-width: 48rem;
  margin: 0 auto;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const IconContainer = styled.div`
  height: 3rem;
  width: 3rem;
  border-radius: 0.5rem;
  background: rgba(74, 144, 226, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FileIcon = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  color: #4a90e2;
  &:before {
    content: '📄';
  }
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Title = styled.h2`
  color: white;
  font-size: 1.875rem;
  font-weight: bold;
  letter-spacing: -0.025em;
`;

const Subtitle = styled.p`
  color: #a0a0a0;
`;

const Card = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
`;

const CardContent = styled.div`
  position: relative;
  padding: 2rem;
`;

export default function CreatePage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (data: ReceiptFormData) => {
    setIsSubmitting(true);
    try {
      const result = await new ClientApiDataSource().addReceipt({
        receipt_id: data.receipt_id,
        recipient: data.recipient,
        content: data.content,
        caller: '', // Will be set by ClientApiDataSource
      });

      if (result?.error) {
        console.error('Error:', result.error);
        window.alert(`${result.error.message}`);
        return;
      }

      window.alert('Receipt created successfully!');
    } catch (error) {
      console.error('Error creating receipt:', error);
      window.alert('Failed to create receipt. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageContainer>
      <HeaderSection>
        <IconContainer>
          <FileIcon />
        </IconContainer>
        <HeaderContent>
          <Title>Create Receipt</Title>
          <Subtitle>Create a new receipt for acknowledgment</Subtitle>
        </HeaderContent>
      </HeaderSection>

      <Card>
        <CardContent>
          <ReceiptForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
        </CardContent>
      </Card>
    </PageContainer>
  );
}
