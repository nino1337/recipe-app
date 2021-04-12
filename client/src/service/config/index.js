import axios from 'axios';

const defaultConfig = {
  validateStatus: (status) => status < 500,
};

const userApiInstance = axios.create({
  ...defaultConfig,
  baseURL: process.env.REACT_APP_MOCKS
    ? 'http://localhost:3000/mocks/'
    : `${process.env.REACT_APP_USER_SERVICE}/api/user/`,
});

const workoutDataApiInstance = axios.create({
  ...defaultConfig,
  baseURL: process.env.REACT_APP_MOCKS
    ? 'http://localhost:3000/mocks/'
    : `${process.env.REACT_APP_USER_SERVICE}/api/workout/`,
});

if (!process.env.REACT_APP_MOCKS) {
  workoutDataApiInstance.interceptors.request.use(
    async (config) => {
      const newConfig = { ...config };
      const token = window.localStorage.getItem('access_token');

      if (token) {
        newConfig.headers['auth-token'] = token;
      }

      return newConfig;
    },
    (error) => {
      // Do something with request error
      return Promise.reject(error);
    },
  );
}

export { workoutDataApiInstance, userApiInstance };
