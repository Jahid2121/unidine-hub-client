import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
        
      <Navbar>

      <div className="mt-16">
      <Outlet />
      </div>
      </Navbar>
      <Footer />

    </div>
  );
};

export default MainLayout;
