import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import SetupPage from './pages/setup';
import Authenticate from './pages/login/Authenticate';
import HomePage from './pages/home';
import CreatePage from './pages/create';
import { DashboardPage } from './pages/dashboard';
import { AccessTokenWrapper } from '@calimero-network/calimero-client';
import { getNodeUrl } from './utils/node';
import { Navbar } from './components/navbar';

function AppRoutes() {
  const location = useLocation();
  const showNavbar = ['/home', '/create', '/dashboard'].includes(
    location.pathname,
  );

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<SetupPage />} />
        <Route path="/auth" element={<Authenticate />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <AccessTokenWrapper getNodeUrl={getNodeUrl}>
      <BrowserRouter basename="/">
        <AppRoutes />
      </BrowserRouter>
    </AccessTokenWrapper>
  );
}
