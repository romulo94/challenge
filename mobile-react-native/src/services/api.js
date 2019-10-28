import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com', // exporta a URL base da api
});

export default api;
