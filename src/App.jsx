import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'

import { Route, Routes } from 'react-router-dom';

// context
import ProductsContextProvider from './context/ProductsContextProvider';

// component
import Home from './pages/Home';
import FoodDetailsPage from './pages/FoodDetailsPage';
import CartList from './pages/CartList';
import Page404 from './pages/Page404'; 


function App() {

  return (
    <ProductsContextProvider>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<FoodDetailsPage />} />
          <Route path='/cart' element={<CartList />} />
          <Route path='/notfound' element={<Page404 />} />
        </Routes>
      </div>
    </ProductsContextProvider>
  )
}

export default App
