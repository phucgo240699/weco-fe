import axios from 'axios';
import moment from 'moment-timezone';
import { BASE_URL } from 'constants/index';
import {
  responseInterceptor,
  errorInterceptor,
  requestInterceptor,
} from './interceptors';

const baseAxios = axios.create({
  baseURL: BASE_URL,
  validateStatus: function (status) {
    return (
      status === 200 || // Success
      status === 400 || // Fail
      status === 401 || // Access token expired
      status === 403 || // Refresh token expired
      status === 500    // Crash error
    );
  }
})

baseAxios.interceptors.request.use(requestInterceptor, errorInterceptor);
baseAxios.interceptors.response.use(responseInterceptor, errorInterceptor);

const defaultHeader = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  TimeZone: moment.tz.guess(),
};

const getUrlWithQueryParams = (url: string, params?: any[]) => {
  if (params && params.length > 0) {
    const queryParams = params.reduce((prev, cur) => {
      const key = Object.keys(cur);
      const value = cur.key;
      return prev + `${key}=${value}`;
    })
    return `${url}?${queryParams}`;
  }
  return url;
}

interface Props {
  url: string;
  params?: any[];
  headers: any;
}

const getRequest = ({ url, params, headers = defaultHeader } : { url: string; params?: any[]; headers?: any; }) => {
  const queryUrl = getUrlWithQueryParams(url, params)
  return baseAxios.get(queryUrl, {
    headers
  });
};

const postRequest = ({ url, params, body, headers = defaultHeader } : { url: string, params?: any[], body?: any, headers?: any }) => {
  const queryUrl = getUrlWithQueryParams(url, params)
  return baseAxios.post(queryUrl, {
    data: body,
    headers
  });
};

const putRequest = ({ url, params, body, headers = defaultHeader } : { url: string, params?: any[], body?: any, headers?: any }) => {
  const queryUrl = getUrlWithQueryParams(url, params)
  return baseAxios.put(queryUrl, {
    data: body,
    headers
  });
};

const deleteRequest = ({ url, params, body, headers = defaultHeader } : { url: string, params?: any[], body?: any, headers?: any }) => {
  const queryUrl = getUrlWithQueryParams(url, params)
  return baseAxios.delete(queryUrl, {
    data: body,
    headers
  });
};

export default { getRequest, postRequest, putRequest, deleteRequest }