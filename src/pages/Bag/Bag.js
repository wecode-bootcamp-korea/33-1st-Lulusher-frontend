import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Bag.scss';

const Bag = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/');
  };

  return (
    <div className="bag">
      <nav>
        <button type="submit" onClick={goToMain}>
          <img src="/bagImages/lemon.png" />
        </button>
      </nav>
    </div>
  );
};

export default Bag;
