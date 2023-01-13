import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import {
  RootState,
} from '../../index';
import { UserType } from '../../../type/User';
import { getUsersPage, GetUsersParams, GetUsersResponse } from '../../../api/users.get';
import { getTokenAsync } from '../Token/tokenSlice';
import { postUser } from '../../../api/users.post';

const DELAY_OF_WAITING = 5000;

export interface UsersState {
  storage: UserType[];
  payload: UserType[];
  statusLoading: 'idle' | 'loading' | 'failed';
  error: string | null;

  link_to_next_page: string | null;
  current_page: number | null;
  total_pages: number | null;
  positions: string[];
}

const initialState: UsersState = {
  storage: [],
  payload: [],
  statusLoading: 'idle',
  error: null,

  link_to_next_page: null,
  current_page: null,
  total_pages: null,
  positions: []
};

export const getUsersAsync = createAsyncThunk(
  'users/fetchUsers',
  async ({
    link_to_next_page = null,
    page = 1,
    count = 6,
    delay = DELAY_OF_WAITING,
  }:GetUsersParams,
  { rejectWithValue }) => {
    try {
      await new Promise(resolve => setTimeout(resolve, delay));
      const response = await getUsersPage(link_to_next_page, page, count);
  
      return response;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

// reqex validation

export const postUserAsync = createAsyncThunk(
  'users/postUser',
  async ({
    user: {
      name,
      email,
      phone,
      images,
      position_id,
    },
    delay = 1000,
  }: any,
  { dispatch, getState, rejectWithValue }) => {
    console.log('postUserAsync');
    
    try {
      const state = getState() as RootState;
      await new Promise(resolve => setTimeout(resolve, delay));
      await dispatch(getTokenAsync());

      const formData = new FormData();
      formData.append('position_id', position_id); 
      formData.append('name', name); 
      formData.append('email', email); 
      formData.append('phone', phone); 
      formData.append('photo', images[0]);
      
      console.log(formData);

      const response = await postUser({
        method: 'POST', 
        body: formData, 
        headers: { 
          'Token': String(state.token.storage),
        }, 
      });

      console.log('postUserAsync/', response);

      return response;
    } catch (error) {
      rejectWithValue(error);
    }


  //   dispatch(getTokenAsync());

  //   const formData = new FormData(); 
  // // file from input type='file' 
  // // var fileField = document.querySelector('input[type="file"]'); 
  //   formData.append('position_id', position_id); 
  //   formData.append('name', name); 
  //   formData.append('email', email); 
  //   formData.append('phone', phone); 
  //   formData.append('photo', images[0]);
  //   const state = getState() as RootState;

  //   const response = new Promise(resolve => setTimeout(resolve, delay))
  //     .then(() => fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', 
  //       {
  //         method: 'POST', 
  //         body: formData, 
  //         headers: { 
  //           'Token': String(state.token.storage),
  //         }, 
  //       }
  //     ) 
  //     .then(function(response) { 
  //       console.log('response', response);

  //       return response.json(); 
  //     })
  //     .then(function(data) { 
  //       console.log('data', data); 
        
  //       if(data.success) { 
  //       // process success response 
  //       } else { 
  //         if (data.message === 'Invalid token. Try to get a new one by the method GET api/v1/token.') {
  //           // console.log('message:', data.message);
  //         }
  //     } }) 
  //     .catch(function(error) { 
  //       // proccess network errors 
  //       // console.log('error post', error);
  //     }));

  //   // console.log('postUserAsync', response);

  //   return response;
  },
);

const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUsers: (state: UsersState, action: PayloadAction<UserType[]>) => {
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
      .addCase(getUsersAsync.fulfilled,
        (state: UsersState, 
        action:PayloadAction<GetUsersResponse | undefined,
        string, {arg: GetUsersParams; requestId: string; requestStatus: "fulfilled";}, never>
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
          state.error = 'getUsersAsync.fulfilled/ response.success = false';
        }
      })
      .addCase(getUsersAsync.rejected, (state) => {
        state.statusLoading = 'failed';
      })
      .addCase(postUserAsync.pending, (
        state: UsersState,
      ) => {
        state.statusLoading = 'loading';
      })
      .addCase(postUserAsync.fulfilled, (state, action) => {  
        state.statusLoading = 'idle';

        // console.log('postUserAsync action.payload', action.payload);
        // state.storage.push(action.payload);
      })
      .addCase(postUserAsync.rejected, (state) => {
        state.statusLoading = 'failed';
        // console.log('postUserAsync.rejected');
      })
  },
});

export default usersSlice.reducer;
export const {
  addUsers,
  addPayload,
  setStatus,
  resetState,
} = usersSlice.actions;

export const selectUsers = (state: RootState) => state.users.storage;
export const selectPayloadUsers = (state: RootState) => state.users.payload;
export const selectUsersStatusLoading = (state: RootState) => state.users.statusLoading;
export const selectUsersError = (state: RootState) => state.users.error;
export const selectLinkToNext = (state: RootState) => state.users.link_to_next_page;
export const selectIsLastPage = (state: RootState) => state.users.current_page === state.users.total_pages;

