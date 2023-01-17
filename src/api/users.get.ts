import { UserType } from '../type/User';
import { client } from '../utils/axiosClient';

export type GetUsersParams = {
  link_to_next_page?: string | null;
  page?: number;
  count?: number;
  delay?: number;
};

export type GetUsersResponse = {
  count: number | null;
  links: {
    next_url: string | null;
    prev_url: string | null;
  },
  page: number | null;
  success: boolean;
  total_pages: number | null;
  total_users: number | null;
  users: UserType[];
};

export const getAllUsers = () => client.get('/users');
export const getUserById = (userId: number) => client.get(`/users/${userId}`);
export const getUsersPage = (
  link: string | null,
  page: number,
  count: number,
) => client.get<GetUsersResponse>(link || `/users?page=${page}&count=${count}`);
