import React from 'react';
import './OrderSummary.scss';

const OrderSummary = ({ itemList }) => {
  const getTotalPrice = itemList => {
    let sum = 0;
    for (let i = 0; i < itemList.length; i++) {
      sum += itemList[0].total_price;
    }
    return sum;
  };

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {itemList[0] ? (
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
              <p>$ {getTotalPrice(itemList)}</p>
              <p>FREE</p>
              <p>Calculated at checkout</p>
              <p>USD $ {getTotalPrice(itemList)}</p>
            </div>
          </div>
          <button>CHECKOUT</button>
        </div>
      ) : (
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
              <p>$</p>
              <p>FREE</p>
              <p>Calculated at checkout</p>
              <p>USD $</p>
            </div>
          </div>
          <button>CHECKOUT</button>
        </div>
      )}
    </>
  );
};

export default OrderSummary;
