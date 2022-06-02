import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavbarSearchBox.scss';

const NavbarSearchBox = () => {
  const [products, setProducts] = useState([]);
  const [productInput, setProductInput] = useState('');

  const updateProductInput = e => {
    setProductInput(e.target.value);
  };

  const sortedProducts = products.filter(product => {
    return product.name.toLowerCase().includes(productInput.toLowerCase());
  });

  return (
    <Link to="/">
      <form className="navbarSearchBox" handlechange={sortedProducts}>
        <img
          className="magnifyingGlass"
          src="/images/Navbar/magnifying-glass.png"
          alt="magnifying-glass"
        />
        <input
          type="text"
          className="searchBar"
          placeholder="Search"
          onChange={updateProductInput}
        />
      </form>
    </Link>
  );
};

export default NavbarSearchBox;
