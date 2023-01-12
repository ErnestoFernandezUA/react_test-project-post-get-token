import { RootState } from '../..';


export const isTokenExpired = (state: RootState, durationExpired: number) => {
  const current = Date.now();

  if (state.token.setAt) {
    console.log('selectTokenIsExpired/ last change:', state.token.setAt);
    console.log('selectTokenIsExpired/ time from last:',
      Number(current) - Number(state.token.setAt) - durationExpired * 1000,
      Number(current) - Number(state.token.setAt) - durationExpired * 1000 > 0);

    return Number(current) - Number(state.token.setAt) - durationExpired * 1000 > 0;
  }

  return true;
};
