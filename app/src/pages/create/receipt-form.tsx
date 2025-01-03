import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: white;
  font-size: 1rem;
  font-weight: 500;
`;

const Description = styled.p`
  color: #a0a0a0;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid #333;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 1rem;
  width: 100%;
  &:focus {
    outline: none;
    border-color: #4a90e2;
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid #333;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 1rem;
  width: 100%;
  min-height: 200px;
  resize: vertical;
  &:focus {
    outline: none;
    border-color: #4a90e2;
  }
`;

const ErrorMessage = styled.p`
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

const SubmitButton = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: none;
  background: #4a90e2;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.2s;
  &:hover {
    background: #357abd;
  }
  &:disabled {
    background: #666;
    cursor: not-allowed;
  }
`;

const formSchema = z.object({
  receipt_id: z.string().min(1, 'Receipt ID is required'),
  recipient: z.string().min(1, 'Recipient address is required'),
  content: z.string().min(1, 'Content is required'),
});

export type ReceiptFormData = z.infer<typeof formSchema>;

interface ReceiptFormProps {
  onSubmit: (data: ReceiptFormData) => void;
  isSubmitting?: boolean;
}

export function ReceiptForm({
  onSubmit,
  isSubmitting = false,
}: ReceiptFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReceiptFormData>({
    resolver: zodResolver(formSchema),
  });

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Label>Receipt ID</Label>
        <Description>A unique identifier for this receipt</Description>
        <Input
          {...register('receipt_id')}
          placeholder="e.g., REC-001"
          disabled={isSubmitting}
        />
        {errors.receipt_id && (
          <ErrorMessage>{errors.receipt_id.message}</ErrorMessage>
        )}
      </FormGroup>

      <FormGroup>
        <Label>Recipient Address</Label>
        <Description>The address of the receipt recipient</Description>
        <Input
          {...register('recipient')}
          placeholder="Enter recipient address"
          disabled={isSubmitting}
        />
        {errors.recipient && (
          <ErrorMessage>{errors.recipient.message}</ErrorMessage>
        )}
      </FormGroup>

      <FormGroup>
        <Label>Content</Label>
        <Description>
          Detailed description of the receipt purpose and terms
        </Description>
        <TextArea
          {...register('content')}
          placeholder="Enter the receipt details, terms, and any relevant information..."
          disabled={isSubmitting}
        />
        {errors.content && (
          <ErrorMessage>{errors.content.message}</ErrorMessage>
        )}
      </FormGroup>

      <SubmitButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Creating Receipt...' : 'Create Receipt'}
      </SubmitButton>
    </FormContainer>
  );
}
