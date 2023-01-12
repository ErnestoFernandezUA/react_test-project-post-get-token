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

export interface TokenState {
  storage: string | null;
  requestId: string | null;
  timeRefresh: string | null;
  statusLoading: 'idle' | 'loading' | 'failed';
  error: unknown;
}

const initialState: TokenState = {
  storage: null,
  requestId: null,
  timeRefresh: null,
  statusLoading: 'idle',
  error: null,
};

export const getTokenAsync = createAsyncThunk(
  'token/fetchToken',
  async (_, { rejectWithValue, getState, requestId }) => {
    const state = getState() as RootState;

    if (requestId === state.token.requestId) {

    } else {
      // nothing to do 
    }

    console.log('getTokenAsync');
    const response: TokenResponse = await getToken();

    console.log('getTokenAsync response', response);

    return response;
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
        state.statusLoading = 'loading';
        state.requestId = requestId;
      })
      .addCase(getTokenAsync.fulfilled, (state, action: PayloadAction<TokenResponse>) => {
        state.storage = action.payload.token;
        state.statusLoading = 'idle';
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
