/* eslint-disable import/no-cycle */
import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import positionsSlice from './features/Positions/positionsSlice';
import tokenReducer from './features/Token/tokenSlice';
import usersSliceGet from './features/Users/usersSliceGet';
import usersSlicePost from './features/Users/usersSlicePost';
import optionsSlice from './features/Options/optionsSlice';

const rootReducer = combineReducers({
  usersGet: usersSliceGet,
  usersPost: usersSlicePost,
  token: tokenReducer,
  positions: positionsSlice,
  options: optionsSlice,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
  // blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, 'posts'],
    },
  }),
});

export default store;

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

/* eslint-disable @typescript-eslint/indent */
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
