import { client } from '../utils/axiosClient';

export const getAllUsers = () => client.get(`/users`);
export const getUserById = (userId: number) => client.get(`/users/${userId}`);
