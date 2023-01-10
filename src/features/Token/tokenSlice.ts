import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { getToken, TokenResponse } from '../../api/token';
// eslint-disable-next-line import/no-cycle
import {
  RootState,
} from '../../store';
import { useAppDispatch } from '../../store/hooks';
import { Post } from '../../type/Post';

export interface TokenState {
  token: string;
  statusLoading: 'idle' | 'loading' | 'failed';
  error: unknown;
}

const initialState: TokenState = {
  token: '',
  statusLoading: 'idle',
  error: null,
};

export const getTokenAsync = createAsyncThunk(
  'token/fetchToken',
  async () => {
    console.log('getTokenAsync');
    const response: TokenResponse = await getToken();

    console.log('getTokenAsync', response);

    return response;
  },
);

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state: TokenState, action: PayloadAction<TokenResponse>) => {
      state.token = action.payload.token;
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
      ) => {
        state.statusLoading = 'loading';
      })
      .addCase(getTokenAsync.fulfilled, (state, action: PayloadAction<TokenResponse>) => {
        state.token = action.payload.token;
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

export const selectToken = (state: RootState) => state.posts.storage;
export const selectTokenStatusLoading = (state: RootState) => state.posts.statusLoading;
export const selectTokenError = (state: RootState) => state.posts.error;
