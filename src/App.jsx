import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'

// context
import ProductsContextProvider from './context/ProductsContextProvider';



function App() {



  return (
    <ProductsContextProvider>
      <div>
        Pana Store
      </div>
    </ProductsContextProvider>
  )
}

export default App
