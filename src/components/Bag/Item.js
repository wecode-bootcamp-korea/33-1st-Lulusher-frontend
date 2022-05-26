import React from 'react';

const Item = () => {
  return (
    <div className="productItem">
      <img src="https://images.lululemon.com/is/image/lululemon/LW7AWBT_045610_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" />
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
  );
};

export default Item;
