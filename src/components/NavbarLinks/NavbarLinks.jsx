import { NavLink } from 'react-router-dom';

const NavbarLinks = ({to, children}) => {
    return (
        <NavLink className="hover:bg-customSalmon nav-link hover:w-full flex flex-row  p-1  text-xl" to={to}
        style={({ isActive }) => ({
          backgroundColor: isActive ? 'salmon' : '',
          fontWeight: isActive ? "bold" : "",
        })}>
            {children}
        </NavLink>
    );
};

export default NavbarLinks;