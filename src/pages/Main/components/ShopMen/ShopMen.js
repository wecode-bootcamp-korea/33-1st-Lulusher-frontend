import React from 'react';
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
        <button type="button" className="buttonPhrase">
          SHOP MEN'S
        </button>
        <button type="button" className="buttonPhrase">
          SHOP SWIM TRUNKS
        </button>
      </div>
    </div>
  );
};

export default ShopMen;
