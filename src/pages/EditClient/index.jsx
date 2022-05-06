import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

import Header from '../../components/Header';

import { updateClient, getClient } from '../../utils/api';

import './edit.css';

const EditClient = () => {
  const {
    register,
    handleSubmit,
    formState: { erros },
    reset,
  } = useForm();

  const userId = '62544f36b5e025f348d5e1fb';
  const { id } = useParams();
  const history = useNavigate();

  useEffect(() => {
    getClient(userId, id).then((response) => {
      reset(response.data);
    });
  }, []);

  const onSubmit = (data) => {
    EditClient(userId, id, data);
    return history('/');
  };

  const EditClient = async (userId, id, Data) => {
    try {
      await updateClient(userId, id, Data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Nome</label>
          <input type="text" name="name" {...register('name')} />

          <label htmlFor="email">Email</label>
          <input type="text" name="email" {...register('email')} />

          <label htmlFor="password">Senha</label>
          <input type="text" name="password" {...register('password')} />

          <label htmlFor="brith">Data de nascimento</label>
          <input type="text" name="brith" {...register('brith')} />

          <div className="container-button">
            <button>editar cliente</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditClient;
