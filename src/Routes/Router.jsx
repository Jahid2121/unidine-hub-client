import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../assets/Pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Meals from "../pages/Meals/Meals";
import MealDetails from "../pages/MealDetails/MealDetails";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
            path: '/',
            element: <Home />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        },
        {
          path: '/meals',
          element: <Meals />
        },
        {
          path: '/meal/:id',
          element: <MealDetails />,
          loader: ({params}) => fetch(`http://localhost:5000/meal/${params.id}`)
        },
      ]
    },
  ]);