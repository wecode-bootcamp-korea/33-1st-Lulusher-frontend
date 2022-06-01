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
  product,
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
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          console.log('fail to option post');
        }
      })
      .then(res => {
        navigate('/bag');
        setColor('');
        setSize('');
      })
      .catch(error => console.log(error));
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
