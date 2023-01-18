/* eslint-disable no-param-reassign */
import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../../index';
import { getPositions } from '../../../api/position';
import { PositionType } from '../../../type/Position';

export interface PositionsState {
  storage: PositionType[];
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
    let response;

    try {
      response = await getPositions();
    } catch (error) {
      rejectWithValue(error);
    }

    return response;
  },
);

const positionsSlice = createSlice({
  name: 'positions',
  initialState,
  reducers: {
    addPositions: (state: PositionsState, action: PayloadAction<PositionType[]>) => {
      state.storage.push(...action.payload);
    },
    setPositionsStatus: (
      state: PositionsState,
      action: PayloadAction<'idle' | 'loading' | 'failed'>,
    ) => {
      state.statusLoading = action.payload;
    },
    setPositionsError: (
      state: PositionsState,
      action: PayloadAction<unknown>,
    ) => {
      state.error = action.payload;
      state.statusLoading = 'failed';
    },
    resetPositionsState: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPositionsAsync.pending,
        (state: PositionsState) => {
          state.statusLoading = 'loading';
        })
      .addCase(getPositionsAsync.fulfilled,
        (state, action) => {
          state.statusLoading = 'idle';

          if (action.payload && action.payload.success) {
            // always overwriting previous storage
            state.storage = action.payload.positions;
          }
        })
      .addCase(getPositionsAsync.rejected, (state) => {
        state.statusLoading = 'failed';
      });
  },
});

export default positionsSlice.reducer;
export const {
  setPositionsStatus,
  setPositionsError,
  resetPositionsState,
} = positionsSlice.actions;

export const selectPositions = (state: RootState) => state.positions.storage;
export const selectPositionsStatusLoading = (state: RootState) => state.positions.statusLoading;
export const selectPositionsError = (state: RootState) => state.positions.error;
