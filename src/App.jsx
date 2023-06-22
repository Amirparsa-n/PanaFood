import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import './App.css'

import { Route, Routes } from 'react-router-dom';

// context
import ProductsContextProvider from './context/ProductsContextProvider';
import ContextProvider from './context/ContextProvider';

// component
import Home from './pages/Home';
import FoodDetailsPage from './pages/FoodDetailsPage';
import CartList from './pages/CartList';
import Page404 from './pages/Page404'; 

// Aos
import Aos from 'aos';
import "aos/dist/aos.css";


function App() {

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
        Aos.init({
            duration: 800,
            easing: 'ease-in-quart',
        });
    }, [])

  return (
    <ProductsContextProvider>
      <ContextProvider>
        <div className='text-slate-800 font-Mazzard'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:id' element={<FoodDetailsPage />} />
            <Route path='/cart' element={<CartList />} />
            <Route path='/notfound' element={<Page404 />} />
          </Routes>
        </div>
      </ContextProvider>
    </ProductsContextProvider>
  )
}

export default App
