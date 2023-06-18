import React , {useState, useEffect, createContext}from 'react';
import { productsData } from '../services/Api'; 


export const ProductsContext = createContext()

const ProductsContextProvider = ({children}) => {

    const [foodData, setFoodData] = useState([])

    const fetchData = async () => {
        const data = await productsData();
        setFoodData(data);
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <ProductsContext.Provider value={foodData}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsContextProvider;