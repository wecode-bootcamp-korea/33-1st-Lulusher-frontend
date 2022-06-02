import React from 'react';
import WomanProductSlide from './components/WomanProductsSlide/WomanProductsSlide';
import ManProductSlide from './components/ManProductsSlide/ManProductsSlide';
import TopCarousel from './components/TopCarousel/TopCarousel';
import ShopSummer from './components/ShopSummer/ShopSummer';
import ShopMen from './components/ShopMen/ShopMen';
import './Main.scss';
import BestSellerProducts from './components/BestSellerProducts/BestSellerProducts';

const Main = () => {
  return (
    <div className="main">
      <TopCarousel />
      <WomanProductSlide />
      <ShopSummer />
      <ManProductSlide />
      <ShopMen />
      <BestSellerProducts />
    </div>
  );
};

export default Main;
