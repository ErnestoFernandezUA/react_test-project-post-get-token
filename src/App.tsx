import React, { useEffect } from 'react';
import { createHashRouter, Outlet } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from './store/hooks';
import './App.scss';
import { NotFound } from './pages/NotFound';
import { HomePage } from './pages/HomePage/HomePage';
import { getTokenAsync, selectIsTokenExpired, setToken } from './store/features/Token/tokenSlice';
import { getUsersAsync } from './store/features/Users/usersSlice';
import { Container } from './components/Container';
import { Wrapper } from './components/Wrapper';

localStorage.clear()

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

// localStorage.clear();

function App() {
  const dispatch = useAppDispatch();

  console.log('App/ token is expired? ', useAppSelector(selectIsTokenExpired));

  useEffect(() => {
    dispatch(getTokenAsync())

    dispatch(getUsersAsync({ page: 1,count: 6}));

  }, [dispatch])

  return (
    <div className="App">
      <button onClick={() => dispatch(getTokenAsync())}>get token</button>

      <Container>
        <Wrapper>
          <header>
            Header
          </header>
        </Wrapper>

        <Wrapper>
          <Outlet/>     
        </Wrapper>
      </Container>
    </div>
  );
}

export default App;
