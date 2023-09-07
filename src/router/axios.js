
import axios from 'axios';

// Create an Axios instance with custom configurations
const instance = axios.create({
  baseURL: 'http://localhost:1337/api/v1/',
  timeout: 10000
});

export default instance;
