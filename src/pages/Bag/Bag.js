import React from 'react';
import { useNavigate } from 'react-router-dom';
import Item from '../../components/Bag/Item';
import './Bag.scss';

const Bag = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/');
  };

  return (
    <div className="bag">
      <nav>
        <button type="submit" onClick={goToMain}>
          <img src="/bagImages/lemon.png" alt="logo" />
        </button>
      </nav>
      <div className="bagContainer">
        <div className="leftContainer">
          <h1>
            My Bag <span>(N Item)</span>
          </h1>
          <div className="productItem">
            <img
              alt="product"
              src="https://images.lululemon.com/is/image/lululemon/LM3CYES_0001_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
            />
            <div className="productWrapper">
              <div className="productDescription">
                <h2>Product Name</h2>
                <p>Product Color</p>
                <p>Product Size</p>
              </div>
              <div className="productOptions">
                <table>
                  <thead>
                    <tr>
                      <th>Item Price</th>
                      <th>Quantity</th>
                      <th>Total Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>$price</td>
                      <td>
                        <select>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </td>
                      <td>$price</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="productFooter">
                <p>Free Shipping + Free Returns</p>
                <div className="footerBtns">
                  <button>Save for Later</button>
                  <button>Remove</button>
                </div>
              </div>
            </div>
          </div>
          <Item />
        </div>
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
              <p>$price</p>
              <p>FREE</p>
              <p>Calculated at checkout</p>
              <p>USD $price</p>
            </div>
          </div>
          <button>CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Bag;
