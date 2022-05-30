import React, { useEffect, useState, useRef } from 'react';
import WomanSlideCard from './WomanSlideCard';
import './WomanProductsSlide.scss';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import WomanSlideIndicator from './WomanSlideIndicator';

const WomanProductsSlide = () => {
  const [sources, setSources] = useState([]);

  useEffect(() => {
    fetch('data/womanProductCarousel.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setSources(data);
      });
  }, []);

  const TOTAL_SLIDES = 3;

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
    if (currentSlide === 1) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const moveDot = index => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <div className="WomanProductsSlide">
      <button type="button" className="carouselArrowLeft" onClick={prevSlide}>
        <FaArrowLeft />
      </button>
      <div className="forRef" ref={slideRef}>
        {sources.map((source, index) => (
          <WomanSlideCard key={index} source={source} />
        ))}
      </div>
      <button type="button" className="carouselArrowRight" onClick={nextSlide}>
        <FaArrowRight />
      </button>

      <div className="container-dots">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            onClick={() => moveDot(index)}
            className={currentSlide === index ? 'dot active' : 'dot'}
          />
        ))}
      </div>
      <button type="button" className="goToShopNewProduct">
        SHOP WHAT'S NEW
      </button>
    </div>
  );
};

export default WomanProductsSlide;
