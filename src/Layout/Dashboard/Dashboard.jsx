import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/Footer";

const Dashboard = () => {
  return (
    <div>
      <Navbar>
        <div className="mt-20 w-11/12 mx-auto">
        <div className="grid grid-cols-12 min-h-screen">
            <div className="col-span-3 flex flex-col items-center pt-12 bg-green-500">
                <NavLink>Welcome</NavLink>
                <NavLink>Welcome</NavLink>
                <NavLink>Welcome</NavLink>
                <NavLink>Welcome</NavLink>
                <NavLink>Welcome</NavLink>
            </div>
            <div className="col-span-9 bg-red-400">
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
