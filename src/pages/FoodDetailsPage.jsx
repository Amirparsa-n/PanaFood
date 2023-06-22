import React, {useContext, useState, useEffect} from 'react';


import { useParams } from 'react-router-dom';

// context
import { ProductsContext } from '../context/ProductsContextProvider';

// component
import FoodDetails from '../components/shared/FoodDetails';
import MobileHeader from '../components/MobileHeader';
import SkeletonMobileHeader from '../components/SkeletonMobileHeader';
import AddToCartFooterM from '../components/AddToCartFooterM';
import RecommendedFood from '../components/RecommendedFood';

// img


const FoodDetailsPage = () => {


    const { foodData} = useContext(ProductsContext);
    const [food, setFood] = useState(foodData)
    
    useEffect(() => {
        setFood(foodData)
    }, [foodData])

    const {id} = useParams();

    const resultFilter = food.filter(item => item.id === id);
    
    

    return (
        <div className='mb-36'>

            <div>
                {resultFilter.length ? 
                    <MobileHeader title={resultFilter[0].name}/>
                    :
                    <SkeletonMobileHeader />
                }
            </div>

            <div>

                {resultFilter.length ?
                    <FoodDetails name={resultFilter[0].name} image={resultFilter[0].image.url}  description={resultFilter[0].description} price={resultFilter[0].price.formatted} />
                    
                :
                    <div className='flex justify-center h-screen items-center -mt-[74px]'>
                        <span className="loader"></span>
                    </div>
                }

                {/* Recommended For You */}
                <div className='mt-20'>
                    {resultFilter.length && <RecommendedFood  categoryData={resultFilter[0].categories[0].name} food={food} id={id} />}
                </div>

            </div>


            <div>
                {resultFilter.length && <AddToCartFooterM price={resultFilter[0].price.formatted} />}
            </div>
        </div>
    );
};

export default FoodDetailsPage;