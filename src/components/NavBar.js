import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  return (
    <div className="navbar">
      <NavLink  style={{ textDecoration: 'none', color: 'blue' }} to="/">Home</NavLink>{' '}
      <NavLink  style={{ textDecoration: 'none', color: 'blue' }} to="/projects">Projects</NavLink>{' '}
      <NavLink  style={{ textDecoration: 'none', color: 'blue' }} to="/contact">Contact</NavLink>{' '}
    </div>
  );
};

export default NavBar;