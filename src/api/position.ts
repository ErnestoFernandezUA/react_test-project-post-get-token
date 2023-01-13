import { Position } from '../type/Position';
import { client } from '../utils/axiosClient';

export interface PositionsResponse {
  success: boolean;
  positions: Position[];
}

export const getPositions = () => client.get<PositionsResponse>(`/positions`);
