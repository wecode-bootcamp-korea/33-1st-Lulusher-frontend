import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Bag from './pages/Bag/Bag';
import Main from './pages/Main/Main';
import Product from './pages/Product/Product';
import ProductDetail from './pages/Product/ProductDetail/ProductDetail';
import SignIn from './pages/SignIn/SignIn';

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/products" element={<Product />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productdetail/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
