import axios from 'axios';

const baseUrl = process.env.NODE_ENV !== 'production' ? 'https://doggies-api.herokuapp.com' : 'http://localhost:3000' 

const api = axios.create({
  baseURL: baseUrl
});

// ========================================
// ================ AUTH ==================
// ========================================

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', { auth: loginData });
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users', { user: registerData });
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const resp = await api.get('/auth/verify');
    return resp.data;
  }
  return null;
}

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
}


export const getAllDogs = async () => {
  const resp = await api.get('/dogs');
  return resp.data;
}

export const getOneDog = async (id) => {
  const resp = await api.get(`/dogs/${id}`);
  return resp.data;
}

export const postDog = async (dogData) => {
  const resp = await api.post('/dogs', dogData);
  return resp.data;
}

export const putDog = async (id, dogData) => {
  const resp = await api.put(`/dogs/${id}`, dogData);
  return resp.data;
}

export const destroyDog = async (id) => {
  const resp = await api.delete(`/dogs/${id}`);
  return resp;
}

export const postAdopt = async (adoptData, dogId) => {
  const resp = await api.post(`/dogs/${dogId}/adopts`, adoptData);
  return resp.data;
}
