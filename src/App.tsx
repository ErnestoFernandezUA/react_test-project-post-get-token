import React, { useEffect } from 'react';
import {
  createHashRouter,
  Outlet,
} from 'react-router-dom';

import { useAppDispatch } from './store/hooks';
import { getTokenAsync } from './store/features/Token/tokenSlice';
import { getUsersAsync } from './store/features/Users/usersSlice';
import { getPositionsAsync } from './store/features/Positions/positionsSlice';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage/HomePage';
import { NotFound } from './pages/NotFound';

// localStorage.clear();

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTokenAsync());
    dispatch(getUsersAsync({ page: 1, count: 6 }));
    dispatch(getPositionsAsync());
  }, [dispatch]);

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
        {window.innerWidth}
        x
        {window.innerHeight}
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
      {
        path: '/admin',
        element: <>AdminPage</>,
        id: 'admin-page',
        errorElement: <>Error on AdminPage</>,
      },
    ],
  },
]);
