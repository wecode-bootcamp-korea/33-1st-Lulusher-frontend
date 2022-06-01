import React, { useState, useEffect, useRef } from 'react';
import Detail from './Detail';
import Review from './Review';
import Footer from '../../../components/Footer/Footer';
import './Detail.scss';

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  // const params = useParams();

  useEffect(() => {
    //fetch(`http://(아이피주소)/products/ProductDetail/${params.id}`)
    // fetch('/data/productDetail.json')
    fetch('http://10.58.0.59:8000/products/1')
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          console.log('fail to productDetail fetch');
        }
      })
      .then(data => {
        console.log(data);
        setProduct(data.results[0]);
      }) //응답메시지 받아서 if문으로 코드 감싸기
      .catch(error => console.log(error));
    console.log(product);
  }, []);
  console.log(product);

  const scrollToReview = useRef('');

  return (
    <div className="productDetail">
      {product.id && (
        <Detail scrollToReview={scrollToReview} product={product} />
      )}

      {product.id && (
        <Review scrollToReview={scrollToReview} product={product} />
      )}
      <Footer />
    </div>
  );
};

export default ProductDetail;
