import {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Body from './Components/Body';
import Error from './Components/Error';
import About from './Components/About';
import Contact from './Components/Contact';
import Menuitems from './Components/Menu-items';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import UserContext from './config/userContext.js';
import { useState, useEffect } from 'react';


const Grocery = lazy( () => import('./Components/Grocery.jsx'));

const AppLayout = () => {
  const [userName, setUserName] = useState('null')

  useEffect(() => {
    setUserName('Mike Tyson');
  } ,[]) 
    return(
      <UserContext.Provider value = {{defaultUser: userName, setUserName}}>
      <div className = 'App'>
        {/* <UserContext.Provider value = {{defaultUser: userName}}> */}
        <Header />
        {/* </UserContext.Provider> */}
        <Outlet />
      </div>
      </UserContext.Provider>
  )
}

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children : [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/Grocery',
        element: (<Suspense fallback={<h1>Loading...</h1>}>
          <Grocery />
        </Suspense>)
      },
      {
        path: '/restaurants/:resId',
        element: <Menuitems />
      }
    ],
    errorElement: <Error />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={AppRouter} />);