import React, { useEffect } from 'react';
import { createHashRouter, Outlet } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from './store/hooks';
import { getPostsAsync, selectPosts } from './features/Posts/postsSlice';
import './App.scss';
import { NotFound } from './pages/NotFound';
import { HomePage } from './pages/HomePage/HomePage';
import { PostPage } from './pages/PostPage/PostPage';
import { getTokenAsync, setToken } from './features/Token/tokenSlice';
import { getUsersAsync } from './features/Users/usersSlice';
import { Container } from './components/Container';
import { Wrapper } from './components/Wrapper';

export async function rootLoader() {
  if (!localStorage.getItem('token')) {
    const response = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
    .then(function(response){
      console.log(response);
  
      return response.json(); 
    })
    .then(function(data){
      console.log(data);
      
      localStorage.setItem('token', data.token);
      
    })
    .catch(function(error) {
      console.log(error);
    })
  
    return response;
  } else {
    return localStorage.getItem('token');
  }
}

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    loader: rootLoader,
    errorElement: <NotFound />,
    id: "App",
    children: [
      {
        path: "/",
        element: <HomePage />,
        id: "homepage",
        errorElement: <>Error on Homepage</>,
      },
      {
        path: "/post/:id",
        element: <PostPage />,
        errorElement: <>Error on Homepage</>,
      },
    ],
  },
]);

// localStorage.clear();

function App() {
  const posts = useAppSelector(selectPosts);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (posts.length === 0) {
      dispatch(getPostsAsync());
    }

  dispatch(getUsersAsync({ page: 1,count: 6}));

  }, [dispatch])

  return (
    <div className="App">
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
