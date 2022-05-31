import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import WomanProductSlide from './components/WomanProductsSlide/WomanProductsSlide';
import ManProductSlide from './components/ManProductsSlide/ManProductsSlide';
import TopCarousel from './components/TopCarousel/TopCarousel';
import ShopSummer from './components/ShopSummer/ShopSummer';
import ShopMen from './components/ShopMen/ShopMen';
import './Main.scss';
import BestSellerProducts from './components/BestSellerProducts/BestSellerProducts';

const Main = () => {
  return (
    <>
      <div className="main">
        <Navbar />
        <TopCarousel />
        <WomanProductSlide />
        <ShopSummer />
        <ManProductSlide />
        <ShopMen />
        <BestSellerProducts />
      </div>
      <Footer />
    </>
  );
};

export default Main;
