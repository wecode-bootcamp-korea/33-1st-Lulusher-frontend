import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import './ProductModal.scss';

const ProductModal = ({ setProductModal }) => {
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
            <p className="productName">상품명은 바지입니다 바지요</p>
            <p>color: Gray</p>
            <p>Size: L</p>
            <p>Price: $250 USD</p>
          </section>

          <section className="bagBtnSection">
            <div className="amountPrice">
              <div>Amount</div>
              <div>2</div>
            </div>
            <div className="amountPrice">
              <div>Total</div>
              <div>
                $<span>500</span> USD
              </div>
            </div>
            <button>VIEW BAG & CHECKOUT</button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
