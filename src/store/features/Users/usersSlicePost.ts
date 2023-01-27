/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  SerializedError,
} from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

// eslint-disable-next-line import/no-cycle
import {
  RootState,
} from '../../store';
// import { UserType } from '../../../type/User';
// import { getUsersPage, GetUsersParams, GetUsersResponse } from '../../../api/users.get';
import {
  postUser, PostResponsePayload,
} from '../../../api/users.post';

// const DELAY_OF_WAITING_GET = 1000;
const DELAY_OF_WAITING_POST = 0;

export interface UsersState {
  // storage: UserType[];
  // payload: UserType[];

  // statusLoading: 'idle' | 'loading' | 'failed';
  statusUpLoading: 'idle' | 'loading' | 'failed';
  // errorMessageGet: string | null;
  errorMessagePost: string | null;

  // link_to_next_page: string | null;
  // current_page: number | null;
  // total_pages: number | null;

  validationFails: {
    name: string[] | null;
    email: string[] | null;
    phone: string[] | null;
    photo: string[] | null;
    position_id: string[] | null;
  }
}

const initialState: UsersState = {
  // storage: [],
  // payload: [],

  // statusLoading: 'idle',
  statusUpLoading: 'idle',
  // errorMessageGet: null,
  errorMessagePost: null,

  // link_to_next_page: null,
  // current_page: null,
  // total_pages: null,

  validationFails: {
    name: null,
    email: null,
    phone: null,
    photo: null,
    position_id: null,
  },
};

// export const getUsersAsync = createAsyncThunk(
//   'users/fetchUsers',
//   async ({
//     link_to_next_page = null,
//     page = 1,
//     count = 6,
//   }:GetUsersParams,
//   { rejectWithValue }) => {
//     try {
//       await new Promise(resolve => setTimeout(resolve, DELAY_OF_WAITING_GET));
//       const response = await getUsersPage(link_to_next_page, page, count);

//       // eslint-disable-next-line no-console
//       console.log(response);

//       return response;
//     } catch (error) {
//       rejectWithValue(error);
//     }
//   },
// );

export const postUserAsync = createAsyncThunk(
  'users/postUser',
  async (data: FormData, { rejectWithValue, getState }) => {
    const state = getState() as RootState;
    const token = String(state.token.storage);

    await new Promise(resolve => setTimeout(resolve, DELAY_OF_WAITING_POST));

    try {
      const response = await postUser(data, token);

      // eslint-disable-next-line no-console
      console.log('postUserAsync/ response', response);

      return response;
    } catch (error) {
      const err = error as AxiosError;

      // eslint-disable-next-line no-console
      console.log('postUserAsync// rejectWithValue', err.response?.data as PostResponsePayload);

      return rejectWithValue(err.response?.data);
    }
  },
);

const usersSlicePost = createSlice({
  name: 'userPost',
  initialState,
  reducers: {
    // addUsers: (state: UsersState, action: PayloadAction<UserType[]>) => {
    //   state.storage.push(...action.payload);
    // },
    // addPayload: (state: UsersState) => {
    //   state.storage.push(...state.payload);
    //   state.payload.length = 0;
    // },
    // setStatusLoading: (
    //   state: UsersState,
    //   action: PayloadAction<'idle' | 'loading' | 'failed'>,
    // ) => {
    //   state.statusLoading = action.payload;
    // },
    addErrorName: (state: UsersState, action: PayloadAction<string>) => {
      state.validationFails.name?.push(action.payload);
    },
    addErrorEmail: (state: UsersState, action: PayloadAction<string>) => {
      state.validationFails.email?.push(action.payload);
    },
    addErrorPhone: (state: UsersState, action: PayloadAction<string>) => {
      state.validationFails.phone?.push(action.payload);
    },
    addErrorPhoto: (state: UsersState, action: PayloadAction<string>) => {
      state.validationFails.name?.push(action.payload);
    },
    addErrorPosition_Id: (state: UsersState, action: PayloadAction<string>) => {
      state.validationFails.name?.push(action.payload);
    },
    // resetUsers: (state) => {
    //   state.storage = initialState.storage;
    // },
  },
  extraReducers: (builder) => {
    builder
    // .addCase(getUsersAsync.pending, (
    //   state: UsersState,
    // ) => {
    //   state.statusLoading = 'loading';
    // })
    // .addCase(getUsersAsync.fulfilled,
    //   (
    //     state: UsersState,
    //     action:PayloadAction<GetUsersResponse | undefined,
    //     string, {arg: GetUsersParams; requestId: string; requestStatus: 'fulfilled';}, never>,
    //   ) => {
    //     if (action.payload && action.payload.success) {
    //       const {
    //         users,
    //         links: { next_url },
    //         total_pages,
    //         page,
    //       } = action.payload;

    //       state.payload.push(...users);
    //       state.statusLoading = 'idle';
    //       state.link_to_next_page = next_url;
    //       state.total_pages = total_pages;
    //       state.current_page = page;
    //     } else {
    //       state.errorMessageGet = 'getUsersAsync.fulfilled/ response.success = false';
    //     }
    //   })
    // .addCase(getUsersAsync.rejected, (state) => {
    //   state.statusLoading = 'failed';
    // })

      .addCase(postUserAsync.pending, (
        state: UsersState,
      ) => {
        state.statusUpLoading = 'loading';
        state.validationFails = initialState.validationFails;
      })
      .addCase(postUserAsync.fulfilled, (
        state,
        action:PayloadAction<unknown, string, {
          arg: FormData;
          requestId: string;
          requestStatus: 'fulfilled';
        }, never>,
      ) => {
        state.statusUpLoading = 'idle';

        // eslint-disable-next-line no-console
        console.log('postUserAsync.fulfilled/ action.payload', action);
        // state.storage.push(action.payload);
        // if (!action.payload) {
        //   // eslint-disable-next-line no-useless-return
        //   return;
        // }

        // if (action.payload.success) {
        //   console.log(action.payload.message);
        // } else {
        //   state.fails = { ...state.fails, ...action.payload.fails};
        // }
      })
      .addCase(postUserAsync.rejected, (
        state,
        action:PayloadAction<any, string, {
          arg: FormData;
          requestId: string;
          requestStatus: 'rejected';
          aborted: boolean;
          condition: boolean;
        } & ({
          rejectedWithValue: true;
        } | ({
          rejectedWithValue: false;
        } & {})), SerializedError>,
      ) => {
        // eslint-disable-next-line no-console
        console.log('postUserAsync.rejected/ action.payload', action.payload);

        state.statusUpLoading = 'failed';
        state.errorMessagePost = action.payload.message;
        state.validationFails = action.payload.fails;
      });
  },
});

export default usersSlicePost.reducer;
export const {
  // addUsers,
  // addPayload,
  // setStatusLoading,
  // resetUsers,

  addErrorName,
  addErrorEmail,
  addErrorPhone,
  addErrorPhoto,
  addErrorPosition_Id,
} = usersSlicePost.actions;

// export const selectUsers = (state: RootState) => state.usersGet.storage;
// export const selectPayloadUsers = (state: RootState) => state.usersGet.payload;

// export const selectUsersIsLoading
// = (state: RootState) => state.usersGet.statusLoading === 'loading';
export const selectUserIsUpLoading
= (state: RootState) => state.usersPost.statusUpLoading === 'loading';
// export const selectUsersErrorGet = (state: RootState) => state.usersGet.errorMessageGet;
export const selectUsersErrorPost = (state: RootState) => state.usersPost.errorMessagePost;
export const selectPostFails = (state: RootState) => state.usersPost.validationFails;
export const selectIsUserErrorPost
= (state: RootState) => state.usersPost.statusUpLoading === 'failed';
// export const selectLinkToNext = (state: RootState) => state.usersGet.link_to_next_page;
// export const selectIsLastPage
// = (state: RootState) => state.usersGet.current_page === state.usersGet.total_pages;

export const addError = {
  name: addErrorName,
  email: addErrorEmail,
  phone: addErrorPhone,
  photo: addErrorPhoto,
  position_id: addErrorPosition_Id,
};
