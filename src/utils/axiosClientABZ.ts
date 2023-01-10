import axios from 'axios';

const baseURL = 'https://frontend-test-assignment-api.abz.agency';

const instanceABZ = axios.create({
  baseURL,
});

type FetchData = {
};

export const client = {
  async get<T>(url: string) {
    const response = await instanceABZ.get<T>(url);

    // eslint-disable-next-line no-console
    console.log('get', baseURL + url);

    return response.data;
  },

  async post<T>(url: string, data: FetchData) {
    const response = await instanceABZ.post<T>(url, data);

    return response.data;
  },

  async patch<T>(url: string, data: FetchData) {
    const response = await instanceABZ.patch<T>(url, data);

    return response.data;
  },

  async delete(url: string) {
    return instanceABZ.delete(url);
  },
};
