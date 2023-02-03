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
  postUser, PostResponsePayload,
} from '../../../api/users.post';
import { UserTypePost } from '../../../type/User';

const DELAY_OF_WAITING_POST = 1000;

export interface UsersStatePost {
  statusUpLoading: 'idle' | 'loading' | 'failed';
  errorMessage: string | null;

  validationFails: {
    name: string[];
    email: string[];
    phone: string[];
    photo: string[];
    position_id: string[];
  }
}

const initialState: UsersStatePost = {
  statusUpLoading: 'idle',
  errorMessage: null,

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
  name: 'usersPost',
  initialState,
  reducers: {
    setError: (state: UsersStatePost, action: PayloadAction<{
      property: 'name' | 'email' | 'phone' | 'position_id' | 'photo',
      error: string;
    }>) => {
      state.validationFails[action.payload.property].push(action.payload.error);
    },
    clearErrorMessage: (state: UsersStatePost) => {
      state.errorMessage = null;
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
      state.validationFails.photo.push(action.payload);
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
        // eslint-disable-next-line no-console
        console.log('postUserAsync.pending/');

        state.statusUpLoading = 'loading';
        state.errorMessage = null;
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
        state.errorMessage = action.payload.message;
        state.validationFails = action.payload.fails || initialState.validationFails;
      });
  },
});

export default usersSlicePost.reducer;
export const {
  setError,
  clearErrorMessage,
  addErrorName,
  addErrorEmail,
  addErrorPhone,
  addErrorPhoto,
  addErrorPosition_Id,
} = usersSlicePost.actions;

export const selectIsUpLoading
= (state: RootState) => state.usersPost.statusUpLoading === 'loading';
export const selectIsErrorPost
= (state: RootState) => state.usersPost.statusUpLoading === 'failed';
export const selectUsersPostErrorMessage = (state: RootState) => state.usersPost.errorMessage;
export const selectPostFails = (state: RootState) => state.usersPost.validationFails;

export const addError: UserTypePost<any> = {
  name: addErrorName,
  email: addErrorEmail,
  phone: addErrorPhone,
  photo: addErrorPhoto,
  position_id: addErrorPosition_Id,
};
