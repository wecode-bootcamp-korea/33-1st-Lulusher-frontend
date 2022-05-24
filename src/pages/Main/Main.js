import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Main.scss';

const Main = () => {
  return (
    <div className="Main">
      <Navbar />
      <div className="firstMain">
        <img
          className="firstPosition"
          src="https://images.lululemon.com/is/image/lululemon/na_may22_wk3_W_Shorts_3_1_D?wid=2644&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
          alt="Yoga Class"
        />
        <div className="Writing">
          <div className="firstWriting">Take your best short.</div>
          <div className="secondWriting">
            <p>
              Lightweight, lots of lengths, bold prints and new neon hues—our
              shorts
            </p>
            <p>were made for how you want your summer to go.</p>
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
    </div>
  );
};

export default Main;
