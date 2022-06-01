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

  //TODO: 검색 된 제품들이 상품목록 리스트에 이동해야하는 작업을 추후 진행 예정

  // const [products, setProducts] = useState([]);
  // const [productInput, setProductInput] = useState('');

  // const updateProductInput = e => {
  //   setProductInput(e.target.value);
  // };

  // const sortedProducts = products.filter(product => {
  //   return product.name.toLowerCase().includes(userInput.toLowerCase());
  // });
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
        <NavbarSearchBox
        // handleChange={updateProductInput}
        />
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
