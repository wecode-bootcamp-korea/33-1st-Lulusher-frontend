import React, { useState, useEffect, useRef } from 'react';
import Detail from './Detail';
import Review from './Review';
import Footer from '../../../components/Footer/Footer';

import './Detail.scss';

const ProductDetail = () => {
  // const [product, setProduct] = useState([]);
  // useEffect(() => {
  //   fetch('/data/productDetail.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       setProduct(data);
  //     });
  // }, []);
  const scrollToReview = useRef('');

  return (
    <div className="ProductDetail">
      <Detail scrollToReview={scrollToReview} />
      <Review scrollToReview={scrollToReview} />
      <Footer />
    </div>
  );
};

export default ProductDetail;
