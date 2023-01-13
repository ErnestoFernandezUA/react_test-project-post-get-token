import { Position } from '../type/Position';
import { client } from '../utils/axiosClient';

interface PositionResponse {
  success: boolean;
  positions: Position[];
}

export const getPositions = () => client.get<PositionResponse>(`/positions`);
