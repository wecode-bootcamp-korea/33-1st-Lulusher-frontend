import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Detail from '././Detail/Detail';
import Review from '././Review/Review';

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const params = useParams();

  useEffect(() => {
    //fetch(`http://(아이피주소)/products/ProductDetail/${params.id}`)
    fetch(`http://10.58.3.71:8000/products/${params.id}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(data => {
        setProduct(data.results[0]);
      });
  }, [params.id]);

  const scrollToReview = useRef('');

  return (
    <div className="productDetail">
      {product.id && (
        <Detail scrollToReview={scrollToReview} product={product} />
      )}

      {product.id && (
        <Review scrollToReview={scrollToReview} product={product} />
      )}
    </div>
  );
};

export default ProductDetail;
