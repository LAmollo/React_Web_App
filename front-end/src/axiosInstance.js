// frontend/src/axiosInstance.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api', // Adjust baseURL based on your backend URL
});

let userData = JSON.parse(localStorage.getItem('userData'));
let token = userData ? userData.token : '';

instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export default instance;
