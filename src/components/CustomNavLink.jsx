import { NavLink } from "react-router-dom";

const CustomNavLink = ({ to, children}) => {
  return (
    <NavLink className="hover:text-customSalmon flex flex-row  items-center gap-2 text-xl" to={to}
    style={({ isActive }) => ({
      color: isActive ? 'salmon' : '',
      fontWeight: isActive ? "bold" : "",
    })}>
        {children}
    </NavLink>
  ); 
};

export default CustomNavLink;
