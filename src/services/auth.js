import axios from 'axios';
import { rootApi } from '../api';

export const authServices = () => {
  const registerUser = (userData) => {
    return axios.post(`${rootApi}/auth/register`, userData);
  };

  const login = (loginData) => {
    return axios.post(`${rootApi}/auth/login`, loginData);
  }
  return {
    registerUser,
    login
  };
};
