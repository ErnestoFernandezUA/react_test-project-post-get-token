import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import {
  RootState,
} from '../../index';
import { GetUsersParams, GetUsersResponse } from '../../../api/users.get';
import { getPositions, PositionsResponse } from '../../../api/position';
import { Position } from '../../../type/Position';

export interface PositionsState {
  storage: Position[];
  statusLoading: 'idle' | 'loading' | 'failed';
  error: unknown;
}

const initialState: PositionsState = {
  storage: [],
  statusLoading: 'idle',
  error: null,
};

export const getPositionsAsync = createAsyncThunk(
  'users/getPositions',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getPositions();

      return response;
    } catch (error) {
      rejectWithValue(error)
    }
  }
);

const positionsSlice = createSlice({
  name: 'positions',
  initialState,
  reducers: {
    addPositions: (state: PositionsState, action: PayloadAction<Position[]>) => {
      state.storage.push(...action.payload);
    },
    setStatus: (
      state: PositionsState,
      action: PayloadAction<'idle' | 'loading' | 'failed'>,
    ) => {
      state.statusLoading = action.payload;
    },
    setError: (
      state: PositionsState,
      action: PayloadAction<unknown>,
    ) => {
      state.error = action.payload;
      state.statusLoading = 'failed';
    },
    resetState: (state: PositionsState) => {
      state = initialState;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPositionsAsync.pending,
        (state: PositionsState,
      ) => {
        state.statusLoading = 'loading';
      })
      .addCase(getPositionsAsync.fulfilled,
        (state, 
        action,
        ) => {  
        state.statusLoading = 'idle';

        if (action.payload && action.payload.success) {
          // always overwriting previous storage 
          state.storage = action.payload.positions;
        }
      })
      .addCase(getPositionsAsync.rejected, (state) => {
        state.statusLoading = 'failed';
        // console.log('postUserAsync.rejected');
      })
  },
});

export default positionsSlice.reducer;
export const {
  setStatus,
  setError,
  resetState,
} = positionsSlice.actions;

// export const selectUsers = (state: RootState) => state.users.storage;
// export const selectPayloadUsers = (state: RootState) => state.users.payload;
// export const selectUsersStatusLoading = (state: RootState) => state.users.statusLoading;
// export const selectUsersError = (state: RootState) => state.users.error;
// export const selectLinkToNext = (state: RootState) => state.users.link_to_next_page;
// export const selectIsLastPage = (state: RootState) => state.users.current_page === state.users.total_pages;
