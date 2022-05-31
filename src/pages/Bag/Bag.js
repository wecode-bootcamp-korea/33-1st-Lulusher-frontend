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
    },
    [itemList]
  );

  const [showEmptyPage, setEmptyPage] = useState({ display: 'none' });
  const [showContainer, setContainer] = useState({ display: 'flex' });

  return (
    <div className="bag">
      <nav>
        <button type="submit" onClick={goToMain}>
          <img src="/bagImages/lemon.png" alt="logo" />
        </button>
      </nav>
      <EmptyBag
        goToMain={goToMain}
        showEmptyPage={showEmptyPage}
        setEmptyPage={setEmptyPage}
        showContainer={showContainer}
        setContainer={setContainer}
      />
      <div className="bagContainer" style={showContainer}>
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
      <Footer />
    </div>
  );
};

export default Bag;
