import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../assets/Pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Meals from "../pages/Meals/Meals";
import MealDetails from "../pages/MealDetails/MealDetails";
  import Dashboard from "../Layout/Dashboard/Dashboard";
import Profile from "../pages/Profile/Profile";
import ReqMeals from "../pages/ReqMeals/ReqMeals";
import MyReviews from "../pages/Myreviews/MyReviews";
import Users from "../pages/Users/Users";



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
    {
      path: '/dashboard',
      element: <privateRoute><Dashboard /></privateRoute>,
      children: [
        {
          path: '/dashboard',
          element: <Profile />
        },
        {
          path: 'requestedMeals',
          element: <ReqMeals />
        },
        {
          path: 'reviews',
          element: <MyReviews />
        },
        {
          path: 'users',
          element: <Users />
        },
      ]
    },
  ]);