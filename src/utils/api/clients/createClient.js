import { api } from '../../api/api';

export const CreateClient = async (
  userId,
  data,
) => {
  try {
    let url = `/v1/users/${userId}/clients/`;

    return api.post(`${url}`, data);
  } catch (error) {
    error;
  }
};
