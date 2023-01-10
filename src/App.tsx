import React, { useEffect } from 'react';
import { createHashRouter, Outlet, useLoaderData } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from './store/hooks';
import { getPostsAsync, selectPosts } from './features/Posts/postsSlice';
import './App.scss';
import { NotFound } from './pages/NotFound';
import { HomePage } from './pages/HomePage/HomePage';
import { PostPage } from './pages/PostPage/PostPage';
import { UserJsonplaceholder } from './type/User';
import { getToken } from './api/token';
import { getAllUsers } from './api/users';
import { getTokenAsync, setToken } from './features/Token/tokenSlice';
import { getUsersAsync } from './features/Users/usersSlice';

export async function rootLoader() {
  const response = await getAllUsers();

  return response;
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
  // const users = useLoaderData() as User[];
  const posts = useAppSelector(selectPosts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(getPostsAsync());
    }

    dispatch(getTokenAsync());

  const fetchToken = async () => {
    console.log('fetchToken');

    const response = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
      .then(function(response){
        console.log(response);

        return response.json(); 
      })
      .then(function(data){
        console.log(data);
        
        localStorage.setItem('token', data.token);
        dispatch(setToken(data.token));
      })
      .catch(function(error) {
        console.log(error);
      })

    return response; 
  }

  console.log(localStorage.getItem('token'));
  
  if (!localStorage.getItem('token')) {
    fetchToken();
  }

  dispatch(getUsersAsync({ page: 1,count: 6}));

  }, [dispatch])

  return (
    <div className="App">
      <header className="App__Header">
        <h1>React Template</h1>
        {/* {users.length && users.map((user: User) => (
          <p key={user.id}>{user.name}</p>
        ))} */}
      </header>

      <main className="App__Container">
        <Outlet/>     
      </main>
    </div>
  );
}

export default App;
