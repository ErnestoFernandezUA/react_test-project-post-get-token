import { client } from '../utils/axiosClient';
import { endpointAPI } from './endpointsAPI';

type UserPostProperties = 'name' | 'email' | 'phone' | 'position_id' | 'photo';

type Fails<T> = { [key in UserPostProperties]: T};

export type PostResponsePayload = {
  success: boolean;
  user_id?: number;
  message: string;
  fails?: Fails<string[]>;
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
  data: FormData,
  Token: string,
) => client.post<PostResponse>(
  endpointAPI.users,
  data,
  { headers: { Token, 'Content-Type': 'multipart/form-data' } },
);
