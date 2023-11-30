import { NavLink } from "react-router-dom";

const CustomNavLink = ({ to, children}) => {
  return (
    <NavLink to={to}
    style={({ isActive }) => ({
      color: isActive ? 'salmon' : '',
    })}>
        {children}
    </NavLink>
  );
};

export default CustomNavLink;
