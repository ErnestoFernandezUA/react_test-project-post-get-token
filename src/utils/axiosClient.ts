import axios, { AxiosRequestConfig } from 'axios';

const baseURL = 'https://frontend-test-assignment-api.abz.agency/api/v1';

const instance = axios.create({
  baseURL,
});

type FetchData = {
};

export const client = {
  async get<T>(url: string, config?: AxiosRequestConfig) {
    // eslint-disable-next-line no-console
    console.log('instance get', baseURL + url);

    const response = await instance.get<T>(url, config);

    return response.data;
  },

  async post<T>(url: string, data: FetchData, config: AxiosRequestConfig) {
    // eslint-disable-next-line no-console
    console.log('instance post', baseURL + url, data);

    const response = await instance.post<T>(url, data, config);

    return response.data;
  },

  async patch<T>(url: string, data: FetchData) {
    const response = await instance.patch<T>(url, data);

    return response.data;
  },

  async delete(url: string) {
    return instance.delete(url);
  },
};
