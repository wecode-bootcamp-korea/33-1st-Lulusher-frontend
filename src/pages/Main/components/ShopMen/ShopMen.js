import React from 'react';
import { Link } from 'react-router-dom';
import './ShopMen.scss';

const ShopMen = () => {
  return (
    <div className="shopMen">
      <img
        src="/images/Main/shop_man.jpg"
        alt="shop men's"
        className="shopForMen"
      />
      <div className="topPhrase">Set for summer.</div>
      <div className="bottomPhrase">
        In breathable pool shorts with abrasion-resistant fabric, fun is the
        bottom line.
      </div>
      <div className="buttonAlign">
        <Link to="/products?menu=Men">
          <button type="button" className="buttonPhrase">
            SHOP MEN'S
          </button>
        </Link>
        <Link to="/products?main_category=Swim+Trunks">
          <button type="button" className="buttonPhrase">
            SHOP SWIM TRUNKS
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ShopMen;
