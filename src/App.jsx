import {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Body from './Components/Body';
import Error from './Components/Error';
import About from './Components/About';
import Contact from './Components/Contact';
import Menuitems from './Components/Menu-items';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
;


const Grocery = lazy( () => import('./Components/Grocery.jsx'));

const AppLayout = () => {
  return(
    <div className = 'App'>
      <Header />
      <Outlet />
    </div>
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