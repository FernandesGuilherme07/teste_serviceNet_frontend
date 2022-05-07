import { api } from '../../api/api';

export const getClient = async (userId, id) => {
  let url = `/v1/users/${userId}/clients/${id}`;

  return api.get(`${url}`);
};
