import React from 'react';
import './ReviewBtn.scss';

const ReviewButton = ({ updateOffset, reviews, reviewCount, limit }) => {
  const btnArr = [];

  for (let i = 1; i <= Math.ceil(reviewCount / limit); i++) {
    btnArr.push(i);
  }

  return (
    <div className="reviewButton">
      {btnArr.map((number, idx) => {
        return (
          <button
            className="numberBtn"
            onClick={() => updateOffset(number * limit - limit)}
            key={idx}
          >
            {number}
          </button>
        );
      })}
    </div>
  );
};

export default ReviewButton;
