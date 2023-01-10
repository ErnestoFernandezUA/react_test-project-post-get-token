import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import {
  RootState,
} from '../../store/index';
import { UserType } from '../../type/User';

export interface UsersState {
  storage: UserType[];
  payload: UserType[];
  statusLoading: 'idle' | 'loading' | 'failed';
  error: unknown;

  next_url: string | null;
  page: number | null;
  total_pages: number | null;
}

const initialState: UsersState = {
  storage: [],
  payload: [],
  statusLoading: 'idle',
  error: null,

  next_url: null,
  page: null,
  total_pages: null,
};

type GetUsersParams = {
  link_to_next_page?: string;
  page: number;
  count: number;
  delay?: number;
}

type GetUsersResponse = {
  count: number;
  links: {
    next_url: string | null;
    prev_url: string | null;
  },
  page: number;
  success: boolean;
  total_pages: number;
  total_users: number;
  users: UserType[];
}

export const getUsersAsync = createAsyncThunk(
  'users/fetchUsers',
  async ({
    link_to_next_page,
    page,
    count,
    delay = 3000,
  }:GetUsersParams) => {
    // const response = await fetch(
    //   link_to_next_page
    //   ? link_to_next_page 
    //   : `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=${count}`)
    //   .then(function(response) {
    //     return response.json(); 
    //   })
    //   .then(function(data) {
    //     console.log('response', data);

    //     if(data.success) { 
    //       // process success response 
    //       return data;
    //     } else { 
    //       // proccess server errors 
    //     } 
    //   });

    const response = new Promise(resolve => setTimeout(resolve, delay))
      .then(() => fetch(
        link_to_next_page
        ? link_to_next_page 
        : `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=${count}`)
        .then(function(response) {
          return response.json(); 
        })
        .then(function(data) {
          console.log('response', data);
  
          if(data.success) { 
            // process success response 
            return data;
          } else { 
            // proccess server errors 
          } 
        }))

    console.log('getUsersAsync', response);

    return response;
  },
);

const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state: UsersState, action: PayloadAction<UserType[]>) => {
      state.storage.push(...action.payload);
    },
    addPayload: (state: UsersState) => {
      state.storage.push(...state.payload);
      state.payload.length = 0;
    },
    setStatus: (
      state: UsersState,
      action: PayloadAction<'idle' | 'loading' | 'failed'>,
    ) => {
      state.statusLoading = action.payload;
    },
    setError: (
      state: UsersState,
      action: PayloadAction<unknown>,
    ) => {
      state.error = action.payload;
      state.statusLoading = 'failed';
    },
    resetState: (state: UsersState) => {
      state = initialState;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsersAsync.pending, (
        state: UsersState,
      ) => {
        state.statusLoading = 'loading';
      })
      .addCase(getUsersAsync.fulfilled, (state, action) => {
        const {
          users,
        } = action.payload as GetUsersResponse;

        state.payload.push(...users);
        state.statusLoading = 'idle';
      })
      .addCase(getUsersAsync.rejected, (state) => {
        state.statusLoading = 'failed';
      });
  },
});

export default usersSlice.reducer;
export const {
  addUser,
  addPayload,
  setStatus,
  setError,
  resetState,
} = usersSlice.actions;

export const selectUsers = (state: RootState) => state.users.storage;
export const selectPayloadUsers = (state: RootState) => state.users.payload;
export const selectUsersStatusLoading = (state: RootState) => state.users.statusLoading;
export const selectUsersError = (state: RootState) => state.users.error;
