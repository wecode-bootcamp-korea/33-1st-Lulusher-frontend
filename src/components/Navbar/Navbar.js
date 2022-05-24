import React from 'react';
import {
  FaStore,
  FaRegUserCircle,
  FaRegHeart,
  FaGift,
  FaMapMarkerAlt,
} from 'react-icons/fa';

import NavbarWomanLeft from './NavbarWomanLeft';
import './Navbar.scss';
import NavbarWomanClothes from './NavbarWomanClothes';
import NavbarWomanActivity from './NavbarWomanActivity';
import NavbarManLeft from './NavbarManLeft';
import NavbarManClothes from './NavbarManClothes';
import NavbarManActivity from './NavbarManActivity';
import NavbarAccessories from './NavbarAccessories';
import NavbarAccessoriesLeft from './NavbarAccessoriesLeft';
import NavbarAccessoriesActivity from './NavbarAccessoriesActivity';

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="firstNavbar">
        <div className="firstNav">
          <div>
            <FaStore />
            <p>Store Locator</p>
          </div>
          <div>
            <FaRegUserCircle />
            <p>Sign in</p>
          </div>
          <div>
            <FaRegHeart />
            <p>Wish List</p>
          </div>
          <div>
            <FaGift />
            <p>Gift Card</p>
          </div>
          <div>
            <FaMapMarkerAlt />
            <p>USA</p>
          </div>
        </div>
      </div>

      <div className="secondNavbar">
        <div className="luluLogoSide">
          <img
            className="luluLogo"
            src="/images/Navbar/lemon.png"
            alt="luluLogo"
          />
        </div>
        <div className="secondNavbarCategory">
          <div className="navbarWoman">
            <div className="navbarMainTitle">WOMEN</div>
            <div className="navbarWomanAlign">
              <NavbarWomanLeft />
              <NavbarWomanClothes />
              <NavbarWomanActivity />
            </div>
          </div>
          <div className="navbarMan">
            <div className="navbarMainTitle">MEN</div>
            <div className="navbarManAlign">
              <NavbarManLeft />
              <NavbarManClothes />
              <NavbarManActivity />
            </div>
          </div>
          <div className="navbarAccessories">
            <div className="navbarMainTitle">ACCESSORIES</div>
            <div className="navbarAccessoriesAlign">
              <NavbarAccessoriesLeft />
              <NavbarAccessories />
              <NavbarAccessoriesActivity />
            </div>
          </div>
        </div>
        <div className="secondNavnarRightSide">
          <div className="searchBox">
            <img
              className="magnifyingGlass"
              src="/images/Navbar/magnifying-glass.png"
              alt="magnifying-glass"
            />
            <input type="text" className="searchBar" placeholder="Search" />
          </div>
          <img
            className="shoppingBag"
            src="/images/Navbar/shopping-bag.png"
            alt="shopping-bag"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
