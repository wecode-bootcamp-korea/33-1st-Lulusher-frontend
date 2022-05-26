import React from 'react';
import './Item.scss';

const Item = ({ alt, src, name, color, size, price }) => {
  return (
    <div className="productItem">
      <img alt={alt} src={src} />
      <div className="productWrapper">
        <div className="productDescription">
          <h2>{name}</h2>
          <p>{color}</p>
          <p>{size}</p>
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
                <td>$ {price}</td>
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
