import { client } from '../utils/axiosClient';
import { UserJsonplaceholder } from '../type/User';

export const getAllUsers = () => client.get<UserJsonplaceholder[]>(`/users`);
export const getUserById = (userId: number) => client.get<UserJsonplaceholder[]>(`/users/${userId}`);
