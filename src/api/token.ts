import { client } from '../utils/axiosClientABZ';

export type TokenResponse = {
  success: boolean,
  token: string,
}

export const getToken = () => client.get<TokenResponse>(`/token`);


