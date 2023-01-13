import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { rootLoader } from '../../../helpers/rootLoader';
// eslint-disable-next-line import/no-cycle
import {
  RootState,
} from '../../index';
import { UserType } from '../../../type/User';
import { getUsersPage, GetUsersParams, GetUsersResponse } from '../../../api/users.get';
import { getPositions } from '../../../api/position';

const DELAY_OF_WAITING = 3000;

export interface UsersState {
  storage: UserType[];
  payload: UserType[];
  statusLoading: 'idle' | 'loading' | 'failed';
  error: unknown;

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
  console.log('getUsersAsync/');

    try {
      const response = new Promise(resolve => setTimeout(resolve, delay))
        .then(() => 
          getUsersPage(link_to_next_page, page, count)
          .then(function(response) {
            console.log('getUsersAsync/ response', response);

            return response; 
          })
          .then(function(data) {
            // console.log('response', data);
    
            if(data.success) { 
              // process success response 
              return data;
            } else { 
              // proccess server errors 
            } 
          }))
  
      // console.log('getUsersAsync', response);
  
      return response;
    } catch (error) {
      // console.log(error);

      rejectWithValue(error);
    }
  },
);

// reqex validation

export const postUserAsync = createAsyncThunk(
  'users/postUser',
  async ({
    user,
    delay = 1000,
  }: any) => {
    // console.log('postUserAsync');
    const token = localStorage.getItem('token') || '';

    // console.log('user', user);

    var formData = new FormData(); 
  // file from input type='file' 
  // var fileField = document.querySelector('input[type="file"]'); 
    formData.append('position_id', '2'); 
    formData.append('name', 'Jhon'); 
    formData.append('email', 'jhon@gmail.com'); 
    formData.append('phone', '+380955388485'); 
  // formData.append('photo', fileField.files[0]);

    const response = new Promise(resolve => setTimeout(resolve, delay))
      .then(() => fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', 
        {
          method: 'POST', 
          body: formData, 
          headers: { 
            'Token': token,
          }, 
        }
      ) 
      .then(function(response) { 
        return response.json(); 
      })
      .then(function(data) { 
        // console.log('data', data); 
        
        if(data.success) { 
        // process success response 
        } else { 
          if (data.message === 'Invalid token. Try to get a new one by the method GET api/v1/token.') {
            // console.log('message:', data.message);

            const token = rootLoader()
              .then((data) => localStorage.setItem('token', data = ''))
              .then(() => postUserAsync({
                user,
                delay,
              }))
          }
      } }) 
      .catch(function(error) { 
        // proccess network errors 
        // console.log('error post', error);
      }));

    // console.log('postUserAsync', response);

    return response;
  },
);

export const getPositionsAsync = createAsyncThunk(
  'users/getPositions',
  async (_, { rejectWithValue }) => {
    getPositions()
      .then(function(response) {
        console.log('users/getPositions:', response);
        
        return response; 
      }) 
      .then(function(data) { 
        if (data.success) {
          return data.positions;
        } else {
          rejectWithValue('no positions on server');
        }
      }
    )
  }
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
      .addCase(getUsersAsync.fulfilled,
        (state, 
        action:PayloadAction<GetUsersResponse | undefined,
        string, {arg: GetUsersParams; requestId: string; requestStatus: "fulfilled";}, never>
    ) => {
        if (action.payload) {
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

      .addCase(getPositionsAsync.pending, (
        state: UsersState,
      ) => {
        state.statusLoading = 'loading';
      })
      .addCase(getPositionsAsync.fulfilled, (state, action) => {  
        state.statusLoading = 'idle';

        // console.log('postUserAsync action.payload', action.payload);
        // state.storage.push(action.payload);
      })
      .addCase(getPositionsAsync.rejected, (state) => {
        state.statusLoading = 'failed';
        // console.log('postUserAsync.rejected');
      })

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
export const selectLinkToNext = (state: RootState) => state.users.link_to_next_page;
export const selectIsLastPage = (state: RootState) => state.users.current_page === state.users.total_pages;
