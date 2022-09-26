import {AxiosResponse, AxiosError, AxiosRequestConfig} from 'axios';

export const responseInterceptor = (response: AxiosResponse) => {
  return Promise.resolve({
    status: response.status,
    data: response.data.data,
    errors: response.data.errors
  });
};

export const errorInterceptor = (error: AxiosError) => {
  console.log('error: ', error)
  return Promise.reject(error);
};

export const requestInterceptor = (config: AxiosRequestConfig) => {
  return config;
};
