import React from 'react';
import './SlideCard.scss';

const SlideCard = ({ source }) => {
  const { src, productname, price } = source;
  return (
    <div className="SlideCard">
      <img src={src} alt="lulu1" />
      <div className="productNamePrice">
        <div className="productName">{productname}</div>
        <div className="productPrice">{price}</div>
      </div>
    </div>
  );
};

export default SlideCard;
