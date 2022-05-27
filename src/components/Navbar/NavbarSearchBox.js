import React from 'react';
import './NavbarSearchBox.scss';

const NavbarSearchBox = props => {
  return (
    <form className="NavbarSearchBox">
      <img
        className="magnifyingGlass"
        src="/images/Navbar/magnifying-glass.png"
        alt="magnifying-glass"
      />
      <input
        type="text"
        className="searchBar"
        placeholder="Search"
        // onChange={props.handleChange}
      />
    </form>
  );
};

export default NavbarSearchBox;
