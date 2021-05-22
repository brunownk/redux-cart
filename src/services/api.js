import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-test-carrinho.herokuapp.com/',
  headers: {
    Accept: 'application/json',
  },
});

export default api;
