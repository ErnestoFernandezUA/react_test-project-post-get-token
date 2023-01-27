/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

// eslint-disable-next-line import/no-cycle
import { RootState } from '../../store';
import { UserType } from '../../../type/User';
import { getUsersPage, GetUsersParams, GetUsersResponse } from '../../../api/users.get';

const DELAY_OF_WAITING_GET = 1000;

export interface UsersStateGet {
  storage: UserType[];
  payload: UserType[];

  link_to_next_page: string | null;
  current_page: number | null;
  total_pages: number | null;

  statusLoading: 'idle' | 'loading' | 'failed';
  errorMessageGet: string | null;
}

const initialState: UsersStateGet = {
  storage: [],
  payload: [],

  link_to_next_page: null,
  current_page: null,
  total_pages: null,

  statusLoading: 'idle',
  errorMessageGet: null,
};

export const getUsersAsync = createAsyncThunk(
  'users/fetchUsers',
  async ({
    link_to_next_page = null,
    page = 1,
    count = 6,
  }:GetUsersParams,
  { rejectWithValue }) => {
    try {
      await new Promise(resolve => setTimeout(resolve, DELAY_OF_WAITING_GET));
      const response = await getUsersPage(link_to_next_page, page, count);

      // eslint-disable-next-line no-console
      console.log(response);

      return response;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

const usersSliceGet = createSlice({
  name: 'userGet',
  initialState,
  reducers: {
    addUsers: (state: UsersStateGet, action: PayloadAction<UserType[]>) => {
      state.storage.push(...action.payload);
    },
    addPayload: (state: UsersStateGet) => {
      state.storage.push(...state.payload);
      state.payload.length = 0;
    },
    setStatusLoading: (
      state: UsersStateGet,
      action: PayloadAction<'idle' | 'loading' | 'failed'>,
    ) => {
      state.statusLoading = action.payload;
    },
    resetUsers: (state) => {
      state.storage = initialState.storage;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsersAsync.pending, (
        state: UsersStateGet,
      ) => {
        state.statusLoading = 'loading';
      })
      .addCase(getUsersAsync.fulfilled,
        (
          state: UsersStateGet,
          action:PayloadAction<GetUsersResponse | undefined,
          string, {arg: GetUsersParams; requestId: string; requestStatus: 'fulfilled';}, never>,
        ) => {
          if (action.payload && action.payload.success) {
            const {
              users,
              links: { next_url },
              total_pages,
              page,
            } = action.payload;

            state.payload.push(...users);
            state.statusLoading = 'idle';
            state.link_to_next_page = next_url;
            state.total_pages = total_pages;
            state.current_page = page;
          } else {
            state.errorMessageGet = 'getUsersAsync.fulfilled/ response.success = false';
          }
        })
      .addCase(getUsersAsync.rejected, (state) => {
        state.statusLoading = 'failed';
      });
  },
});

export default usersSliceGet.reducer;
export const {
  addUsers,
  addPayload,
  setStatusLoading,
  resetUsers,
} = usersSliceGet.actions;

export const selectUsers = (state: RootState) => state.usersGet.storage;
export const selectPayloadUsers = (state: RootState) => state.usersGet.payload;

export const selectUsersIsLoading = (state: RootState) => state.usersGet.statusLoading === 'loading';
export const selectUsersErrorGet = (state: RootState) => state.usersGet.errorMessageGet;

export const selectLinkToNext = (state: RootState) => state.usersGet.link_to_next_page;
export const selectIsLastPage
= (state: RootState) => state.usersGet.current_page === state.usersGet.total_pages;
