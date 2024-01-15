// src/axiosConfig.js
import axios from 'axios';
const cookieValue = 'abuse_interstitial=64a1-34-125-28-20.ngrok-free.app';

const axiosInstance = axios.create({
  baseURL: 'http://64a1-34-125-28-20.ngrok-free.app/',
  timeout: 5000, // Set a timeout (milliseconds) for requests
  headers: {
    'Content-Type': 'application/json',
    'cookie':cookieValue
    // You can add common headers here
  },
});

export default axiosInstance;
