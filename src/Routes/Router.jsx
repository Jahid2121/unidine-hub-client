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
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import AllReviews from "../pages/AllReviews/AllReviews";
import AddMeals from "../pages/AddMeals/AddMeals";
import AllMeals from "../pages/AllMeals/AllMeals";
import AllReqMeals from "../pages/AllReqMeals/AllReqMeals";
import CheckOut from "../pages/CheckOut/CheckOut";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/checkout/:name",
        element: <CheckOut />,
        loader: ({params}) => fetch(`https://uni-dine-hub-server.vercel.app/memberships?name=${params.name}`) 
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/meals",
        element: <Meals />,
      },
      {
        path: "/meal/:id",
        element: <MealDetails />,
        loader: ({ params }) =>
          fetch(`https://uni-dine-hub-server.vercel.app/meal/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Profile />,
      },
      {
        path: "requestedMeals",
        element: <ReqMeals />,
      },
      {
        path: "reviews",
        element: <MyReviews />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: 'allReviews',
        element: <AdminRoute><AllReviews /></AdminRoute>
      },
      {
        path: 'addMeal',
        element: <AdminRoute><AddMeals /></AdminRoute>
      },
      {
        path:'allMeals',
        element: <AdminRoute><AllMeals /></AdminRoute>
      },
      {
        path:'allReqMeals',
        element: <AdminRoute><AllReqMeals /></AdminRoute>
      },
    ],
  },
]);
