import React, { useState } from 'react';
import './Item.scss';

const Item = ({ item, onRemove }) => {
  const { alt, src, name, color, size, price, id, quantity } = item;
  const [itemQuantity, setQuantity] = useState(parseInt(quantity));

  const handleSelectedQuantity = e => {
    setQuantity(e.target.value);
  };

  const plusQuantity = () => {
    setQuantity(parseInt(`${itemQuantity + 1}`));
  };

  const minusQuantity = () => {
    if (itemQuantity === 1) {
      alert('YOU CANNOT CHOOSE LESS THAN ONE');
    } else {
      setQuantity(parseInt(`${itemQuantity - 1}`));
    }
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
                  <button onClick={minusQuantity}>-</button>
                  <input
                    type="text"
                    value={itemQuantity}
                    onChange={handleSelectedQuantity}
                  />
                  <button onClick={plusQuantity}>+</button>
                </td>
                <td>$ {price * itemQuantity}.00</td>
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
