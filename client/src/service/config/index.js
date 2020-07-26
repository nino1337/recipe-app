import axios from 'axios';

const defaultConfig = {
  validateStatus: (status) => status < 500,
};

export const userApiInstance = axios.create({
  ...defaultConfig,
  baseURL: `${process.env.REACT_APP_USER_SERVICE}/api/user/`,
});

export const trainingDataApiInstance = axios.create({
  ...defaultConfig,
  baseURL: `${process.env.REACT_APP_USER_SERVICE}/api/training/`,
});
