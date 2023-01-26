import { client } from '../utils/axiosClient';
import { endpointAPI } from './endpointsAPI';

export type TokenResponse = {
  success: boolean,
  token: string,
};

export const getToken = () => client.get<TokenResponse>(endpointAPI.token);
