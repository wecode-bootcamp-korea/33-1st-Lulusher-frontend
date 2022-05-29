import React, { useState } from 'react';
import './ManSlideIndicator.scss';

const ManSlideIndicator = ({ setCurrentSlide }) => {
  const [isActive, setActive] = useState('false');

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <ol className="ManSlideIndicator">
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

export default ManSlideIndicator;
