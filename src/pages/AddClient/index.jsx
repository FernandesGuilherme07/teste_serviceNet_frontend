import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header';

import { CreateClient } from '../../utils/api';

import './add.css';

const AddClient = () => {
  const {
    register,
    handleSubmit,
    formState: { erros },
  } = useForm();

  const history = useNavigate();

  const onSubmit = (data) => {
    const newClient = async (Data) => {
      const userId = '62544f36b5e025f348d5e1fb';

      try {
        await CreateClient(userId, Data);
      } catch (error) {
        console.log(error);
      }
    };
    newClient(data);
    return history('/');
  };

  return (
    <>
      <Header />
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Nome</label>
          <input
            placeholder="Digite o nome do cliente..."
            type="text"
            name="name"
            {...register('name')}
          />

          <label htmlFor="email">Email</label>
          <input
            placeholder="Digite o email do cliente..."
            type="text"
            name="email"
            {...register('email')}
          />

          <label htmlFor="password">Senha</label>
          <input
            placeholder="Digite a senha do cliente..."
            type="text"
            name="password"
            {...register('password')}
          />
          <label htmlFor="brith">Data de nascimento</label>
          <input
            placeholder="Digite a data de nascimento..."
            type="text"
            name="brith"
            {...register('brith')}
          />
          <div className="container-button">
            <button>+ adicionar cliente</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddClient;
