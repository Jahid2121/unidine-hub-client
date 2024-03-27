import {  Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/Footer";
import { FaHome, FaReadme, FaServer, FaUsers, FaUtensilSpoon, FaUtensils } from "react-icons/fa";
import useAdmin from "../../hooks/useAdmin";
import CustomNavLink from "../../components/CustomNavLink";
import LoadingAnime from "../../components/LoadingAnime/LoadingAnime";


const Dashboard = () => {
  const [isAdmin, isAdminLoading] = useAdmin();
  console.log(isAdmin);
  if(isAdminLoading){
    return <LoadingAnime />
  }
  return (
    <div>
      <Navbar>
        <div className="mt-20 w-full mx-auto text-white">
          <div className="grid grid-cols-12 min-h-screen">
            <div className="md:col-span-3 col-span-12 flex md:flex-col flex-row w-full absolute md:static z-20 bottom-0 gap-10 md:gap-5 items-center p-4 md:pt-12 bg-customGreen">
              {isAdmin ? 
                <>
                  {/* admin */}
                  <CustomNavLink className="flex items-center  gap-3" to="/dashboard">
                      <FaHome />
                      <span className="hidden md:inline-block">Admin Profile</span>
                  </CustomNavLink>
                  <CustomNavLink
                    className="flex items-center gap-3"
                    to="/dashboard/users"
                  > 
                  <FaUsers />
                  <span className="hidden md:inline-block"> Manage User</span>
                  </CustomNavLink>
                  <CustomNavLink
                    className="flex items-center gap-3"
                    to="/dashboard/addMeal"
                  >
                    <FaUtensilSpoon />
                    <span className="hidden md:inline-block">Add Meal</span>
                  </CustomNavLink>
                  <CustomNavLink
                    className="flex items-center gap-3"
                    to="/dashboard/allMeals"
                  >
                    <FaUtensils />
                    <span className="hidden md:inline-block">All Meals</span>
                  </CustomNavLink>
                  <CustomNavLink
                    className="flex items-center gap-3"
                    to="/dashboard/allReviews"
                  >
                    <FaReadme />
                    <span className="hidden md:inline-block"> All Reviews</span>
                  </CustomNavLink>
                  <CustomNavLink
                    className="flex items-center gap-3"
                    to="/dashboard/allReqMeals"
                  >
                    <FaServer />
                    <span className="hidden md:inline-block"> Serve Meal</span>
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
            <div className="md:col-span-9 col-span-12 text-center pt-20 bg-customSalmon">
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
