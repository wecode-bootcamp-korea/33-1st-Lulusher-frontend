import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="firstMain">
        <img
          className="firstPosition"
          src="https://images.lululemon.com/is/image/lululemon/na_may22_wk3_W_Shorts_3_1_D?wid=2644&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
          alt="Yoga Class"
        />
      </div>
    </div>
  );
};

export default Main;
