import React, { useState } from 'react';
import './Item.scss';

const Item = ({ item, onRemove }) => {
  const { alt, src, name, color, size, price, id } = item;
  const [quantity, setQuantity] = useState('1');

  const handleSelectedQuantity = e => {
    setQuantity(e.target.value);
  };

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
                  <select value={quantity} onChange={handleSelectedQuantity}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </td>
                <td>$ {price * quantity}.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="productFooter">
          <p>Free Shipping + Free Returns</p>
          <div className="footerBtns">
            <button>Save for Later</button>
            <button
              onClick={() => {
                onRemove(id);
              }}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Item;
