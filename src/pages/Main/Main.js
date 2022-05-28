import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Main.scss';
import FirstSlide from './FirstSlide';

const Main = () => {
  return (
    <>
      <div className="Main">
        <Navbar />
        <div className="firstMain">
          <img
            className="firstPosition"
            src="https://images.lululemon.com/is/image/lululemon/na_may22_wk4_W_Summer_3_1_D_HP?wid=2420&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
            alt="woman summer"
          />
          <div className="Writing">
            <div className="firstWriting">Turn up summer.</div>
            <div className="secondWriting">
              <p>Mix light and breathable. Match every move under the sun.</p>
            </div>
          </div>
        </div>
        <div className="firstMain">
          <img
            className="firstPosition"
            src="https://images.lululemon.com/is/image/lululemon/na_may22_wk4_M_Swim_3_1_D_Static?wid=2420&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
            alt="man summer"
          />
          <div className="Writing">
            <div className="firstWriting">Freestyle your summer.</div>
            <div className="secondWriting">
              <p>
                Beaches, parks, or pools. In breathable swim shorts, just plan
                on having fun.
              </p>
            </div>
          </div>
        </div>
        <div className="goToCategorySite">
          <div className="pushSite">
            <img
              src="https://images.lululemon.com/is/image/lululemon/na_may22_wk3_W_Shorts_1_3_Md_MediaAction_D_WorkoutShorts?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
              alt="push"
            />
            <p>Push.</p>
            <button type="button">SHOP WORKOUT SHORTS</button>
          </div>
          <div className="poseSite">
            <img
              src="https://images.lululemon.com/is/image/lululemon/na_may22_wk3_W_Shorts_1_3_Md_MediaAction_D_YogaShorts?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
              alt="pose"
            />
            <p>Pose.</p>
            <button type="button">SHOP WORKOUT SHORTS</button>
          </div>
          <div className="paceSite">
            <img
              src="https://images.lululemon.com/is/image/lululemon/na_may22_wk3_W_Shorts_1_3_Md_MediaAction_D_RunningShorts?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
              alt="Pace"
            />
            <p>Pace.</p>
            <button type="button">SHOP WORKOUT SHORTS</button>
          </div>
        </div>
        <FirstSlide />
      </div>
      <Footer />
    </>
  );
};

export default Main;
