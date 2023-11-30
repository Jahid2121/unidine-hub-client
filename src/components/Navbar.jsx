import { Link, NavLink } from "react-router-dom";
import { CiBellOn } from "react-icons/ci";
import useAuth from "../hooks/useAuth";
import CustomNavLink from "./CustomNavLink";

const Pages = () => {
  const { logOut, user } = useAuth();
  
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div className="flex  items-center gap-6">
      <CustomNavLink  to="/"
      style={isActive => ({
        color: isActive ? "blue" : "green"
      })}
      >Home</CustomNavLink>
      <CustomNavLink to="/meals">Meals</CustomNavLink>
      <CustomNavLink to="/upcomingMeals">UpComing</CustomNavLink>
      <div className="text-2xl">
      <NavLink>
        <CiBellOn />
      </NavLink>
      </div>
      {user ? (
        // <NavLink onClick={handleLogOut}>LogOut</NavLink>
        <div className="dropdown text-black dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt={user?.displayName} src={user?.photoURL} />
        </div>
      </div>
      <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between mb-1">
            {user?.displayName}
          </a>
        </li>
        <li className="mt-1 mb-1"><CustomNavLink to="/dashboard">DashBoard</CustomNavLink></li>
        <li><NavLink onClick={handleLogOut}>LogOut</NavLink></li>
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
        <div className="drawer  min-h-screen font-poppins">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="w-full max-w-5xl mx-auto fixed z-10 navbar text-white bg-opacity-95 bg-customGreen">
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

              <div className="flex-none gap-9 hidden lg:block">
                <ul className="menu   menu-horizontal">
                  {/* Navbar menu content here */}
                  <div className="flex gap-48 mr-3 items-center">
                    <div className="flex items-center">
                    <img
                      className="w-12"
                      src={"https://i.ibb.co/T0VTkGN/bibimbap.png"}
                      alt=""
                    />
                    <p className="text-2xl font-bold">UniDine Hub</p>
                    </div>
                    <div>
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

          <div className="drawer-side">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu gap-5 font-medium p-4 w-80 min-h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              <NavLink to="/">Home</NavLink>
              <NavLink to="/meals">Meals</NavLink>
              <NavLink to="/upcomingMeals">UpComing</NavLink>
              <NavLink to="/dashboard">DashBoard</NavLink>
              <NavLink>
                <CiBellOn />
              </NavLink>
              {user ? (
        <Link onClick={handleLogOut}>LogOut</Link>
      ) : (
        <NavLink to="login">Join Us</NavLink>
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
