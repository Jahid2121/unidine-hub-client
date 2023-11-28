import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/Footer";
import { FaHome, FaUsers, FaUtensilSpoon, FaUtensils } from "react-icons/fa";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  return (
    <div>
      <Navbar>
        <div className="mt-20 w-11/12 mx-auto text-white">
          <div className="grid grid-cols-12 min-h-screen">
            <div className="col-span-3 flex flex-col gap-5 items-center pt-12 bg-customGreen">
              {isAdmin ? (
                <>
                  {/* admin */}
                  <NavLink className="flex items-center gap-3" to="/dashboard">
                      <FaHome />
                    Admin Profile
                  </NavLink>
                  <NavLink
                    className="flex items-center gap-3"
                    to="/dashboard/users"
                  > 
                  <FaUsers />
                    Manage User
                  </NavLink>
                  <NavLink
                    className="flex items-center gap-3"
                    to="/dashboard/addMeal"
                  >
                    <FaUtensilSpoon />
                    Add Meal
                  </NavLink>
                  <NavLink
                    className="flex items-center gap-3"
                    to="/dashboard/allMeals"
                  >
                    <FaUtensils />
                    All Meals
                  </NavLink>
                  <NavLink
                    className="flex items-center gap-3"
                    to="/dashboard/allReviews"
                  >
                    All Reviews
                  </NavLink>
                  <NavLink
                    className="flex items-center gap-3"
                    to="/dashboard/allReqMeals"
                  >
                    Serve Meal
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink className="flex items-center gap-3" to="/dashboard">User Profile</NavLink>

                  <div className="divider"></div>
                  <NavLink className="flex items-center gap-3" to="/dashboard/requestedMeals">
                    Requested Meals
                  </NavLink>
                  <NavLink className="flex items-center gap-3" to="/dashboard/reviews">My Reviews</NavLink>
                </>
              )}
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
