/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
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
import { isTokenActive } from './isTokenActive';

const TOKEN_ACTIVE_DURATION = 40; // min

export interface TokenState {
  storage: string | null;
  currentRequestId: string | null;
  setAt: number | null;
  statusLoading: 'idle' | 'loading' | 'failed';
  error: unknown;
}

const initialState: TokenState = {
  storage: null,
  currentRequestId: null,
  setAt: null,
  statusLoading: 'idle',
  error: null,
};

export const getTokenAsync = createAsyncThunk(
  'token/fetchToken',
  async (_, {
    // rejectWithValue,
    getState,
    requestId,
    // dispatch,
  }) => {
    // console.log('getTokenAsync/');
    const state = getState() as RootState;

    // console.log('getTokenAsync/ requestId = ', state.token.requestId, requestId);

    const isActive = isTokenActive(state.token.setAt, TOKEN_ACTIVE_DURATION);
    // console.log('getTokenAsync/ isTokenActive: ', isActive);

    if (requestId === state.token.currentRequestId && !isActive) {
      const response: TokenResponse = await getToken();

      // console.log('getTokenAsync/ response', response);

      return response;
    }
    // nothing to do
    // console.log('getTokenAsync/ token is active and it shouldnt reload');

    // return null;
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
    resetToken: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTokenAsync.pending, (
        state: TokenState,
        { meta: { requestId } },
      ) => {
        // console.log('getTokenAsync.pending/', requestId);
        state.statusLoading = 'loading';

        if (!state.currentRequestId) {
          state.currentRequestId = requestId;
        }
      })
      .addCase(getTokenAsync.fulfilled,
        (state, action: PayloadAction<TokenResponse | undefined>) => {
          if (action.payload) {
            state.storage = action.payload.token;
            state.setAt = Date.now();
          }

          state.statusLoading = 'idle';
          state.currentRequestId = null;
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
export const selectIsTokenExpired
= (state: RootState) => isTokenActive(state.token.setAt, TOKEN_ACTIVE_DURATION);
