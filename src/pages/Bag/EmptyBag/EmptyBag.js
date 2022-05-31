import react from 'react';
import './EmptyBag.scss';

const EmptyBag = ({ goToMain }) => {
  return (
    <div className="emptyBag">
      <h1>Give your bag some love!</h1>
      <button type="submit" onClick={goToMain}>
        SHOP WHAT'S NEW
      </button>
    </div>
  );
};

export default EmptyBag;
