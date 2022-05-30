import React, { useState, useEffect, useRef } from 'react';
import './TopCarousel.scss';

const TopCarousel = () => {
  const [sources, setSources] = useState([]);

  useEffect(() => {
    fetch('data/topCarousel.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setSources(data);
      });
  }, []);

  const TOTAL_SLIDES = 1;

  const [currentSlide, setCurrentSlide] = useState(1);

  const slideRef = useRef(null);

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const moveDot = index => {
    setCurrentSlide(index - 1);
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <div className="topCarousel">
      <div className="cardWrapper" ref={slideRef}>
        {sources.map(({ id, src, alt, leftside, rightside }) => (
          <div className="topCarouselCard" key={id}>
            <img className="firstPosition" src={src} alt={alt} />
            <div className="Writing">
              <div className="firstWriting">{leftside}</div>
              <div className="secondWriting">
                <p>{rightside}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button type="button" className="prevButton" onClick={prevSlide} />
      <button type="button" className="nextButton" onClick={nextSlide} />

      <div className="container-dots">
        {Array.from({ length: 2 }).map((item, index) => (
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
