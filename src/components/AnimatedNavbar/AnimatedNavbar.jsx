import {  FaBreadSlice,  FaHome } from "react-icons/fa";
import {  NavLink } from "react-router-dom";
import "../AnimatedNavbar/AnimatedNavbar.css"
const AnimatedNavbar = () => {
  return (
    <nav className=" text-white   h-screen pt-40 pr-5 absolute ">
      <ul className="text-3xl  ml-2 ">
        <li className="mb-4 border rounded-full pl-2 nav-Item "><NavLink to="/" className="flex text-customSalmon">
        <span><FaHome /></span> <span className="link-text  ">Home</span>
          </NavLink> </li>
        <li className="mb-4 border rounded-full pl-2 nav-Item "><NavLink to="/meals" className="flex text-customSalmon"><span><FaBreadSlice /></span> <span className="link-text ">Meals </span></NavLink> </li>
        
        
      </ul>
    </nav>
  );
};

export default AnimatedNavbar;