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
import NotFound from './pages/NotFound';
import FavoriteFood from './pages/FavoriteFood';
import User from './pages/User';

// Aos
import Aos from 'aos';
import "aos/dist/aos.css";

// redux
import { useSelector } from 'react-redux';

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


  // localStorage
  const state = useSelector(state => state.cart)
  useEffect(() => {
      localStorage.setItem('cartItems', JSON.stringify(state));
  }, [state])

  const stateLike = useSelector(state => state.favoriteFood)
  useEffect(() => {
    localStorage.setItem('FavoriteFoodItem', JSON.stringify(stateLike));
  }, [stateLike])


  return (
    <ProductsContextProvider>
      <ContextProvider>
              <div className='text-slate-800 font-Mazzard'>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/:id' element={<FoodDetailsPage />} />
                  <Route path='/cart' element={<CartList />} />
                  <Route path='/favorite' element={<FavoriteFood />} />
                  <Route path='/user' element={<User />} />
                  <Route path='/notfound' element={<NotFound />} />
                </Routes>
              </div>
      </ContextProvider>
    </ProductsContextProvider>
  )
}

export default App
