import React from 'react'
import { useState, useEffect } from 'react'
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

  useEffect(() => {
        Aos.init({
            duration: 800,
            easing: 'ease-in-quart',
        });
    }, [])

  return (
    <ProductsContextProvider>
      <ContextProvider>
        <div className='text-slate-800 font-Mazzard h-[9000px]'>
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
