import { api } from '../../api/api';

export const getClients = async (
  userId,
  query,
) => {
  let url = `/v1/users/${userId}/clients/`;

  if (query !== '') {
    url += `?q=${query}`;
  }
  return api.get(`${url}`);
};
