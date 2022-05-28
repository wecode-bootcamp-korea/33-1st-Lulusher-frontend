import React, { useEffect, useState } from 'react';
import SlideCard from './SlideCard';
import './FirstSlide.scss';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const FirstSlide = () => {
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

  return (
    <div className="FirstSlide">
      <button type="button" className="carouselArrowLeft">
        <FaArrowLeft />
      </button>
      {sources.map((source, index) => (
        <SlideCard key={index} source={source} />
      ))}
      <button type="button" className="carouselArrowRight">
        <FaArrowRight />
      </button>
    </div>
  );
};

export default FirstSlide;
