import React, { useState, useEffect } from 'react';
import Detail from './Detail';
import Review from './Review';
import './Detail.scss';

const ProductDetail = () => {
  // const [product,setProduct] = useState([])
  // useEffect(()=>{
  //   fetch('url')
  //   .then(res => res.json())
  //   .then(data =>{
  //     setProduct(data)
  //   })
  // },[])
  return (
    <div className="ProductDetail">
      <Detail />
      <Review />
    </div>
  );
};

export default ProductDetail;
