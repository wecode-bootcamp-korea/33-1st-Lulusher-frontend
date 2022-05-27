import React, { useState } from 'react';
import './EachReview.scss';

const EachReview = () => {
  return (
    <div className="EachReview">
      <div className="eachReviewMargin">
        <div>Nickname</div>
        <div>★★★</div>
        <h1>리뷰 제목</h1>
        <div>리뷰내용리뷰내용</div>
      </div>
    </div>
  );
};

export default EachReview;
