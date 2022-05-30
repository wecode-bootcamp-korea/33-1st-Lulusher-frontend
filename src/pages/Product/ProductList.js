import React, { useState } from 'react';

const ProductList = ({ product, sort }) => {
  const { src, src2, name, basic_price } = product;
  const [imgHover, setImgHover] = useState(false);

  return (
    <div className="productOne">
      <img
        src={imgHover ? src2 : src}
        className="productImg"
        alt="product"
        onMouseOver={() => setImgHover(true)}
        onMouseOut={() => setImgHover(false)}
      />
      <div className="productColor">
        {colordetailBtn.map(({ id, btnColor }) => {
          return (
            <button
              key={id}
              style={{
                backgroundColor: btnColor,
              }}
              className="colorButton"
            />
          );
        })}
      </div>

      <div className="productName">
        <span className="productId">{name}</span>
        <p>${basic_price}</p>
      </div>
    </div>
  );
};

export default ProductList;

const colordetailBtn = [
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
