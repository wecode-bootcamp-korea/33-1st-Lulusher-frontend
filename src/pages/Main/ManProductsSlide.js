import React, { useEffect, useState, useRef } from 'react';
import ManSlideCard from './ManSlideCard';
import './ManProductsSlide.scss';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import ManSlideIndicator from './ManSlideIndicator';

const ManProductSlide = () => {
  const [sources, setSources] = useState([]);

  useEffect(() => {
    fetch('data/manProductCarousel.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setSources(data);
      });
  }, []);

  const TOTAL_SLIDES = 3;

  const [currentSlide, setCurrentSlide] = useState(0);
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

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <div className="ManProductSlide">
      <button type="button" className="carouselArrowLeft" onClick={prevSlide}>
        <FaArrowLeft />
      </button>
      <div className="forRef" ref={slideRef}>
        {sources.map((source, index) => (
          <ManSlideCard key={index} source={source} />
        ))}
      </div>
      <button type="button" className="carouselArrowRight" onClick={nextSlide}>
        <FaArrowRight />
      </button>
      <ManSlideIndicator setCurrentSlide={setCurrentSlide} />
      <button type="button" className="goToShopNewProduct">
        SHOP MEN'S SUMMER CLOTHES
      </button>
    </div>
  );
};

export default ManProductSlide;
