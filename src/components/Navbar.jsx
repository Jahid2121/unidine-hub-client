import { Link, NavLink } from "react-router-dom";
import { CiBellOn } from "react-icons/ci";

const Pages = () => {
  return (
    <div className="flex items-center gap-6">
    <NavLink>Home</NavLink>
    <NavLink>Meals</NavLink>
    <NavLink>UpComing</NavLink>
    <NavLink><CiBellOn /></NavLink>
    <NavLink>Join Us</NavLink>
    </div>
  )
}

const Navbar = ({children}) => {
  

  return (
    <div>
      
  
    
    
    {/* Drawer */}

    <>
      <div className="drawer min-h-screen font-poppins">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full max-w-5xl mx-auto fixed navbar text-white bg-opacity-40 bg-[#5EAE53]">
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
                <div className="flex gap-5 mr-3 items-center">
                 <Pages />
                </div>
                {/*  */}
              </ul>
            </div>
          </div>

          {/* Page content here */}
          {children}
        </div>
        <div className="drawer-side ">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            <div className=" gap-5 mr-3 items-center">

           <Pages />
            </div>
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