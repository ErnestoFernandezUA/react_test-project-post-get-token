import React, { useEffect } from 'react';
import {
  createHashRouter,
  Outlet,
} from 'react-router-dom';

import { useAppDispatch, useAppSelector } from './store/hooks';
import { getTokenAsync, resetToken } from './store/features/Token/tokenSlice';
import { getUsersAsync } from './store/features/Users/usersSlice';
import { getPositionsAsync } from './store/features/Positions/positionsSlice';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage/HomePage';
import { NotFound } from './pages/NotFound';
import { selectScreen, setScreen } from './store/features/Options/optionsSlice';
import { getTypeScreen } from './helpers/getTypeScreen';

// localStorage.clear();

function App() {
  const dispatch = useAppDispatch();
  const screen = useAppSelector(selectScreen);

  useEffect(() => {
    dispatch(resetToken());
    dispatch(setScreen(getTypeScreen()));
    dispatch(getTokenAsync());
    dispatch(getPositionsAsync());
  }, []);

  useEffect(() => {
    if (screen
      && screen !== 'mobile'
      && screen !== 'tablet') {
      dispatch(getUsersAsync({ page: 1, count: 6 }));
    }
  }, [dispatch, screen]);

  return (
    <>
      <Header />

      <div style={{
        position: 'fixed',
        top: '70px',
        left: '20px',
        zIndex: 9999,
      }}
      >
        {`window.innerWidth ${window.innerWidth} x window.innerHeight ${window.innerHeight}`}
      </div>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    id: 'App',
    children: [
      {
        path: '/',
        element: <HomePage />,
        id: 'homepage',
        errorElement: <>Error on Homepage</>,
      },
    ],
  },
]);
