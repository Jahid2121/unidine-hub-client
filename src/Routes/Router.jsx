import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../assets/Pages/Home/Home";
import Register from "../pages/Register/Register";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
            path: '/',
            element: <Home />
        },
        // {
        //   path: '/login',
        //   element: <Login />
        // },
        {
          path: '/register',
          element: <Register />
        },
      ]
    },
  ]);