import React, {useState, useContext} from 'react';
import { useEffect } from 'react';

// context
import { ProductsContext } from '../context/ProductsContextProvider';
import { ContextDataProvider } from '../context/ContextProvider';

// component
import FoodItem from './shared/FoodItem';
import SkeletonFoodItem from './SkeletonFoodItem';


const FoodProducts = () => {

    const { foodData} = useContext(ProductsContext);
    const { currentCategory} = useContext(ContextDataProvider);
    

    const resultFilter = foodData.filter(category => category.categories[0].name === currentCategory)

    const quantityResult = [1, 2 ,3 ,4 ,5 ,6];

    return (
        <div className=''>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8'>
            {resultFilter.length ? 
                    resultFilter.map(food => (
                        <FoodItem key={food.id} name={food.name} price={food.price.formatted} image={food.image.url} id={food.id} data={food} />
                    ))
                    
                :
                quantityResult.map( index => (
                    < SkeletonFoodItem key={index}/>
                ))
                }
                
            </div>
        </div>
    );
};

export default FoodProducts;