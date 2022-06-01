import React, { useEffect, useState } from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import './EachReview.scss';
import './Modal.scss';

const EachReview = ({ review, deleteReviewUpdate, setDeleteReviewUpdate }) => {
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
    const token = localStorage.getItem(token) || '';
    fetch('url', {
      headers: { Authorization: token },
      method: 'DELETE',
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          console.log('fail to review delete');
        }
      })
      .then(data => {
        console.log(data);
        setDeleteReviewUpdate(!deleteReviewUpdate);
      }) //응답메시지 보고 if문으로 코드 감싸기
      .catch(error => console.log(error));
  };

  useEffect(() => {
    handleStar();
  }, []);

  return (
    <div className="eachReview">
      <div className="reviewInterval">
        <div className="reviewSpace">{create_at}</div>
        <div className="reviewSpace">{username}</div>
        <div className="reviewSpace">
          {starArr.map((el, idx) => {
            return (
              <AiOutlineStar
                key={idx}
                className={stars[el] ? 'fillStar' : ''}
              />
            );
          })}
        </div>
        <div className="reviewSpace">{content}</div>
        <button onClick={deleteReview}>삭제</button>
      </div>
    </div>
  );
};

export default EachReview;
