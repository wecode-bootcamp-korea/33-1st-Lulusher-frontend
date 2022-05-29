import React, { useState } from 'react';
import './WomanSlideIndicator.scss';

const WomanSlideIndicator = ({ setCurrentSlide }) => {
  const [isActive, setActive] = useState('false');

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <ol className="WomanSlideIndicator">
      <li
        className={isActive ? 'indicatorActive' : 'indicatorNull'}
        onClick={() => {
          setCurrentSlide(0);
          toggleClass();
        }}
      />
      <li
        className={isActive ? 'indicatorActive' : 'indicatorNull'}
        onClick={() => {
          setCurrentSlide(1);
        }}
      />
      <li
        className={isActive ? 'indicatorActive' : 'indicatorNull'}
        onClick={() => {
          setCurrentSlide(2);
        }}
      />
      <li
        className={isActive ? 'indicatorActive' : 'indicatorNull'}
        onClick={() => {
          setCurrentSlide(3);
        }}
      />
    </ol>
  );
};

export default WomanSlideIndicator;
