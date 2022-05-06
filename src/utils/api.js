import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:5000/',
});

export const getClients = async (userId, query) => {
  let url = `/v1/users/${userId}/clients/`;

  if (query !== '') {
    url += `?q=${query}`;
  }
  return api.get(`${url}`);
};

export const CreateClient = async (userId, data) => {
  try {
    let url = `/v1/users/${userId}/clients/`;

    return api.post(`${url}`, data);
  } catch (error) {
    error;
  }
};
