import React, { useContext } from 'react';

import { useForm } from 'react-hook-form';

import { AuthContext } from '../../context/AuthContext';

import './login.css';

const LoginPage = () => {
  const { authenticated, user, login } =
    useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { erros },
  } = useForm();

  const handleLogin = async (data) => {
    try {
      await login(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="body">
      <form
        onSubmit={handleSubmit(handleLogin)}
        id="form"
      >
        <div id="login">
          <section id="container-logo">
            <img src="./logo.png" alt="" />
          </section>
          autenticado:{String(authenticated)}
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
            <label htmlFor="password">
              Senha
            </label>
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
