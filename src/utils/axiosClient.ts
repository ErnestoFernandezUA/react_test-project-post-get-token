import axios from 'axios';

const baseURL = 'https://frontend-test-assignment-api.abz.agency/api/v1';

const instance = axios.create({
  baseURL,
});

type FetchData = {
};

export const client = {
  async get<T>(url: string) {
    const response = await instance.get<T>(url);

    // eslint-disable-next-line no-console
    console.log('get', baseURL + url);
    
    return response.data;
  },

  async post<T>(url: string, data: FetchData) {
    const response = await instance.post<T>(url, data);

    // eslint-disable-next-line no-console
    console.log('post', baseURL + url, data);

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
