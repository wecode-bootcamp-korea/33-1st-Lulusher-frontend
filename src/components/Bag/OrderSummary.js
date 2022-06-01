import React, { useState } from 'react';
import './OrderSummary.scss';

const OrderSummary = ({ itemList }) => {
  const getTotalPrice = itemList => {
    let sum = 0;
    for (let i = 0; i < itemList.length; i++) {
      sum += parseInt(itemList[i].price) * parseInt(itemList[i].quantity);
    }
    return sum;
  };
  getTotalPrice(itemList);
  const [totalPrice] = useState(getTotalPrice(itemList));
  return (
    <div className="rightContainer">
      <h1>Order Summary</h1>
      <div className="summaryWrapper">
        <div className="summaryTitle">
          <p>Subtotal</p>
          <p>Shipping</p>
          <p>Tax</p>
          <p>Estimated Total</p>
        </div>
        <div className="summaryValue">
          <p>$ {totalPrice}.00</p>
          <p>FREE</p>
          <p>Calculated at checkout</p>
          <p>USD $</p>
        </div>
      </div>
      <button>CHECKOUT</button>
    </div>
  );
};

export default OrderSummary;
