import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import {
  RootState,
} from '../../store/index';
import { User } from '../../type/User';

export interface PostsState {
  storage: User[];
  statusLoading: 'idle' | 'loading' | 'failed';
  error: unknown;
}

const initialState: PostsState = {
  storage: [],
  statusLoading: 'idle',
  error: null,
};

type GetUsersParams = {
  page: number;
  count: number;
}

export const getUsersAsync = createAsyncThunk(
  'users/fetchUsers',
  async ({
    page,
    count,
  }:GetUsersParams) => {
    const response = await fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=${count}`)
      .then(function(response) {
        return response.json(); 
      })
      .then(function(data) {
        console.log(data);

        if(data.success) { 
          // process success response 
        } else { 
          // proccess server errors 
        } 
      });

    console.log('getUsersAsync', response);

    return response;
  },
);

const usersSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPosts: (state: PostsState, action: PayloadAction<User[]>) => {
      state.storage.push(...action.payload);
    },
    setStatus: (
      state: PostsState,
      action: PayloadAction<'idle' | 'loading' | 'failed'>,
    ) => {
      state.statusLoading = action.payload;
    },
    setError: (
      state: PostsState,
      action: PayloadAction<unknown>,
    ) => {
      state.error = action.payload;
      state.statusLoading = 'failed';
    },
    resetState: (state: PostsState) => {
      state = initialState;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsersAsync.pending, (
        state: PostsState,
      ) => {
        state.statusLoading = 'loading';
      })
      .addCase(getUsersAsync.fulfilled, (state, action) => {
        // state.storage.push(...action.payload);
        state.statusLoading = 'idle';
      })
      .addCase(getUsersAsync.rejected, (state) => {
        state.statusLoading = 'failed';
      });
  },
});

export default usersSlice.reducer;
export const {
  addPosts,
  setStatus,
  setError,
  resetState,
} = usersSlice.actions;

export const selectPosts = (state: RootState) => state.posts.storage;
export const selectPostStatusLoading = (state: RootState) => state.posts.statusLoading;
export const selectPostError = (state: RootState) => state.posts.error;
