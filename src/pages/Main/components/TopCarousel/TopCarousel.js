import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { TOPCAROUSEL_LIST } from './TopCarouselData';
import './TopCarousel.scss';

const TopCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrentSlide(prevIndex => (prevIndex !== 1 ? prevIndex + 1 : 0)),
      5000
    );
    return () => {
      clearInterval(timer);
    };
  }, []);

  const slideRef = useRef(null);

  const moveDot = index => {
    setCurrentSlide(index - 1);
  };

  return (
    <div className="topCarousel">
      <div className="cardWrapper" ref={slideRef}>
        {TOPCAROUSEL_LIST.map(
          ({ id, src, alt, leftside, rightside, buttonPhrases }) => (
            <div className="topCarouselCard" key={id}>
              <img className="firstPosition" src={src} alt={alt} />
              <button type="button" className="cardButtonPhrases">
                {buttonPhrases}
              </button>
              <div className="writing">
                <div className="firstWriting">{leftside}</div>
                <div className="secondWriting">
                  <p>{rightside}</p>
                </div>
              </div>
            </div>
          )
        )}
        <Link to="/products?is_new=1">
          <button type="button" className="firstCardButtonPhrases">
            SHOP WHAT'S NEW
          </button>
        </Link>
        <Link to="/products?menu=men">
          <button type="button" className="secondCardButtonPhrases">
            SHOP MEN'S
          </button>
        </Link>
      </div>
      <div className="container-dots">
        {Array.from({ length: 2 }).map((_, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={currentSlide === index ? 'dot active' : 'dot'}
          />
        ))}
      </div>
    </div>
  );
};

export default TopCarousel;
