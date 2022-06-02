import React from 'react';
import './Item.scss';

const Item = ({ item, itemList, setItemList, onRemove }) => {
  const { image, price, cart_id, quantity, name, color, size } = item;

  const plusQuantity = () => {
    fetch(`http://10.58.3.71:8000/carts/${cart_id}`, {
      method: 'PATCH',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        quantity: quantity + 1,
      }),
    }).then(res => {
      if (res.ok) {
        fetch('http://10.58.3.71:8000/carts', {
          method: 'GET',
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        })
          .then(res => res.json())
          .then(data => {
            setItemList(data.results);
          });
      }
    });
  };

  const minusQuantity = () => {
    if (quantity === 1) {
      alert('YOU CANNOT CHOOSE LESS THAN ONE');
    } else {
      fetch(`http://10.58.3.71:8000/carts/${cart_id}`, {
        method: 'PATCH',
        headers: {
          Authorization: localStorage.getItem('token'),
        },
        body: JSON.stringify({
          quantity: quantity - 1,
        }),
      }).then(res => {
        if (res.ok) {
          fetch('http://10.58.3.71:8000/carts', {
            method: 'GET',
            headers: {
              Authorization: localStorage.getItem('token'),
            },
          })
            .then(res => res.json())
            .then(data => {
              setItemList(data.results);
            });
        }
      });
    }
  };

  const deleteItem = () => {
    fetch(`http://10.58.3.71:8000/carts/${cart_id}`, {
      method: 'DELETE',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
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
                  <div className="quantityInput">{quantity}</div>
                  <button onClick={plusQuantity}>+</button>
                </td>
                <td>$ {price * quantity}.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="productFooter">
          <p>Free Shipping + Free Returns</p>
          <div className="footerBtns">
            <button
              onClick={() => {
                onRemove(cart_id);
              }}
            >
              Save for Later
            </button>
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
