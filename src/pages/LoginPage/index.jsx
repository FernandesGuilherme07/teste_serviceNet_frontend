import React, { useContext } from 'react';

import { useForm } from 'react-hook-form';

import { AuthContext } from '../../context/AuthContext';

import './login.css';

const LoginPage = () => {
  const { login } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { erros },
  } = useForm();

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
      <form onSubmit={handleSubmit(onSubmit)} id="form">
        <div id="login">
          <section id="container-logo">
            <img src="./logo.png" alt="" />
          </section>
          <section>
            <label htmlFor="email"> Email</label>
            <input
              type="email"
              required
              name="email"
              placeholder="Seu email..."
              {...register('email')}
            />
          </section>
          <section>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              required
              name="password"
              placeholder="Sua senha..."
              {...register('password')}
            />
          </section>
          <section id="container-button">
            <button>Entrar</button>
          </section>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
