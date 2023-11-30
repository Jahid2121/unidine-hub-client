import { Link, NavLink } from "react-router-dom";
import { CiBellOn } from "react-icons/ci";
import useAuth from "../hooks/useAuth";

const Pages = () => {
  const { logOut, user } = useAuth();
  
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div className="flex  items-center gap-6">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/meals">Meals</NavLink>
      <NavLink to="/upcomingMeals">UpComing</NavLink>
      <NavLink>
        <CiBellOn />
      </NavLink>
      {user ? (
        <Link onClick={handleLogOut}>LogOut</Link>
      ) : (
        <NavLink to="login">Join Us</NavLink>
      )}
      <NavLink to="/dashboard">DashBoard</NavLink>
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
                      src={"https://i.ibb.co/0Ktf9xC/chef.png"}
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
