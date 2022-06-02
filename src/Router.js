import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Bag from './pages/Bag/Bag';
import Main from './pages/Main/Main';
import Product from './pages/Product/Product';
import ProductDetail from './pages/Product/ProductDetail/ProductDetail';
import SignIn from './pages/SignIn/SignIn';
import Footer from './components/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productdetail/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
