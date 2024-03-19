import { NavLink } from "react-router-dom";

const CustomNavLink = ({ to, children}) => {
  return (
    <NavLink className="hover:text-customSalmon text-xl" to={to}
    style={({ isActive }) => ({
      color: isActive ? 'salmon' : '',
      fontWeight: isActive ? "bold" : "",
    })}>
        {children}
    </NavLink>
  ); 
};

export default CustomNavLink;
