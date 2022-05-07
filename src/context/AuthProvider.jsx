/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';

import { createSession } from '../utils/api/session/createSession';

export const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.setItem('user');

    if (user) {
      setuser(JSON.parse(user));
    }
  }, []);

  const login = async (email, password) => {
    const response = await createSession(
      email,
      password,
    );

    localStorage.setItem(
      'user',
      JSON.stringify(response.user),
    );

    setuser(response.data.user);
  };

  const logout = () => {
    setuser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        authenticated: !!user,
        user,
        loading,
        login,
        logout,
        userId: '62544f36b5e025f348d5e1fb',
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
