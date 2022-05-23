import React, { useEffect, useState } from 'react';
import './Product.scss';

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('data/productData.json')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      });
  }, []);

  return (
    <section className="luluProduct">
      <div className="productWrapper">
        <div className="productLeft">
          <div className="productLeftName">
            <h1>Men's Socks</h1>
          </div>
          <div>
            <div className="filterBox">
              <h2> Size </h2>
              <button className="sizeButton">XS</button>
              <button className="sizeButton">S</button>
              <button className="sizeButton">M</button>
              <button className="sizeButton">L</button>
              <button className="sizeButton">XL</button>
              <button className="sizeButton">XXL</button>
            </div>
            <div className="filterBox">
              <h2> Color </h2>
            </div>
            <div className="filterBox">
              <h2> Activity </h2>
              <div className="activityOne">
                <input type="checkbox" /> <span>Casual</span>
              </div>
              <div className="activityOne">
                <input type="checkbox" /> <span>Casual</span>
              </div>
              <div className="activityOne">
                <input type="checkbox" /> <span>Casual</span>
              </div>
              <div className="activityOne">
                <input type="checkbox" /> <span>Casual</span>
              </div>
              <div className="activityOne">
                <input type="checkbox" /> <span>Casual</span>
              </div>
            </div>
          </div>
        </div>
        <div className="productRight">
          {products.map(product => {
            const { id, src, name, price } = product;
            return (
              <div key={id}>
                <img src={src} className="productImg" alt="product Image" />
                <div className="productName">
                  <span className="productId">{name}</span>
                  <p>{price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Product;
