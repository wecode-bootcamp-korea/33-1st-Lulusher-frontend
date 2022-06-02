import React from 'react';
import FirstNavbar from './FirstNavbar/FirstNavbar';
import SecondNavbar from './SecondNavbar/SecondNavbar';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <FirstNavbar />
      <SecondNavbar />
    </div>
  );
};

export default Navbar;
