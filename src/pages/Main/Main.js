import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Main.scss';
import WomanProductSlide from './WomanProductsSlide';
import ManProductSlide from './ManProductsSlide';
import TopCarousel from './TopCarousel';

const Main = () => {
  return (
    <>
      <div className="Main">
        <Navbar />
        <TopCarousel />
        <div className="goToCategorySite">
          <div className="pushSite">
            <img
              src="https://images.lululemon.com/is/image/lululemon/na_may22_wk3_W_Shorts_1_3_Md_MediaAction_D_WorkoutShorts?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
              alt="push"
            />
            <p>Push.</p>
            <button type="button">SHOP WORKOUT SHORTS</button>
          </div>
        </div>
        <WomanProductSlide />
        <ManProductSlide />
      </div>
      <Footer />
    </>
  );
};

export default Main;
