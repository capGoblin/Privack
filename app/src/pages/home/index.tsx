import {
  clearAppEndpoint,
  clearJWT,
  getAccessToken,
  getAppEndpointKey,
  getRefreshToken,
} from '@calimero-network/calimero-client';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { getStorageApplicationId } from '../../utils/node';
import { clearApplicationId } from '../../utils/storage';
import { Link, useNavigate } from 'react-router-dom';

const FullPageCenter = styled.div`
  display: flex;
  min-height: calc(100vh - 4rem);
  width: 100vw;
  background-color: #111111;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const HeroGradient = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(
    circle at top center,
    rgba(37, 99, 235, 0.1) 0%,
    rgba(0, 0, 0, 0) 50%
  );
`;

const ContentWrapper = styled.div`
  text-align: center;
  position: relative;
  z-index: 10;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  letter-spacing: -0.025em;
  margin-bottom: 1rem;
  color: white;

  @media (min-width: 640px) {
    font-size: 5rem;
  }

  @media (min-width: 768px) {
    font-size: 6rem;
  }

  @media (min-width: 1024px) {
    font-size: 7rem;
  }
`;

const GradientText = styled.span`
  background: linear-gradient(to right, #38bdf8, #8b5cf6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const Description = styled.p`
  max-width: 700px;
  margin: 0 auto;
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.7);
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 3rem;
  position: relative;
  z-index: 10;
`;

const StyledLink = styled(Link)<{ $primary?: boolean }>`
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s;

  ${(props) =>
    props.$primary
      ? `
    background: linear-gradient(to right, #38bdf8, #8b5cf6);
    color: white;
    &:hover {
      opacity: 0.9;
      box-shadow: 0 0 20px rgba(56, 189, 248, 0.5);
    }
  `
      : `
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
    }
  `}
`;

export default function HomePage() {
  const navigate = useNavigate();
  const url = getAppEndpointKey();
  const applicationId = getStorageApplicationId();
  const accessToken = getAccessToken();
  const refreshToken = getRefreshToken();

  useEffect(() => {
    if (!url || !applicationId || !accessToken || !refreshToken) {
      navigate('/auth');
    }
  }, [accessToken, applicationId, navigate, refreshToken, url]);

  const logout = () => {
    clearAppEndpoint();
    clearJWT();
    clearApplicationId();
    navigate('/auth');
  };

  return (
    <FullPageCenter>
      <HeroGradient />
      <ContentWrapper>
        <Title>
          Welcome to <GradientText>Privack</GradientText>
        </Title>
        <Description>
          Secure and private receipt acknowledgment system for the modern web
        </Description>
      </ContentWrapper>
      <ButtonContainer>
        <StyledLink to="/dashboard" $primary>
          View Dashboard
        </StyledLink>
        <StyledLink to="/create">Create Receipt</StyledLink>
      </ButtonContainer>
    </FullPageCenter>
  );
}
