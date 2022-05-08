import { api } from '../../api/api';

export const updateClient = async (
  userId,
  id,
  data,
) => {
  let url = `/v1/users/${userId}/clients/${id}`;

  return api.put(`${url}`, data);
};
