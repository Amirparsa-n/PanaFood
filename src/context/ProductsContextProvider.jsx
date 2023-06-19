import React , {useState, useEffect, createContext}from 'react';
import { productsData } from '../services/Api'; 
import { categoriesData } from '../services/Api';

export const ProductsContext = createContext()

const ProductsContextProvider = ({children}) => {

    const [foodData, setFoodData] = useState([])

    const [categoryData, setCategoryData] = useState([])


    const fetchFoodData = async () => {
        const data = await productsData();
        setFoodData(data);
    }

    const fetchCategoryData = async () => {
        const data = await categoriesData();
        setCategoryData(data);
    }

    useEffect(() => {
        fetchFoodData();
        fetchCategoryData();
    }, [])


    return (
        <ProductsContext.Provider value={{foodData, categoryData}}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsContextProvider;