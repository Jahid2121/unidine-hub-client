import {  FaBreadSlice,  FaHome } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

import {  NavLink } from "react-router-dom";
import "../AnimatedNavbar/AnimatedNavbar.css"
const AnimatedNavbar = () => {
  return (
    <nav className=" text-white hidden md:inline-block  h-screen pt-40 pr-5 absolute ">
      <ul className="text-3xl  ml-2 ">
        {/* Home */}
        <li className="mb-4 border rounded-full pl-2 nav-Item "><NavLink to="/" className="flex text-customSalmon">
        <span><FaHome /></span> <span className="link-text  font-bold">Home</span>
          </NavLink> </li>
        {/* Meals */}
        <li className="mb-4 border rounded-full pl-2 nav-Item "><NavLink to="/meals" className="flex text-customSalmon"><span><FaBreadSlice /></span> <span className="link-text font-bold ">Meals </span></NavLink> </li>
        {/*  */}
        <li className="mb-4 border rounded-full pl-2 nav-Item "><NavLink to="/dashboard" className="flex text-customSalmon"><span><MdDashboard /></span> <span className="link-text font-bold ">Dash </span></NavLink> </li>
        
      </ul>
    </nav>
  );
};

export default AnimatedNavbar;