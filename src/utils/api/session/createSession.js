import { api } from '../api';

export const createSession = async (
  data,
  token,
) => {
  return api.post('/v1/sessions/', data);
};
