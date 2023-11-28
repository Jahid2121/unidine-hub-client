import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/Footer";

const Dashboard = () => {
  return (
    <div>
      <Navbar>
        <div className="mt-20 w-11/12 mx-auto text-white">
          <div className="grid grid-cols-12 min-h-screen">
            <div className="col-span-3 flex flex-col gap-5 items-center pt-12 bg-customGreen">
              <NavLink to="/dashboard">Admin Profile</NavLink>
              <NavLink to="/dashboard/requestedMeals">Requested Meals</NavLink>

              {/* admin */}
              {/* <NavLink to="/dashboard/manageUser">Manage User</NavLink>
              <NavLink to="/dashboard/addMeal">Add Meal</NavLink>
              <NavLink to="/dashboard/meals">All Meals</NavLink>
              <NavLink to="/dashboard/reviews">All Reviews</NavLink>
              <NavLink to="/dashboard/serveMeal">Server Meal</NavLink> */}


            </div>
            <div className="col-span-9 text-center pt-20 bg-customSalmon">
              <Outlet />
            </div>
          </div>
        </div>
      </Navbar>
      <Footer />
    </div>
  );
};

export default Dashboard;
