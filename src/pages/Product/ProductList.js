import React, { useState } from 'react';

const ProductList = ({ product }) => {
  const { id, src, src2, name, price, color } = product;
  const [imgHover, setImgHover] = useState(false);
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
    <div className="productOne" productColor={color} key={id}>
      <img
        src={imgHover ? src : src2}
        className="productImg"
        alt="product"
        onMouseOver={() => setImgHover(true)}
        onMouseOut={() => setImgHover(false)}
      />
      <div className="productColor">
        {colorBtn.map(btn => {
          const { id, btnColor } = btn;
          return (
            <button key={id} className="colorBtnBorder">
              <button
                style={{
                  backgroundColor: btnColor,
                }}
                className="colorButton"
              />
            </button>
          );
        })}
      </div>

      <div className="productName">
        <span className="productId">{name}</span>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default ProductList;
