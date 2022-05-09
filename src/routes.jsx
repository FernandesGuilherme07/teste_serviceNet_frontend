/* eslint-disable react/prop-types */
import React, { useContext } from 'react';

import { Route, Routes, useNavigate } from 'react-router-dom';

import LoginPage from './pages/LoginPage';

import HomePage from './pages/HomePage';
import EditClient from './pages/EditClient';
import AddClient from './pages/AddClient';
import Loading from './components/Loading';
import { AuthContext } from './context/AuthContext';

const AppRoutes = () => {
  const Navigate = useNavigate();

  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
      return <Loading />;
    }

    if (!authenticated) {
      return Navigate('/login');
    }
    return children;
  };

  return (
    <Routes>
      <Route exact path="/login" element={<LoginPage />} />

      <Route
        path="/"
        element={
          <Private>
            <HomePage />
          </Private>
        }
      />

      <Route
        exact
        path="/edit/:id"
        element={
          <Private>
            <EditClient />
          </Private>
        }
      />

      <Route
        exact
        path="/add"
        element={
          <Private>
            <AddClient />
          </Private>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
