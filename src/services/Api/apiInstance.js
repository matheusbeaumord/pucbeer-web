const API = import.meta.env.VITE_API_URL;
import axios from 'axios';

const instance = axios.create({
  baseURL: API,
});

export default instance;
