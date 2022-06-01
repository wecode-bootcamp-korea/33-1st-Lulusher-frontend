import React, { useState } from 'react';
import './Item.scss';

const Item = ({ item, onRemove }) => {
  const { image, price, cart_id, quantity, name, color, size } = item;
  const [itemQuantity, setQuantity] = useState(parseInt(quantity));

  const plusQuantity = () => {
    setQuantity(itemQuantity + 1);

    fetch(`http://10.58.0.59:8000/carts/${cart_id}`, {
      method: 'PATCH',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        quantity: itemQuantity + 1,
      }),
    }).then(res => {
      if (res.ok) {
        alert('Changed Quantity');
      }
    });
  };

  const minusQuantity = () => {
    if (itemQuantity === 1) {
      alert('YOU CANNOT CHOOSE LESS THAN ONE');
    } else {
      setQuantity(itemQuantity - 1);

      fetch(`http://10.58.0.59:8000/carts/${cart_id}`, {
        method: 'PATCH',
        headers: {
          Authorization: localStorage.getItem('token'),
        },
        body: JSON.stringify({
          quantity: itemQuantity - 1,
        }),
      }).then(res => {
        if (res.ok) {
          alert('Changed Quantity');
        }
      });
    }
  };

  const deleteItem = () => {
    fetch(`http://10.58.0.59:8000/carts/${cart_id}`, {
      method: 'DELETE',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    }).then(res => {
      if (res.ok) {
        alert('ITEM DELETED');
      }
    });
  };
  return (
    <div className="productItem">
      <img src={image[0]} alt="product thumbnail" />
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
                <td>$ {price}.00</td>
                <td>
                  <button onClick={minusQuantity}>-</button>
                  <div className="quantityInput">{itemQuantity}</div>
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
                onRemove(cart_id);
                deleteItem();
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
