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
import {
  postUser,
} from '../../../api/users.post';
import { UserKeys, UserPost } from '../../../type/User';

const DELAY_OF_WAITING_POST = 1000;

export interface UsersStatePost {
  statusUpLoading: 'idle' | 'loading' | 'failed';
  serverMessage: string | null;

  validationFails: UserPost<string[]>;
}

const initialState: UsersStatePost = {
  statusUpLoading: 'idle',
  serverMessage: null,

  validationFails: {
    name: [],
    email: [],
    phone: [],
    photo: [],
    position_id: [],
  },
};

export const postUserAsync = createAsyncThunk(
  'usersPost/post',
  async (data: FormData, { rejectWithValue, getState }) => {
    const state = getState() as RootState;
    const token = String(state.token.storage);

    await new Promise(resolve => setTimeout(resolve, DELAY_OF_WAITING_POST));

    try {
      const response = await postUser(data, token);

      return response;
    } catch (error) {
      const err = error as AxiosError;

      return rejectWithValue(err.response?.data);
    }
  },
);

const usersSlicePost = createSlice({
  name: 'usersPost',
  initialState,
  reducers: {
    clearError: (state: UsersStatePost, action: PayloadAction<{
      property: UserKeys,
    }>) => {
      const key = action.payload.property;

      state.validationFails[key] = initialState.validationFails[key as keyof
      UserPost<string[]>] || []; // ts...hm
    },
    clearAllErrors: (state) => {
      state.validationFails = { ...initialState.validationFails };
    },
    clearErrorMessage: (state: UsersStatePost) => {
      state.serverMessage = null;
    },
    addErrorName: (state: UsersStatePost, action: PayloadAction<string>) => {
      state.validationFails.name.push(action.payload);
    },
    addErrorEmail: (state: UsersStatePost, action: PayloadAction<string>) => {
      state.validationFails.email.push(action.payload);
    },
    addErrorPhone: (state: UsersStatePost, action: PayloadAction<string>) => {
      state.validationFails.phone.push(action.payload);
    },
    addErrorPhoto: (state: UsersStatePost, action: PayloadAction<string>) => {
      state.validationFails.photo?.push(action.payload);
    },
    addErrorPosition_Id: (state: UsersStatePost, action: PayloadAction<string>) => {
      state.validationFails.position_id.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postUserAsync.pending, (
        state: UsersStatePost,
      ) => {
        state.statusUpLoading = 'loading';
        state.serverMessage = null;
        state.validationFails = initialState.validationFails;
      })
      .addCase(postUserAsync.fulfilled, (
        state,
        action:PayloadAction<any, string, {
          arg: FormData;
          requestId: string;
          requestStatus: 'fulfilled';
        }, never>,
      ) => {
        // eslint-disable-next-line no-console
        console.log(action.payload);

        state.statusUpLoading = 'idle';
        state.serverMessage = action.payload.message;
      })
      .addCase(postUserAsync.rejected, (
        state,
        action:PayloadAction<any,
        string, {
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
        console.log('postUserAsync.rejected');
        // eslint-disable-next-line no-console
        console.log(action.payload);

        state.statusUpLoading = 'failed';
        state.serverMessage = action.payload.message;
        state.validationFails = action.payload.fails || initialState.validationFails;
      });
  },
});

export default usersSlicePost.reducer;
export const {
  clearError,
  clearErrorMessage,
  clearAllErrors,
  addErrorName,
  addErrorEmail,
  addErrorPhone,
  addErrorPhoto,
  addErrorPosition_Id,
} = usersSlicePost.actions;

export const selectIsUpLoading
= (state: RootState) => state.usersPost.statusUpLoading === 'loading';
export const selectIsPostRejected
= (state: RootState) => state.usersPost.statusUpLoading === 'failed';
export const selectUsersPostServerMessage = (state: RootState) => state.usersPost.serverMessage;
export const selectPostFails = (state: RootState) => state.usersPost.validationFails;

export const addError: UserPost<any> = {
  name: addErrorName,
  email: addErrorEmail,
  phone: addErrorPhone,
  photo: addErrorPhoto,
  position_id: addErrorPosition_Id,
};
