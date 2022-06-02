import React from 'react';
import './GrayCard.scss';

const GrayCard = () => {
  return (
    <ul className="grayCard">
      <li className="singleGrayCard">
        <span>Streamlined fit that gives glutes and thighs breathing room</span>
      </li>

      <li className="singleGrayCard">
        <span>Pocket lining: 86% Polyester, 14% Elastane</span>
      </li>

      <li className="singleGrayCard">
        <span>Body: 95% Nylon, 5% Elastane</span>
      </li>

      <li className="singleGrayCard">
        <span>Wash with like colours</span>
      </li>

      <li className="singleGrayCard">
        <span>Machine wash cold</span>
      </li>

      <li className="singleGrayCard">
        <span>Do not bleach</span>
      </li>
    </ul>
  );
};

export default GrayCard;
