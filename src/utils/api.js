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

export const getClient = async (userId, id) => {
  let url = `/v1/users/${userId}/clients/${id}`;

  return api.get(`${url}`);
};

export const updateClient = async (userId, id, data) => {
  let url = `/v1/users/${userId}/clients/${id}`;

  return api.put(`${url}`, data);
};

export const CreateClient = async (userId, data) => {
  try {
    let url = `/v1/users/${userId}/clients/`;

    return api.post(`${url}`, data);
  } catch (error) {
    error;
  }
};

export const DeleteClient = async (userId, id) => {
  try {
    let url = `/v1/users/${userId}/clients/${id}`;

    return api.delete(url);
  } catch (error) {
    error;
  }
};
