import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { getToken, TokenResponse } from '../../../api/token';
// eslint-disable-next-line import/no-cycle
import {
  RootState,
} from '../..';
import { useAppDispatch } from '../../hooks';
import { isTokenExpired } from './isTokenExpired';

const DURATION_TOKEN_ACTIVE = 40; // min

export interface TokenState {
  storage: string | null;
  requestId: string | null;
  setAt: number | null;
  // isExpired: (value: Date, state: TokenState) => boolean; 
  statusLoading: 'idle' | 'loading' | 'failed';
  error: unknown;
}

const initialState: TokenState = {
  storage: null,
  requestId: null,
  setAt: null,
  // isExpired: (value = new Date(), state: TokenState) => {
  //   if (!state.timeRefresh) {
  //     return Number(value) - Number(state.timeRefresh) + 40000 > 0;
  //   }

  //   return true;
  // },
  statusLoading: 'idle',
  error: null,
};

export const getTokenAsync = createAsyncThunk(
  'token/fetchToken',
  async (_, { rejectWithValue, getState, requestId, dispatch }) => {
    console.log('getTokenAsync/');
    const state = getState() as RootState;

    console.log('getTokenAsync/ requestId = ', state.token.requestId, requestId);
    const currentTime = Date.now();




    if (requestId === state.token.requestId) {
      const response: TokenResponse = await getToken();
  
      console.log('getTokenAsync/ response', response);
  
      return response;
    } else {
      // nothing to do 
    }

  },
);

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state: TokenState, action: PayloadAction<TokenResponse>) => {
      state.storage = action.payload.token;
    },
    setStatus: (
      state: TokenState,
      action: PayloadAction<'idle' | 'loading' | 'failed'>,
    ) => {
      state.statusLoading = action.payload;
    },
    setError: (
      state: TokenState,
      action: PayloadAction<unknown>,
    ) => {
      state.error = action.payload;
      state.statusLoading = 'failed';
    },
    resetToken: (state: TokenState) => {
      state = initialState;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTokenAsync.pending, (
        state: TokenState,
        { meta: { requestId },
      }
      ) => {
        console.log('getTokenAsync.pending/', requestId);
        state.statusLoading = 'loading';

        if (!state.requestId) {
          state.requestId = requestId;
        }
      })
      .addCase(getTokenAsync.fulfilled, (state, action: PayloadAction<TokenResponse | undefined>) => {
        if (action.payload) {
          state.storage = action.payload.token;
        }

        state.statusLoading = 'idle';
        state.requestId = null;
        state.setAt = Date.now()
        
      })
      .addCase(getTokenAsync.rejected, (state) => {
        state.statusLoading = 'failed';
      });
  },
});

export default tokenSlice.reducer;
export const {
  setToken,
  setStatus,
  setError,
  resetToken,
} = tokenSlice.actions;

export const selectToken = (state: RootState) => state.token.storage;
export const selectTokenStatusLoading = (state: RootState) => state.token.statusLoading;
export const selectTokenError = (state: RootState) => state.token.error;
export const selectIsTokenExpired = (state: RootState) => isTokenExpired(state, DURATION_TOKEN_ACTIVE);
