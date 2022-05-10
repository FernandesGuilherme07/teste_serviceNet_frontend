/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { AuthContext } from './AuthContext';
import { createSession } from '../utils/api/session/createSession';
import { api } from '../utils/api/api';

export const AuthProvider = ({ children }) => {
  const Navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');

    if (user && token) {
      setUser(JSON.parse(user));
      api.defaults.headers.Authorization = `Bearer ${token}`;
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const response = await createSession(email, password);
      api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

      localStorage.setItem('user', JSON.stringify(response.data.user));
      localStorage.setItem('user', response.data.token);

      setUser(response.data.user);

      Navigate(`/`);
    } catch (error) {
      toast.error('email e/ou senha inválido.');
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    api.defaults.headers.Autorization = null;
    setUser(null);

    Navigate('/login');
  };

  return (
    <AuthContext.Provider
      value={{
        authenticated: !!user,
        user,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
