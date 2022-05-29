import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import './ProductModal.scss';

const ProductModal = ({
  setProductModal,
  color,
  setColor,
  size,
  setSize,
  amount,
  productTitle,
  price,
}) => {
  const navigate = useNavigate();
  const addToCart = () => {
    let token = localStorage.getItem('token') || '';
    fetch('url주소', {
      headers: {
        Authorization: token,
      },
      method: 'POST',
      body: JSON.stringify({
        color: color,
        size: size,
        amount: amount,
      }),
    }).then(res => {
      if (res.ok) {
        navigate('/bag');
        setColor('');
        setSize('');
      }
    });
  };
  return (
    <div className="productModal">
      <div className="productModalContainer">
        <div className="productModalNav">
          <div className="nicePick">Nice Pick!</div>
          <AiOutlineClose
            className="getOut"
            onClick={() => {
              setProductModal(false);
            }}
          />
        </div>

        <div className="sectionContainer">
          <section className="selectedProductSection">
            <p className="productName">{productTitle}</p>
            <p>color: {color}</p>
            <p>Size: {size}</p>
            <p>Price: ${price} USD</p>
          </section>

          <section className="bagBtnSection">
            <div className="amountArea">
              <div>Amount</div>
              <div>{amount}</div>
            </div>
            <div className="totalPriceArea">
              <div>Total</div>
              <div>
                $<span>{price * amount}</span> USD
              </div>
            </div>
            <button className="productModalBtn" onClick={addToCart}>
              VIEW BAG & CHECKOUT
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
