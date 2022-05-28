import React, { useState, useEffect } from 'react';
import { AiOutlineStar, AiOutlineClose } from 'react-icons/ai';
import './Modal.scss';

const Modal = ({ setModal }) => {
  const ARRAY = [0, 1, 2, 3, 4];
  const [star, setStar] = useState([false, false, false, false, false]);
  const [rating, setRating] = useState('');
  const [nickName, setNickName] = useState('');
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewText, setReviewText] = useState('');

  const isSubmitBtnValid =
    reviewTitle.length > 0 && reviewText.length > 0 && star.includes(true);

  const handleReviewTitle = e => {
    setReviewTitle(e.target.value);
  };

  const handleReview = e => {
    setReviewText(e.target.value);
  };

  const handleStar = e => {
    let id = parseInt(e.target.id);
    let clickedStar = [...star];
    clickedStar.fill(true, 0, id + 1);
    clickedStar.fill(false, id + 1, 5);
    setStar(clickedStar);
    setRating(id + 1);
  };

  const postReview = () => {
    let token = localStorage.getItem('token') || '';
    fetch('url주소', {
      headers: {
        Authorization: token,
      },
      method: 'POST',
      body: JSON.stringify({
        // productID: id,
        // productTitle: productTitle,
        // rate: rating,
        reviewTitle: reviewTitle,
        reviewText: reviewText,
      }),
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(res => {
        setStar([false, false, false, false, false]);
        setRating(0);
        setModal(false);
        console.log('렌더링');
      });
  };

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow: hidden;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <div className="modal">
      <div className="modalContainer">
        <section className="modalPicture">
          <img
            src="images/product/short1.jpg"
            className="modalPictureImg"
            alt="review product"
          />
        </section>
        <section className="modalReview">
          <div className="modalTitle">
            <p>title</p>
          </div>

          <div>닉네임</div>

          <div className="reviewContainer">
            <div className="reviewRating">
              <p className="reviewRatingText"> Your overall rating</p>
              {ARRAY.map((el, idx) => {
                return (
                  <AiOutlineStar
                    className={'star ' + (star[el] ? 'fillStar' : '')}
                    key={idx}
                    id={el}
                    onClick={e => {
                      handleStar(e);
                    }}
                  />
                );
              })}
            </div>
            <div className="reviewTitle">
              <p className="reviewTitleText">Review Title</p>
              <input
                onChange={handleReviewTitle}
                className="reviewTitleInput"
                type="text"
                placeholder='E.g. "Super comfortable! "'
              />
            </div>
            <div className="reviewDetail">
              <p className="reviewDetailText">Review</p>
              <textarea
                onChange={handleReview}
                className="reviewDetailInput"
                placeholder="Tell others about your gear. What did you love about it? How is the fit? What could use improvement?"
              />
            </div>
            <button
              onClick={postReview}
              className={'next ' + (isSubmitBtnValid ? 'btnActive' : '')}
              disabled={!isSubmitBtnValid}
            >
              NEXT STEP
            </button>
          </div>
        </section>
        <AiOutlineClose
          className="getOut"
          onClick={() => {
            setModal(false);
          }}
        />
      </div>
    </div>
  );
};

export default Modal;
