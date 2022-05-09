import { api } from '../../api/api';

export const DeleteClient = async (userId, id) => {
  try {
    let url = `/v1/users/${userId}/clients/${id}`;

    return api.delete(url);
  } catch (error) {
    error;
  }
};
