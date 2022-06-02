import React from 'react';
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
  setAmount,
  product,
}) => {
  const navigate = useNavigate();
  const addToCart = () => {
    let token = localStorage.getItem('Access_token') || '';
    fetch('http://10.58.3.71:8000/carts', {
      headers: {
        Authorization: token,
      },
      method: 'POST',
      body: JSON.stringify({
        color: colorID[color],
        size: sizeID[size],
        quantity: amount,
        product_id: product.id,
      }),
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(res => {
        if (res) {
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
              setColor('');
              setSize('');
              setAmount('');
            }}
          />
        </div>

        <div className="sectionContainer">
          <section className="selectedProductSection">
            <p className="productName">{product.name}</p>
            <p>color: {color}</p>
            <p>Size: {size}</p>
            <p>Price: ${product.original_price} USD</p>
          </section>

          <section className="bagBtnSection">
            <div className="amountArea">
              <div>Amount</div>
              <div>{amount}</div>
            </div>
            <div className="totalPriceArea">
              <div>Total</div>
              <div>
                $<span>{product.original_price * amount}</span> USD
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

const sizeID = {
  XS: 1,
  S: 2,
  M: 3,
  L: 4,
  XL: 5,
};

const colorID = {
  black: 1,
  white: 2,
  orange: 6,
  pink: 7,
  lemon: 0,
};
