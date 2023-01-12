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

export interface UsersState {
  storage: UserType[];
  payload: UserType[];
  statusLoading: 'idle' | 'loading' | 'failed';
  error: unknown;

  next_url: string | null;
  page: number | null;
  total_pages: number | null;
  positions: string[];
}

const initialState: UsersState = {
  storage: [],
  payload: [],
  statusLoading: 'idle',
  error: null,

  next_url: null,
  page: null,
  total_pages: null,
  positions: []
};

type GetUsersParams = {
  link_to_next_page?: string | null;
  page?: number;
  count?: number;
  delay?: number;
}

type GetUsersResponse = {
  count: number | null;
  links: {
    next_url: string | null;
    prev_url: string | null;
  },
  page: number | null;
  success: boolean;
  total_pages: number | null;
  total_users: number | null;
  users: UserType[];
}

type PostUserResponse = {
  success: boolean;
  user_id: number;
  message: string;
  fails?: {
    name: string[],
    email: string[],
    phone: string[],
    position_id: string[],
    photo: string[],
  } 
}

export const getUsersAsync = createAsyncThunk(
  'users/fetchUsers',
  async ({
    link_to_next_page,
    page,
    count,
    delay = 3000,
  }:GetUsersParams,
  { rejectWithValue }) => {
    if (!link_to_next_page
      && page === undefined
      && count === undefined) {
      console.log('no params in getUsersAsync');

      return {
        count: null,
        links: {
          next_url: null,
          prev_url: null,
        },
        page: null,
        success: true,
        total_pages: null,
        total_users: null,
        users: [],
      };
    }

    try {
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
    } catch (error) {
      console.log(error);

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
    console.log('postUserAsync');
    const token = localStorage.getItem('token') || '';

    console.log('user', user);

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
        console.log('data', data); 
        
        if(data.success) { 
        // process success response 
        } else { 
          if (data.message === 'Invalid token. Try to get a new one by the method GET api/v1/token.') {
            console.log('message:', data.message);

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
        console.log('error post', error);
      }));

    console.log('postUserAsync', response);

    return response;
  },
);

export const getPositionsAsync = createAsyncThunk(
  'users/getPositions',
  async () => {
    const response = fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
    .then(function(response) { 
      return response.json(); 
    }) 
    .then(function(data) { 
      console.log(data); 
      // process success response 
    })

    return response;
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
      .addCase(getUsersAsync.fulfilled, (state, action) => {
        const {
          users,
          links: { next_url },
          total_pages,
          page,
        } = action.payload as GetUsersResponse;

        state.payload.push(...users);
        state.statusLoading = 'idle';
        state.next_url = next_url;
        state.total_pages = total_pages;
        state.page = page;
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

        console.log('postUserAsync action.payload', action.payload);
        // state.storage.push(action.payload);
      })
      .addCase(postUserAsync.rejected, (state) => {
        state.statusLoading = 'failed';

        console.log('postUserAsync.rejected');


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
export const selectLinkToNext = (state: RootState) => state.users.next_url;
export const selectIsLastPage = (state: RootState) => state.users.page === state.users.total_pages;