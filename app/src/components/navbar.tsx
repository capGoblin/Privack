import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  height: 4rem;
  align-items: center;
  padding: 0 1rem;
`;

const Brand = styled(Link)`
  margin-right: 2rem;
  display: none;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const BrandText = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
  letter-spacing: -0.025em;
  background: linear-gradient(to right, #38bdf8, #8b5cf6);
  -webkit-background-clip: text;
  color: transparent;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled(Link)<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  text-decoration: none;
  transition: color 0.2s;
  color: ${(props) =>
    props.$isActive ? '#38bdf8' : 'rgba(255, 255, 255, 0.6)'};
  font-weight: ${(props) => (props.$isActive ? '500' : '400')};

  &:hover {
    color: #38bdf8;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

export function Navbar() {
  const location = useLocation();

  return (
    <Nav>
      <Container>
        <Brand to="/home">
          <BrandText>Privack</BrandText>
        </Brand>
        <NavLinks>
          <NavLink
            to="/dashboard"
            $isActive={location.pathname === '/dashboard'}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="7" height="9" x="3" y="3" rx="1" />
              <rect width="7" height="5" x="14" y="3" rx="1" />
              <rect width="7" height="9" x="14" y="12" rx="1" />
              <rect width="7" height="5" x="3" y="16" rx="1" />
            </svg>
            <span>Dashboard</span>
          </NavLink>
          <NavLink to="/create" $isActive={location.pathname === '/create'}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v8" />
              <path d="M8 12h8" />
            </svg>
            <span>Create</span>
          </NavLink>
        </NavLinks>
      </Container>
    </Nav>
  );
}
