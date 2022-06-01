import React, { useEffect, useState } from 'react';
// import { Navigate } from 'react-router-dom';
import './NavbarSearchBox.scss';

const NavbarSearchBox = () => {
  const [products, setProducts] = useState([]);
  const [productInput, setProductInput] = useState('');

  useEffect(() => {
    fetch(`http://10.58.0.59:8000/products/list`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      });
  }, []);

  const updateProductInput = e => {
    setProductInput(e.target.value);
  };

  const sortedProducts = products.filter(product => {
    return product.name.toLowerCase().includes(productInput.toLowerCase());
  });

  return (
    <form className="navbarSearchBox" handlechange={updateProductInput}>
      <img
        className="magnifyingGlass"
        src="/images/Navbar/magnifying-glass.png"
        alt="magnifying-glass"
      />
      <input
        type="text"
        className="searchBar"
        placeholder="Search"
        onChange={sortedProducts}
      />
    </form>
  );
};

export default NavbarSearchBox;
