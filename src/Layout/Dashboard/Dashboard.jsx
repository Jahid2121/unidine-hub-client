import {  Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/Footer";
import { FaReadme, FaUsers, FaUtensilSpoon, FaUtensils } from "react-icons/fa";
import useAdmin from "../../hooks/useAdmin";
import CustomNavLink from "../../components/CustomNavLink";
import LoadingAnime from "../../components/LoadingAnime/LoadingAnime";
import { IoMdRestaurant } from "react-icons/io";
import { IoIosNutrition } from "react-icons/io";
import { BsPersonCircle } from "react-icons/bs";


const Dashboard = () => {
  const [isAdmin, isAdminLoading] = useAdmin();
  console.log(isAdmin);
  if(isAdminLoading){
    return <LoadingAnime />
  }
  return (
    // <div>
    //   <Navbar>
    //     <div className="mt-20 w-full mx-auto text-white">
    //       <div className="grid grid-cols-12 min-h-screen">
    //         <div className="md:col-span-3 col-span-12 flex md:flex-col flex-row w-full sticky md:static z-20 top-20 gap-10 md:gap-5 items-center p-4 md:pt-12 bg-customGreen">
    //           {isAdmin ? 
    //             <>
    //               {/* admin */}
    //               <CustomNavLink className="flex items-center  gap-3" to="/dashboard">
    //                   <BsPersonCircle />
    //                   <span className="hidden md:inline-block">Admin Profile</span>
    //               </CustomNavLink>
    //               <CustomNavLink
    //                 className="flex items-center gap-3"
    //                 to="/dashboard/users"
    //               > 
    //               <FaUsers />
    //               <span className="hidden md:inline-block"> Manage User</span>
    //               </CustomNavLink>
    //               <CustomNavLink
    //                 className="flex items-center gap-3"
    //                 to="/dashboard/addMeal"
    //               >
    //                 <FaUtensilSpoon />
    //                 <span className="hidden md:inline-block">Add Meal</span>
    //               </CustomNavLink>
    //               <CustomNavLink
    //                 className="flex items-center gap-3"
    //                 to="/dashboard/allMeals"
    //               >
    //                 <FaUtensils />
    //                 <span className="hidden md:inline-block">All Meals</span>
    //               </CustomNavLink>
    //               <CustomNavLink
    //                 className="flex items-center gap-3"
    //                 to="/dashboard/allReviews"
    //               >
    //                 <FaReadme />
    //                 <span className="hidden md:inline-block"> All Reviews</span>
    //               </CustomNavLink>
    //               <CustomNavLink
    //                 className="flex items-center gap-3"
    //                 to="/dashboard/allReqMeals"
    //               >
    //                 <IoIosNutrition />
    //                 <span className="hidden md:inline-block"> Serve Meal</span>
    //               </CustomNavLink>
    //             </>
    //            : 
    //             <div className="flex flex-row md:flex-col  gap-14 md:gap-2  mx-auto md:mx-2">
    //               <CustomNavLink className="flex flex-col items-center gap-3" to="/dashboard">
    //                 <BsPersonCircle />
    //                 <span className="hidden md:inline-block">User Profile</span>
                    
                    
                    
    //                 </CustomNavLink>

    //               <div className="divider hidden md:inline-block"></div>
    //               <CustomNavLink className="flex items-center gap-3" to="/dashboard/requestedMeals">
    //                 <IoMdRestaurant />
    //                 <span className="hidden md:inline-block">Requested Meals</span>
                    
    //               </CustomNavLink>
    //               <CustomNavLink className="flex items-center gap-3" to="/dashboard/reviews">
    //                 <FaReadme />
    //                 <span className="hidden md:inline-block">My Reviews</span>
    //                 </CustomNavLink>
    //             </div>
    //           }
    //         </div>
    //         <div className="md:col-span-9 col-span-12 text-center pt-20 bg-customSalmon">
    //           <Outlet />
    //         </div>
    //       </div>
    //     </div>
    //   </Navbar>
    //   <Footer />
    // </div>
    <div>
      
    </div>
  );
};

export default Dashboard;
