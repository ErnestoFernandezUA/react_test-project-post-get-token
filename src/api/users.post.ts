import { client } from '../utils/axiosClient';

export type PostUserResponse = {
  success: boolean;
  user_id: number;
  message: string;
  fails?: {
    name: string[],
    email: string[],
    phone: string[],
    position_id: string[],
    photo: string[],
  },
};

export type AxiosError = {
  code: string;
  config: any;
  message: string;
  name: string;
  request: any;
  response: any;
};

export const postUser = (data: any, config: any) => {
  // eslint-disable-next-line no-console
  console.log('postUser//');

  return client.post('/users', data, config);
};
