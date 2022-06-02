import React, { useEffect, useState, useRef } from 'react';
import ManSlideCard from './ManSlideCard';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './ManProductsSlide.scss';

const ManProductSlide = () => {
  const [sources, setSources] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    fetch('data/manProductCarousel.json', {
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

  const TOTAL_SLIDES = 3;

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
    setCurrentSlide(index);
  };

  return (
    <div className="manProductSlide">
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
      <div className="containerDots">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            onClick={() => moveDot(index)}
            className={currentSlide === index ? 'dot active' : 'dot'}
          />
        ))}
      </div>
      <Link to="/products?menu=Men">
        <button type="button" className="goToShopNewProduct">
          SHOP MEN'S SUMMER CLOTHES
        </button>
      </Link>
    </div>
  );
};

export default ManProductSlide;
