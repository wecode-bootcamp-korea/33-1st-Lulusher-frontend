import react, { useState } from 'react';
import './EmptyBag.scss';

const EmptyBag = ({
  goToMain,
  showEmptyPage,
  setEmptyPage,
  showContainer,
  setContainer,
  handleEmptyPage,
}) => {
  return (
    <div className="emptyBag" style={showEmptyPage}>
      <h1>Give your bag some love!</h1>
      <button type="submit" onClick={goToMain}>
        SHOP WHAT'S NEW
      </button>
    </div>
  );
};

export default EmptyBag;
