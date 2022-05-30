import React, { useState, useEffect, useRef } from 'react';
import './TopCarousel.scss';

const TopCarousel = () => {
  const [sources, setSources] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    fetch('data/topCarousel.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setSources(data);
      });
  }, []);

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrentSlide(prevIndex => (prevIndex !== 1 ? prevIndex + 1 : 0)),
      3000
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
        {sources.map(({ id, src, alt, leftside, rightside }) => (
          <div className="topCarouselCard" key={id}>
            <img className="firstPosition" src={src} alt={alt} />
            <div className="writing">
              <div className="firstWriting">{leftside}</div>
              <div className="secondWriting">
                <p>{rightside}</p>
              </div>
            </div>
          </div>
        ))}
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
