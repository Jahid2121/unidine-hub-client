
import { NavLink } from 'react-router-dom';
import "./DashboardLink.css"

const DashboardLink = ({ to, children}) => {

    return (
        <NavLink className="hover:bg-customSalmon nav-link hover:w-full flex flex-row  p-3  text-xl" to={to}
    style={({ isActive }) => ({
      backgroundColor: isActive ? 'salmon' : '',
      fontWeight: isActive ? "bold" : "",
    })}>
        {children}
    </NavLink>
    );
};

export default DashboardLink;