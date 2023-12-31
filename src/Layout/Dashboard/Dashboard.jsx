import {  Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/Footer";
import { FaHome, FaUsers, FaUtensilSpoon, FaUtensils } from "react-icons/fa";
import useAdmin from "../../hooks/useAdmin";
import CustomNavLink from "../../components/CustomNavLink";


const Dashboard = () => {
  const [isAdmin, isAdminLoading] = useAdmin();
  console.log(isAdmin);
  if(isAdminLoading){
    return <span className="loading flex mx-auto mt-40 loading-spinner loading-lg"></span>
  }
  return (
    <div>
      <Navbar>
        <div className="mt-20 w-11/12 mx-auto text-white">
          <div className="grid grid-cols-12 min-h-screen">
            <div className="col-span-3 flex flex-col gap-5 items-center pt-12 bg-customGreen">
              {isAdmin ? 
                <>
                  {/* admin */}
                  <CustomNavLink className="flex items-center gap-3" to="/dashboard">
                      <FaHome />
                    Admin Profile
                  </CustomNavLink>
                  <CustomNavLink
                    className="flex items-center gap-3"
                    to="/dashboard/users"
                  > 
                  <FaUsers />
                    Manage User
                  </CustomNavLink>
                  <CustomNavLink
                    className="flex items-center gap-3"
                    to="/dashboard/addMeal"
                  >
                    <FaUtensilSpoon />
                    Add Meal
                  </CustomNavLink>
                  <CustomNavLink
                    className="flex items-center gap-3"
                    to="/dashboard/allMeals"
                  >
                    <FaUtensils />
                    All Meals
                  </CustomNavLink>
                  <CustomNavLink
                    className="flex items-center gap-3"
                    to="/dashboard/allReviews"
                  >
                    All Reviews
                  </CustomNavLink>
                  <CustomNavLink
                    className="flex items-center gap-3"
                    to="/dashboard/allReqMeals"
                  >
                    Serve Meal
                  </CustomNavLink>
                </>
               : 
                <>
                  <CustomNavLink className="flex items-center gap-3" to="/dashboard">User Profile</CustomNavLink>

                  <div className="divider"></div>
                  <CustomNavLink className="flex items-center gap-3" to="/dashboard/requestedMeals">
                    Requested Meals
                  </CustomNavLink>
                  <CustomNavLink className="flex items-center gap-3" to="/dashboard/reviews">My Reviews</CustomNavLink>
                </>
              }
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
