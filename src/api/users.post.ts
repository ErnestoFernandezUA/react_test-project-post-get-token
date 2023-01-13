import { UserType } from '../type/User';
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
  } 
}