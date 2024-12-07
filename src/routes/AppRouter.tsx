// layouts
import MainLayout from "@layouts/MainLayout/MainLayout"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import style from "@styles/global.css";
// pages
import Home from '@pages/Home';
import Categories from '@pages/Categories';
import AboutUs from '@pages/AboutUs';
import Products from '@pages/Products';
import Login from "@pages/Login";
import Register from "@pages/Register";
import ErrorPage from "@pages/ErrorPage";
const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: "categories",
          element: <Categories/>
        },
        {
          path: "products/:prefix",
          element: <Products/>
        },
        {
          path: "about-us",
          element: <AboutUs/>
        },
        {
            path: "login",
            element: <Login/>
        },
        {
            path: "register",
            element: <Register/>
        }
      ]
    }
  ])

const AppRouter = () => {
  return (
    <RouterProvider router={router}/>
  )
};

export default AppRouter;
