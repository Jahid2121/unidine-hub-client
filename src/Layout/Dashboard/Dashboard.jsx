import {  Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/Footer";
import { FaReadme, FaUsers, FaUtensils } from "react-icons/fa";
import useAdmin from "../../hooks/useAdmin";
import LoadingAnime from "../../components/LoadingAnime/LoadingAnime";
import { IoMdRestaurant } from "react-icons/io";
import { BsPersonCircle } from "react-icons/bs";
import "./Dashboard.css"
import DashboardLink from "../../components/DashboardLink/DashboardLink";
import { motion } from "framer-motion";


const Dashboard = () => {
  const [isAdmin, isAdminLoading] = useAdmin();
  // console.log(isAdmin);
  if(isAdminLoading){
    return <LoadingAnime />
  }
  return (
    <div>
      <Navbar>
        <div className="mt-20 w-full mx-auto main  text-white">
          <div className="grid grid-cols-12  min-h-screen">
            <div className="md:col-span-1 overflow-x-auto md:overflow-visible  col-span-12 flex md:flex-col flex-row  dashNav  md:static z-20 top-20 gap-10 md:gap-5 items-center p-4 md:pt-12 bg-customGreen">
              {isAdmin ? 
                <>
                  <div className="flex logo items-center">
                    <img
                      className="w-12 "
                      src={"https://i.ibb.co/T0VTkGN/bibimbap.png"}
                      alt="Logo"
                    />
                    
                    <p className="text-2xl link-text  font-bold">UniDine Hub</p>
                    </div>
                  {/* admin */}
                  <DashboardLink className="flex items-center text-white" to="/dashboard/profile">
                     <span className="dash-icon ">
                      <svg className="md:hover:animate-spin" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 448 512">
                        <path d="M224 256c-57.2 0-105.6-37.5-122-89.3c-1.1 1.3-2.2 2.6-3.5 3.8c-15.8 15.8-38.8 20.7-53.6 22.1c-8.1 .8-14.6-5.7-13.8-13.8c1.4-14.7 6.3-37.8 22.1-53.6c5.8-5.8 12.6-10.1 19.6-13.4c-7-3.2-13.8-7.6-19.6-13.4C37.4 82.7 32.6 59.7 31.1 44.9c-.8-8.1 5.7-14.6 13.8-13.8c14.7 1.4 37.8 6.3 53.6 22.1c4.8 4.8 8.7 10.4 11.7 16.1C131.4 28.2 174.4 0 224 0c70.7 0 128 57.3 128 128s-57.3 128-128 128zM0 482.3C0 399.5 56.4 330 132.8 309.9c6-1.6 12.2 .9 15.9 5.8l62.5 83.3c6.4 8.5 19.2 8.5 25.6 0l62.5-83.3c3.7-4.9 9.9-7.4 15.9-5.8C391.6 330 448 399.5 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM160 96c-8.8 0-16 7.2-16 16s7.2 16 16 16H288c8.8 0 16-7.2 16-16s-7.2-16-16-16H160z"/></svg>
                        </span>
                      <span className="hidden link-text ">Admin Profile</span>
                  </DashboardLink>
                  <DashboardLink
                    className="flex items-center "
                    to="/dashboard/users"
                  > 
                  <span className="dash-icon">
                  <svg className="md:hover:animate-spin" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path d="M48 48h88c13.3 0 24-10.7 24-24s-10.7-24-24-24H32C14.3 0 0 14.3 0 32V136c0 13.3 10.7 24 24 24s24-10.7 24-24V48zM175.8 224a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-26.5 32C119.9 256 96 279.9 96 309.3c0 14.7 11.9 26.7 26.7 26.7h56.1c8-34.1 32.8-61.7 65.2-73.6c-7.5-4.1-16.2-6.4-25.3-6.4H149.3zm368 80c14.7 0 26.7-11.9 26.7-26.7c0-29.5-23.9-53.3-53.3-53.3H421.3c-9.2 0-17.8 2.3-25.3 6.4c32.4 11.9 57.2 39.5 65.2 73.6h56.1zm-89.4 0c-8.6-24.3-29.9-42.6-55.9-47c-3.9-.7-7.9-1-12-1H280c-4.1 0-8.1 .3-12 1c-26 4.4-47.3 22.7-55.9 47c-2.7 7.5-4.1 15.6-4.1 24c0 13.3 10.7 24 24 24H408c13.3 0 24-10.7 24-24c0-8.4-1.4-16.5-4.1-24zM464 224a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-80-32a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM504 48h88v88c0 13.3 10.7 24 24 24s24-10.7 24-24V32c0-17.7-14.3-32-32-32H504c-13.3 0-24 10.7-24 24s10.7 24 24 24zM48 464V376c0-13.3-10.7-24-24-24s-24 10.7-24 24V480c0 17.7 14.3 32 32 32H136c13.3 0 24-10.7 24-24s-10.7-24-24-24H48zm456 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H608c17.7 0 32-14.3 32-32V376c0-13.3-10.7-24-24-24s-24 10.7-24 24v88H504z"/></svg>
                    </span>
                  
                  <span className="hidden link-text"> Manage User</span>
                  </DashboardLink>
                  <DashboardLink
                    className="flex items-center "
                    to="/dashboard/addMeal"
                  >
                    <span className="dash-icon">
                    
                    <svg className="md:hover:animate-spin " fill="white " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M169.7 .9c-22.8-1.6-41.9 14-47.5 34.7L110.4 80c.5 0 1.1 0 1.6 0c176.7 0 320 143.3 320 320c0 .5 0 1.1 0 1.6l44.4-11.8c20.8-5.5 36.3-24.7 34.7-47.5C498.5 159.5 352.5 13.5 169.7 .9zM399.8 410.2c.1-3.4 .2-6.8 .2-10.2c0-159.1-128.9-288-288-288c-3.4 0-6.8 .1-10.2 .2L.5 491.9c-1.5 5.5 .1 11.4 4.1 15.4s9.9 5.6 15.4 4.1L399.8 410.2zM176 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM96 384a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
                    </span>
           
                    
                    <span className="hidden link-text">Add Meal</span>
                  </DashboardLink>
                  <DashboardLink
                    className="flex items-center  border border-rose-500"
                    to="/dashboard/allMeals"
                  >
                    <span className="dash-icon">
                    <svg fill="white" className="md:hover:animate-spin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM312.6 63.7c-6.2-6.2-16.4-6.2-22.6 0L256 97.6 222.1 63.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l33.9 33.9-45.3 45.3-56.6-56.6c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l56.6 56.6-45.3 45.3L86.3 199.4c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L97.6 256 63.7 289.9c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l33.9-33.9 45.3 45.3-56.6 56.6c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l56.6-56.6 45.3 45.3-33.9 33.9c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L256 414.4l33.9 33.9c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-33.9-33.9 45.3-45.3 56.6 56.6c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-56.6-56.6 45.3-45.3 33.9 33.9c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L414.4 256l33.9-33.9c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-33.9 33.9-45.3-45.3 56.6-56.6c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-56.6 56.6-45.3-45.3 33.9-33.9c6.2-6.2 6.2-16.4 0-22.6zM142.9 256l45.3-45.3L233.4 256l-45.3 45.3L142.9 256zm67.9 67.9L256 278.6l45.3 45.3L256 369.1l-45.3-45.3zM278.6 256l45.3-45.3L369.1 256l-45.3 45.3L278.6 256zm22.6-67.9L256 233.4l-45.3-45.3L256 142.9l45.3 45.3z"/></svg>

                    </span>
                    <span className="hidden link-text">All Meals</span>
                  </DashboardLink>
                  <DashboardLink
                    className="flex items-center "
                    to="/dashboard/allReviews"
                  >
                    <span className="dash-icon">
                    <svg className="md:hover:animate-spin" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path  d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"/></svg>
                      </span>
                    <span className="hidden link-text"> All Reviews</span>
                  </DashboardLink>
                  <DashboardLink
                    className="flex items-center "
                    to="/dashboard/allReqMeals"
                  >
                    <span className="dash-icon">
                    <svg className="md:hover:animate-spin" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path d="M428.3 3c11.6-6.4 26.2-2.3 32.6 9.3l4.8 8.7c19.3 34.7 19.8 75.7 3.4 110C495.8 159.6 512 197.9 512 240c0 18.5-3.1 36.3-8.9 52.8c-6.1 17.3-28.5 16.3-36.8-.1l-11.7-23.4c-4.1-8.1-12.4-13.3-21.5-13.3H360c-13.3 0-24-10.7-24-24V152c0-13.3-10.7-24-24-24l-17.1 0c-21.3 0-30-23.9-10.8-32.9C304.7 85.4 327.7 80 352 80c28.3 0 54.8 7.3 77.8 20.2c5.5-18.2 3.7-38.4-6-55.8L419 35.7c-6.4-11.6-2.3-26.2 9.3-32.6zM171.2 345.5L264 160l40 0v80c0 26.5 21.5 48 48 48h76.2l23.9 47.8C372.3 443.9 244.3 512 103.2 512H44.4C19.9 512 0 492.1 0 467.6c0-20.8 14.5-38.8 34.8-43.3l49.8-11.1c37.6-8.4 69.5-33.2 86.7-67.7z"/></svg>
                      </span>
                    <span className="hidden link-text"> Serve Meal</span>
                  </DashboardLink>
                </>
               : 
              //   User Routes
                <div className="flex flex-row md:flex-col  gap-14 md:gap-2  mx-auto md:mx-2">
                  <div className="flex logo ml-5 items-center">
                    <img
                      className="w-12 "
                      src={"https://i.ibb.co/T0VTkGN/bibimbap.png"}
                      alt="Logo"
                    />
                    
                    <p className="text-2xl link-text  font-bold">UniDine Hub</p>
                    </div>
                  <DashboardLink className="flex flex-col items-center " to="/dashboard/profile">
                  <span className="dash-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7H162.5c0 0 0 0 .1 0H168 280h5.5c0 0 0 0 .1 0H417.3c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2H224 204.3c-12.4 0-20.1 13.6-13.7 24.2z"/></svg>
                    </span>
                    <span className=" link-text">User Profile</span>
                    
                    </DashboardLink>

                  <DashboardLink className="flex items-center " to="/dashboard/requestedMeals">
                  <span className="dash-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M0 64C0 28.7 28.7 0 64 0h64 32H470.1c21.1 0 36.4 20.1 30.9 40.4L494.5 64H336c-8.8 0-16 7.2-16 16s7.2 16 16 16H485.8l-17.5 64H336c-8.8 0-16 7.2-16 16s7.2 16 16 16H459.6l-17.5 64H336c-8.8 0-16 7.2-16 16s7.2 16 16 16h97.5L416 352H160l-8.7-96H64c-35.3 0-64-28.7-64-64V64zM145.5 192L133.8 64H64V192h81.5zM144 384H432c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48H144c-26.5 0-48-21.5-48-48V432c0-26.5 21.5-48 48-48zm144 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>
                    </span>
                    <span className=" link-text">Requested Meals</span>
                    
                  </DashboardLink>
                  <DashboardLink className="flex items-center " to="/dashboard/reviews">
                  <span className="dash-icon">
                  <svg className="md:hover:animate-spin" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path  d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"/></svg>
                    </span>
                    <span className=" link-text">My Reviews</span>
                    </DashboardLink>
                </div>
              }
            </div>
            <div className="md:col-span-12 md:ml-20 pl-6 col-span-12 text-center pt-20 mt-20 md:mt-0 bg-gray-200 text-black">
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