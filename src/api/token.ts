import { client } from '../utils/axiosClient';

export type TokenResponse = {
  success: boolean,
  token: string,
}

export const getToken = () => client.get<TokenResponse>(`/token`);


