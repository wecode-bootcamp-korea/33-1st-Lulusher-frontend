import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Item from '../../components/Bag/Item';
import Footer from '../../components/Footer/Footer';
import OrderSummary from '../../components/Bag/OrderSummary';
import './Bag.scss';
import EmptyBag from './EmptyBag/EmptyBag';

const Bag = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/');
  };

  const [itemList, setItemList] = useState([]);

  useEffect(() => {
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
  }, []);

  const onRemove = useCallback(
    id => {
      setItemList(itemList.filter(item => item.cart_id !== id));
    },
    [itemList]
  );

  return (
    <div className="bag">
      <nav>
        <button type="submit" onClick={goToMain}>
          <img src="/bagImages/lemon.png" alt="logo" />
        </button>
      </nav>
      {itemList.length !== 0 ? (
        <div className="bagContainer">
          <div className="leftContainer">
            <h1>
              My Bag <span>({itemList.length} Items)</span>
            </h1>
            {itemList &&
              itemList?.map(item => {
                return (
                  <Item
                    itemList={itemList}
                    setItemList={setItemList}
                    item={item}
                    key={item.cart_id}
                    onRemove={onRemove}
                  />
                );
              })}
          </div>
          <OrderSummary itemList={itemList} />
        </div>
      ) : (
        <EmptyBag goToMain={goToMain} />
      )}

      <Footer />
    </div>
  );
};

export default Bag;
