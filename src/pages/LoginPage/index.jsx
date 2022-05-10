import React, { useContext } from 'react';
import FormLogin from '../../components/FormLogin';

import { AuthContext } from '../../context/AuthContext';

import './login.css';

const LoginPage = () => {
  const { login } = useContext(AuthContext);

  const onSubmit = (data) => {
    handleLogin(data.email, data.password);
  };

  const handleLogin = async (email, password) => {
    try {
      await login(email, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="body">
      <FormLogin onSubmit={onSubmit} />
    </div>
  );
};

export default LoginPage;
