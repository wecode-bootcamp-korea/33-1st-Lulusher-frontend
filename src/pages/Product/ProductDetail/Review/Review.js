import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ReviewButton from './ReviewBtn';
import Modal from './Modal';
import EachReview from './EachReview';
import { HiOutlineSearch } from 'react-icons/hi';
import './Review.scss';

const Review = ({ scrollToReview, product }) => {
  const [modal, setModal] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [deleteReviewUpdate, setDeleteReviewUpdate] = useState(false);
  const [reviewCount, setReviewCount] = useState('');

  const location = useLocation();
  const [limit] = useState(3);
  const navigate = useNavigate();

  const updateOffset = offset => {
    const queryString = `?limit=${limit}&offset=${offset}`;
    navigate(queryString);
  };

  useEffect(() => {
    fetch(
      `http://10.58.3.71:8000/products/${product.id}/review${
        location.search || `?limit=${limit}&offset=0`
      }`
    )
      .then(res => res.json())
      .then(res => {
        setReviews(res.data);
        setReviewCount(res.review_count);
      });
  }, [modal, deleteReviewUpdate, location.search]);

  let token = localStorage.getItem('Access_token') || '';
  const openModal = () => {
    if (token) {
      setModal(true);
    } else alert('로그인이 필요한 서비스 입니다');
  };

  const filteredReviews = reviews.filter(review => {
    return review.content.includes(userInput);
  });

  const handleUserInput = e => {
    setUserInput(e.target.value);
  };

  return (
    <div ref={scrollToReview} className="review">
      {modal && <Modal setModal={setModal} product={product} />}
      <span className="reviewLogo">Reviews({reviewCount})</span>
      <div className="reviewComment">
        <aside className="asideWidth">
          <button className="reviewBtn" onClick={openModal}>
            Write A Review
          </button>
          <div>Filter Reviews</div>
          <div className="inputArea">
            <HiOutlineSearch className="magnifyingGlass" />
            <input
              className="reviewInput"
              type="text"
              placeholder="Search Reviews"
              onChange={handleUserInput}
            />
          </div>
        </aside>

        <section className="sectionWidth">
          <div className="reviewPadding">
            {filteredReviews[0] &&
              filteredReviews.map((review, idx) => {
                return (
                  <EachReview
                    key={idx}
                    review={review}
                    deleteReviewUpdate={deleteReviewUpdate}
                    setDeleteReviewUpdate={setDeleteReviewUpdate}
                    product={product}
                  />
                );
              })}
            <ReviewButton
              updateOffset={updateOffset}
              reviews={reviews}
              reviewCount={reviewCount}
              limit={limit}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Review;
