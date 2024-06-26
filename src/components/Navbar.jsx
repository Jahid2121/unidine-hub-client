import { Link, NavLink } from "react-router-dom";
import { CiBellOn } from "react-icons/ci";
import useAuth from "../hooks/useAuth";
import CustomNavLink from "./CustomNavLink";
import { Tooltip } from "react-tooltip";
import { motion } from "framer-motion";
import NavbarLinks from "./NavbarLinks/NavbarLinks";
import { useState } from "react";
import useAdmin from "../hooks/useAdmin";
const Pages = () => {
  const { logOut, user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isAdmin, isAdminLoading] = useAdmin();

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // <CustomNavLink to="/upcomingMeals">UpComing</CustomNavLink>
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div className="flex  items-center flex-grow  gap-6">
      <div className="flex mr-28 items-center ml-10">
      <CustomNavLink  to="/"
      style={isActive => ({
        color: isActive ? "blue" : "green"
      })}
      >Home</CustomNavLink>
      <span className="ml-10"><CustomNavLink  to="/meals">Meals</CustomNavLink></span>
      </div>
      
      {/* <div className="text-2xl">
      <NavLink>
        <CiBellOn />
      </NavLink>
      </div> */}
      {user ? (
        // <NavLink onClick={handleLogOut}>LogOut</NavLink>
        <div className="dropdown text-black dropdown-end" onMouseEnter={handleToggleMenu} onMouseLeave={handleToggleMenu}>
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        <Tooltip id="User" />
          <span data-tooltip-id="User" data-tooltip-content="User Profile!">
          <img alt={user?.displayName} src={user?.photoURL} />
</span>
        </div>
      </div>
      <ul className=" z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li className="">
          <span className="justify-between mb-1">
            {user?.displayName}
          </span>
        </li>
        <li className="mt-1 mb-1">
          {isAdmin ? <NavbarLinks to="/dashboard/profile/admin">DashBoard</NavbarLinks> : <NavbarLinks to="/dashboard/profile">DashBoard</NavbarLinks>}
        </li>
        <li><button className="p-2 hover:bg-customGreen" onClick={handleLogOut}>LogOut</button></li>
      </ul>
    </div>
      ) : (
        <CustomNavLink to="login">Join Us</CustomNavLink>
      )}
    </div>
  );
};

const Navbar = ({ children }) => {
  const { logOut, user } = useAuth();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div>
      {/* Drawer */}

      <>
        <div className="drawer   min-h-screen font-poppins">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className=" max-w-7xl mx-auto fixed z-10 navbar text-white bg-opacity-95 bg-customGreen">
              <div className="flex-none justify-end lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>

              <div className="flex-none gap-9  lg:block">
                <ul className="menu   menu-horizontal">
                  {/* Navbar menu content here */}
                  <div className="flex gap-48 mr-3 items-center">
                    <div className="flex items-center">
                    <motion.img
                    whileHover={{rotate: 0.5}}
                      className="w-12"
                      src={"https://i.ibb.co/T0VTkGN/bibimbap.png"}
                      animate={{ rotate: 360}}
                      transition={{duration: 3, loop: Infinity, ease: "linear"}}
                      alt=""
                    />
                    
                    <p className="text-2xl font-bold">UniDine Hub</p>
                    </div>
                    <div className="hidden lg:block">
                    <Pages />
                    </div>
                  </div>
                  {/*  */}
                </ul>
              </div>
            </div>

            {/* Page content here */}
            {children}
          </div>

          <div className="drawer-side z-30">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            
            <ul className="menu mt-20 gap-5 font-medium p-4 w-80 min-h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              
              <CustomNavLink to="/">Home</CustomNavLink>
              <CustomNavLink to="/meals">Meals</CustomNavLink>
              {/* <CustomNavLink to="/upcomingMeals">UpComing</CustomNavLink> */}
              <CustomNavLink to="/dashboard/profile">DashBoard</CustomNavLink>
              <CustomNavLink>
                <CiBellOn />
              </CustomNavLink>
              {user ? (
        <Link onClick={handleLogOut}>LogOut</Link>
      ) : (
        <CustomNavLink to="login">Join Us</CustomNavLink>
        
      )}
            </ul>
          </div>

       
        </div>

        {/* footer section */}
        {/* <Footer /> */}
      </>
    </div>
  );
};

export default Navbar;
