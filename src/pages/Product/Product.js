import React, { useEffect, useState } from 'react';
import './Product.scss';
import ProductList from './ProductList';
import { AiOutlinePlus } from 'react-icons/ai';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [showSize, setShowSize] = useState(false);
  useEffect(() => {
    fetch('data/productData.json')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      });
  }, []);

  const onToggle = () => setShowSize(!showSize);

  const colorBtn = [
    {
      id: 1,
      btnColor: 'red',
      btnName: 'red',
    },
    {
      id: 2,
      btnColor: 'blue',
      btnName: 'blue',
    },
    {
      id: 3,
      btnColor: 'orange',
      btnName: 'orange',
    },
    {
      id: 4,
      btnColor: 'khaki',
      btnName: 'khaki',
    },
    {
      id: 5,
      btnColor: 'black',
      btnName: 'black',
    },
    {
      id: 6,
      btnColor: 'navy',
      btnName: 'navy',
    },
  ];

  return (
    <section className="luluProduct">
      <div className="productWrapper">
        <div className="productLeft">
          <div className="productLeftName">
            <h1>Men's Socks</h1>
          </div>
          <div className="filterBox">
            <div className="sizeBox">
              <div className="sizeTitle">
                <h2> Size </h2>
                <AiOutlinePlus className="plus" onClick={onToggle} />
              </div>

              {showSize ? (
                <div className="sizeBtnBox">
                  <button className="sizeButton">XS</button>
                  <button className="sizeButton">S</button>
                  <button className="sizeButton">M</button>
                  <button className="sizeButton">L</button>
                  <button className="sizeButton">XL</button>
                  <button className="sizeButton">XXL</button>
                </div>
              ) : null}
            </div>
            <div className="colorBox">
              <div className="colorTitle">
                <h2> Color </h2>
                <AiOutlinePlus className="plus" />
              </div>

              {colorBtn.map(btn => {
                const { id, btnColor, btnName } = btn;
                return (
                  <div key={id} className="colorOne">
                    <button className="colorBtnBorder">
                      <button
                        style={{
                          backgroundColor: btnColor,
                        }}
                        className="colorButton"
                      />
                    </button>
                    {btnName}
                  </div>
                );
              })}
            </div>
            <div className="activityBox">
              <div className="activityTitle">
                <h2> Activity </h2>
                <AiOutlinePlus className="plus" />
              </div>
              <div className="activityOne">
                <input type="checkbox" /> <span>Casual</span>
              </div>
              <div className="activityOne">
                <input type="checkbox" /> <span>Running</span>
              </div>
              <div className="activityOne">
                <input type="checkbox" /> <span>On The Move</span>
              </div>
              <div className="activityOne">
                <input type="checkbox" /> <span>WorkOut</span>
              </div>
              <div className="activityOne">
                <input type="checkbox" /> <span>Training</span>
              </div>
            </div>
          </div>
        </div>
        <div className="productRight">
          {products.map(product => {
            return <ProductList key={product.id} product={product} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Product;
