import React, { useEffect, useState, useRef } from 'react';
import Modal from './Modal';
import EachReview from './EachReview';
import './Review.scss';

const Review = ({ scrollToReview }) => {
  console.log(scrollToReview);
  const [modal, setModal] = useState(false);
  const [reviews, setReviews] = useState([]);
  const token = true; //localStorage.getItem('token')

  useEffect(() => {
    fetch('/data/review.json')
      .then(res => res.json())
      .then(res => {
        setReviews(res);
      });
  }, [modal]);

  const openModal = () => {
    if (token === true) {
      setModal(true);
    } else alert('로그인이 필요한 서비스 입니다');
  };
  return (
    <div ref={scrollToReview} className="Review">
      {modal === true ? <Modal setModal={setModal} /> : null}
      <div className="reviewLogo">Reviews</div>
      <div className="reviewComment">
        <aside className="asideWidth">
          <button className="reviewBtn" onClick={openModal}>
            Write A Review
          </button>
        </aside>

        <section className="sectionWidth">
          <div className="reviewPadding">
            {reviews.map((review, i) => {
              return <EachReview key={i} review={review} />;
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Review;
