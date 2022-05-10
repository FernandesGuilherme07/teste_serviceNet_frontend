import { api } from '../../api/api';
import { toast } from 'react-toastify';

export const CreateClient = async (userId, data) => {
  try {
    let url = `/v1/users/${userId}/clients/`;

    return api.post(`${url}`, data);
  } catch (error) {
    toast.success('email e/ou senha inválido.');
  }
};
