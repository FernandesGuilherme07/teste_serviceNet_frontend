import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginPage from './pages/Login';

import HomePage from './pages/HomePage';
import EditClient from './pages/EditClient';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/edit/:id" element={<EditClient />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
