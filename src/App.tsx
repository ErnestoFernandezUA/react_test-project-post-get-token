import React, { useEffect } from 'react';
import { createHashRouter, Outlet } from 'react-router-dom'
import { useAppDispatch } from './store/hooks';
import './App.scss';
import { NotFound } from './pages/NotFound';
import { HomePage } from './pages/HomePage/HomePage';
import { getTokenAsync } from './store/features/Token/tokenSlice';
import { getUsersAsync } from './store/features/Users/usersSlice';
import { Container } from './components/Container/Container';
import { getPositionsAsync } from './store/features/Positions/positionsSlice';
import { Wrapper } from './components/Wrapper/Wrapper';
import { Header } from './components/Header';

// localStorage.clear();

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    id: "App",
    children: [
      {
        path: "/",
        element: <HomePage />,
        id: "homepage",
        errorElement: <>Error on Homepage</>,
      },
    ],
  },
]);

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTokenAsync());
    dispatch(getUsersAsync({ page: 1, count: 6 }));
    dispatch(getPositionsAsync());
  }, [dispatch])

  return (
    <div className="App">
      <Header />

      <Outlet/>
   
    </div>
  );
}

export default App;
