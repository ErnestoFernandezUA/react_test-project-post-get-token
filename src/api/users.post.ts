import { UserPost } from '../type/User';
import { client } from '../utils/axiosClient';
import { endpointAPI } from './endpointsAPI';

export type PostResponsePayload = {
  success: boolean;
  user_id?: number;
  message: string;
  fails?: UserPost<string[]>;
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
  },
}

export const postUser = (
  data: FormData,
  Token: string,
) => client.post<PostResponse>(
  endpointAPI.users,
  data,
  { headers: { Token, 'Content-Type': 'multipart/form-data' } },
);
