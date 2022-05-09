import { api } from '../api';

export const createSession = async (
  email,
  password,
) => {
  return api.post('/v1/sessions/', {
    email,
    password,
  });
};
