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
  const [isEmpty, setEmpty] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/data/itemData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setItemList(data);
      });
  }, []);

  const onRemove = useCallback(
    id => {
      setItemList(itemList.filter(item => item.id !== id));
      if (itemList.length === 1) {
        setEmpty(!isEmpty);
      }
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
      {isEmpty ? (
        <EmptyBag goToMain={goToMain} />
      ) : (
        <div className="bagContainer">
          <div className="leftContainer">
            <h1>
              My Bag <span>({itemList.length} Items)</span>
            </h1>
            {itemList.map(item => {
              return <Item item={item} key={item.id} onRemove={onRemove} />;
            })}
          </div>
          <OrderSummary />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Bag;
