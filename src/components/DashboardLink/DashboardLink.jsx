import React from 'react';
import { NavLink } from 'react-router-dom';

const DashboardLink = ({ to, children}) => {
    return (
        <NavLink className="hover:bg-customSalmon flex flex-row  p-3  text-xl" to={to}
    style={({ isActive }) => ({
      backgroundColor: isActive ? 'salmon' : '',
      fontWeight: isActive ? "bold" : "",
    })}>
        {children}
    </NavLink>
    );
};

export default DashboardLink;