import { client } from '../utils/axiosClient';
import { endpointAPI } from './endpointsAPI';

export type PostResponsePayload = {
  success: boolean;
  user_id?: number;
  message: string;
  fails?: {
    name: string[],
    email: string[],
    phone: string[],
    position_id: string[],
    photo: string[],
  },
  type: string;
};

export interface PostResponse {
  payload: PostResponsePayload;
  error?: {
    message: string;
  },
  meta?: {
    aborted: boolean;
    arg: FormData;
    condition: false;
    rejectedWithValue: boolean;
    requestId: string;
    requestStatus: string;
  }
}

export const postUser = (
  data: any,
  Token: string,
) => client.post<PostResponse>(
  endpointAPI.users,
  data,
  { headers: { Token, 'Content-Type': 'multipart/form-data' }},
);
