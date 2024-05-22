import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './component/Home'
import React from 'react';
import Layout from './component/Layout'
import Login from './component/Login'
import SingleProduct from './component/SingleProduct';

const About = React.lazy(() => import('./component/About'));
const Cart = React.lazy(() => import('./component/Cart'));
const Checkout = React.lazy(() => import('./component/Checkout'))


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/products/:productId' element={<SingleProduct />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
