import React, { useEffect, useState } from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import './EachReview.scss';
import './Modal.scss';

const EachReview = ({ review }) => {
  const { name, date, rating, reviewTitle, content } = review;
  const starArr = [0, 1, 2, 3, 4];
  const [stars, setStars] = useState([false, false, false, false, false]);

  const handleStar = e => {
    let clickedStar = [...stars];
    clickedStar.fill(true, 0, rating);
    clickedStar.fill(false, rating, 5);
    setStars(clickedStar);
  };

  useEffect(() => {
    handleStar();
  }, []);

  console.log(stars);

  return (
    <div className="EachReview">
      <div className="reviewInterval">
        <div className="reviewSpace">{name}</div>
        <div className="reviewSpace">
          {starArr.map((el, i) => {
            return (
              <AiOutlineStar key={i} className={stars[el] ? 'fillStar' : ''} />
            );
          })}
        </div>
        <h1 className="reviewSpace">{reviewTitle}</h1>
        <div className="reviewSpace">{content}</div>
        <button>삭제</button>
      </div>
    </div>
  );
};

export default EachReview;
