import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  return (
    <div className="navbar">
      <NavLink  style={{ textDecoration: 'none' }} to="/">Welcome</NavLink>
    </div>
  );
};

export default NavBar;