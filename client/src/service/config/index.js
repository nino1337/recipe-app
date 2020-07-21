import axios from 'axios';

const defaultConfig = {
  validateStatus: (status) => status < 500,
};

export const userApiInstance = axios.create({
  ...defaultConfig,
  baseURL: `${process.env.REACT_APP_DOMAIN}/api/user/`,
});

export const trainingDataApiInstance = axios.create({
  ...defaultConfig,
  baseURL: `${process.env.REACT_APP_DOMAIN}/api/training/`,
});
