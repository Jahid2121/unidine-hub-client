import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
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
import UpdateMeal from "../pages/UpdateMeal/UpdateMeal";
import AdminHome from "../Layout/Dashboard/Admin/AdminHome";


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
        loader: ({params}) => fetch(`http://localhost:5000/memberships?name=${params.name}`) 
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
 
      },
      {
        path: "/updateMeal/:id",
        element: <UpdateMeal />,

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
        path: "/dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/profile/admin",
        element: <AdminRoute><AdminHome /></AdminRoute>,
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
        element: <AdminRoute><Users /></AdminRoute>,
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
      }
    ],
  },
]);
