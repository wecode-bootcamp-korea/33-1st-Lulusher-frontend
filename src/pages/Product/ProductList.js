import React, { useState } from 'react';

const ProductList = ({ product }) => {
  const { name, original_price } = product;

  const [color, setColor] = useState('');
  const [img, setImg] = useState(
    product.product_options[0]?.product_option_images
  );

  const clickColor = e => {
    let clickedColor = e.target.style.backgroundColor;
    setColor(clickedColor);
  };

  const colorArr = [];
  for (let i = 0; i < product.product_options?.length; i++) {
    if (!colorArr.includes(product.product_options[i].color)) {
      colorArr.push(product.product_options[i].color);
    }
  }

  const changeClothesColor = () => {
    product.product_options.forEach(option => {
      if (color === option.color) {
        setImg(option.product_option_images[0]);
      }
    });
  };

  return (
    <div className="productOne">
      <img src={img} className="productImg" alt="product" />
      <div className="productColor">
        {colorArr.map((el, index) => {
          return (
            <button
              key={index}
              style={{
                backgroundColor: el,
              }}
              onMouseOver={e => {
                clickColor(e);
                changeClothesColor(e);
              }}
              className="colorButton"
            />
          );
        })}
      </div>

      <div className="productName">
        <span className="productId">{name}</span>
        <p>${original_price}</p>
      </div>
    </div>
  );
};

export default ProductList;
