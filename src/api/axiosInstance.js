import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://preonboarding.platdev.net',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
