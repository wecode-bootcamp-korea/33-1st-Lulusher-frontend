import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarDropdown from '../SecondNavbar/NavbarDropdown';
import NavbarSearchBox from '../NavbarSearchBox/NavbarSearchBox';
import './SecondNavbar.scss';

const SecondNavbar = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/');
  };

  const goToBag = () => {
    navigate('/bag');
  };

  return (
    <div className="secondNavbar">
      <div className="luluLogoSide">
        <img
          className="luluLogo"
          src="/images/Navbar/lemon.png"
          alt="luluLogo"
          onClick={goToMain}
        />
      </div>
      <div className="secondNavbarCategory">
        <NavbarDropdown />
      </div>
      <div className="secondNavbarRightSide">
        <NavbarSearchBox />
        <img
          className="shoppingBag"
          src="/images/Navbar/shopping-bag.png"
          alt="shopping-bag"
          onClick={goToBag}
        />
      </div>
    </div>
  );
};

export default SecondNavbar;
