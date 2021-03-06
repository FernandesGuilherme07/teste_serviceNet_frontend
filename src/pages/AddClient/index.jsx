import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import Header from '../../components/Header';
import { AuthContext } from '../../context/AuthContext';
import { CreateClient } from '../../utils/api/clients/createClient';

import './add.css';

const AddClient = () => {
  const { user } = useContext(AuthContext);
  const userId = user.id;
  const {
    register,
    handleSubmit,
    formState: { erros },
  } = useForm();

  const history = useNavigate();

  const onSubmit = (data) => {
    newClient(data);
    return history('/');
  };

  const newClient = async (Data) => {
    try {
      await CreateClient(userId, Data);
      toast.success(`Cliente criado com sucesso!`);
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
          <input
            required
            placeholder="Digite o nome do cliente..."
            type="text"
            name="name"
            {...register('name')}
          />

          <label htmlFor="email">Email</label>
          <input
            required
            placeholder="Digite o email do cliente..."
            type="email"
            name="email"
            {...register('email')}
          />

          <label htmlFor="password">Senha</label>
          <input
            required
            placeholder="Digite a senha do cliente..."
            type="text"
            name="password"
            {...register('password')}
          />
          <label htmlFor="brith">Data de nascimento</label>
          <input
            required
            placeholder="Digite a data de nascimento..."
            type="date"
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
