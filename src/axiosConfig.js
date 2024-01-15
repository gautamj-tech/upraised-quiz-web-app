// src/axiosConfig.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://hello-world-empty-bread-c761.gautamjain673.workers.dev',
  timeout: 5000, // Set a timeout (milliseconds) for requests
  headers: {
    'Content-Type': 'application/json',
    // You can add common headers here
  },
});

export default axiosInstance;
