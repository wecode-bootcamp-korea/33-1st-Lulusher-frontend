import React, { useState } from 'react';
import Modal from './Modal';
import EachReview from './EachReview';
import './Review.scss';

const Review = () => {
  const [modal, setModal] = useState(false);
  const token = true;

  const openModal = () => {
    if (token === true) {
      setModal(true);
    } else alert('로그인이 필요한 서비스 입니다');
  };
  return (
    <div className="Review">
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
            <EachReview />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Review;
