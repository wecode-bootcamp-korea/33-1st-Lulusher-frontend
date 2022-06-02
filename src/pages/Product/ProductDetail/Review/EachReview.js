import React, { useEffect, useState } from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import './EachReview.scss';
import './Modal.scss';

const EachReview = ({
  review,
  deleteReviewUpdate,
  setDeleteReviewUpdate,
  product,
}) => {
  const { username, content, rating, create_at } = review;
  const starArr = [0, 1, 2, 3, 4];
  const [stars, setStars] = useState([false, false, false, false, false]);

  const handleStar = e => {
    let clickedStar = [...stars];
    clickedStar.fill(true, 0, rating);
    clickedStar.fill(false, rating, 5);
    setStars(clickedStar);
  };

  const deleteReview = () => {
    const token = localStorage.getItem('Access_token') || '';
    fetch(`http://10.58.3.71:8000/products/${product.id}/review/${review.id}`, {
      headers: { Authorization: token },
      method: 'DELETE',
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(data => {
        if (data) {
          setDeleteReviewUpdate(!deleteReviewUpdate);
        }
      });
  };

  useEffect(() => {
    handleStar();
  }, []);

  return (
    <div className="eachReview">
      <div className="reviewInterval">
        <div className="reviewSpace">{create_at.split('T')[0]}</div>
        <div className="reviewSpace">{username}</div>
        <div className="reviewSpace">
          {starArr.map((el, idx) => {
            return (
              <AiOutlineStar
                key={idx}
                className={stars[el] ? 'fillStar' : 'emptyStar'}
              />
            );
          })}
        </div>
        <div className="reviewSpace">{content}</div>
        <button className="deleteBtn" onClick={deleteReview}>
          삭제
        </button>
      </div>
    </div>
  );
};

export default EachReview;
