import {AxiosResponse, AxiosError, InternalAxiosRequestConfig} from 'axios';

export const responseInterceptor = (response: AxiosResponse): AxiosResponse<any, any> | Promise<AxiosResponse<any, any>> => {
  return Promise.resolve({
    ...response,
    data: response.data.data,
    errors: response.data.errors
  });
};

export const errorInterceptor = (error: AxiosError) => {
  console.log('error: ', error)
  return Promise.reject(error);
};

export const requestInterceptor = (config: InternalAxiosRequestConfig) => {
  return config;
};
