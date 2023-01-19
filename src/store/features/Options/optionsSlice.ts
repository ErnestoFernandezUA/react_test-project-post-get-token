/* eslint-disable no-param-reassign */
import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../../index';
import { ScreenType } from '../../../type/Screen';

export interface OptionsState {
  screen: ScreenType | null;
}

const initialState: OptionsState = {
  screen: null,
};

const optionsSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    setScreen: (state: OptionsState, action: PayloadAction<ScreenType>) => {
      state.screen = action.payload;
    },
    resetOptionsState: () => {
      return initialState;
    },
  },
});

export default optionsSlice.reducer;
export const {
  setScreen,
  resetOptionsState,
} = optionsSlice.actions;

export const selectScreen = (state: RootState) => state.options.screen;
