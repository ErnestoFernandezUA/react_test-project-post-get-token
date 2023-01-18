import { PositionType } from '../type/Position';
import { client } from '../utils/axiosClient';

export interface PositionsResponse {
  success: boolean;
  positions: PositionType[];
}

export const getPositions = () => client.get<PositionsResponse>('/positions');
