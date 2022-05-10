import React, { useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import Header from '../../components/Header';

import { updateClient } from '../../utils/api/clients/updateClient';
import { getClient } from '../../utils/api/clients/showClient';

import './edit.css';
import { AuthContext } from '../../context/AuthContext';

const EditClient = () => {
  const { user } = useContext(AuthContext);
  const userId = user.id;
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { erros },
    reset,
  } = useForm();
  const Navigate = useNavigate();

  useEffect(() => {
    getClient(userId, id).then((response) => {
      reset(response.data);
    });
  }, []);

  const onSubmit = (data) => {
    EditClient(id, data);
    return Navigate('/');
  };

  const EditClient = async (id, Data) => {
    const userId = user.id;
    try {
      await updateClient(userId, id, Data);
      toast.success(`Cliente editado com sucesso!`);
    } catch (error) {
      toast.error(`Email já existente.`);
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Nome</label>
          <input required type="text" name="name" {...register('name')} />

          <label htmlFor="email">Email</label>
          <input required type="email" name="email" {...register('email')} />

          <label htmlFor="password">Senha</label>
          <input
            required
            type="text"
            name="password"
            {...register('password')}
          />

          <label htmlFor="brith">Data de nascimento</label>
          <input required type="date" name="brith" {...register('brith')} />

          <div className="container-button">
            <button>editar cliente</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditClient;
