import axios from 'axios';
import moment from 'moment-timezone';
import { BASE_URL } from 'constants/index';
import {
  responseInterceptor,
  errorInterceptor,
  requestInterceptor,
} from './interceptors';
import _, { isNil } from 'lodash';

const baseAxios = axios.create({
  baseURL: BASE_URL,
  validateStatus: function (status) {
    return (
      status === 200 || // Success
      status === 406 || // Not acceptable
      status === 401 || // Access token expired
      status === 403 // Refresh token expired
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

const getFormatedHeaders = (headers: any) => {
  const accessToken = _.get(headers, 'accessToken');
  if (!isNil(accessToken)) {
    delete headers.accessToken;
    return {
      ...headers,
      Authorization: `Bearer ${accessToken}`
    }
  }
  return headers
}

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

const getRequest = ({ url, params, headers } : { url: string; params?: any[]; headers?: any; }) => {
  const queryUrl = getUrlWithQueryParams(url, params)
  return baseAxios.get(queryUrl, {
    headers: {
      ...defaultHeader,
      ...getFormatedHeaders(headers)
    }
  });
};

const postRequest = ({ url, params, body, headers = defaultHeader } : { url: string, params?: any[], body?: any, headers?: any }) => {
  const queryUrl = getUrlWithQueryParams(url, params)
  return baseAxios.post(queryUrl, body, {
    headers: {
      ...defaultHeader,
      ...getFormatedHeaders(headers)
    }
  });
};

const putRequest = ({ url, params, body, headers = defaultHeader } : { url: string, params?: any[], body?: any, headers?: any }) => {
  const queryUrl = getUrlWithQueryParams(url, params)
  return baseAxios.put(queryUrl, body, {
    headers: {
      ...defaultHeader,
      ...getFormatedHeaders(headers)
    }
  });
};

const deleteRequest = ({ url, params, body, headers = defaultHeader } : { url: string, params?: any[], body?: any, headers?: any }) => {
  const queryUrl = getUrlWithQueryParams(url, params)
  return baseAxios.delete(queryUrl, {
    headers: {
      ...defaultHeader,
      ...getFormatedHeaders(headers)
    }
  });
};

const baseServiceMethods = { getRequest, postRequest, putRequest, deleteRequest }

export default baseServiceMethods;
