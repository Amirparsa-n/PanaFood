import React, {useContext, useState, useEffect} from 'react';


import { useParams } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

// context
import { ProductsContext } from '../context/ProductsContextProvider';

// component
import FoodDetails from '../components/shared/FoodDetails';
import MobileHeader from '../components/MobileHeader';
import SkeletonMobileHeader from '../components/SkeletonMobileHeader';
import AddToCartFooterM from '../components/AddToCartFooterM';
import RecommendedFood from '../components/RecommendedFood';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


// img


const FoodDetailsPage = () => {


    const { foodData} = useContext(ProductsContext);

    const {id} = useParams();

    const navigate = useNavigate();
    
    const resultFilter = foodData.filter(item => item.id === id);
    console.log(resultFilter);


    if (resultFilter.length === 0) {
        
            navigate('/notfound' , {replace: true});
            
    } else {
        
        return (
            <div className='mb-36 md:mb-0'>

                <div className='md:hidden'>
                    {resultFilter.length ? 
                        <MobileHeader title={resultFilter[0].name}/>
                        :
                        <SkeletonMobileHeader />
                    }
                </div>

                <div className='hidden md:block'>
                    <Navbar />
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
                    <div className='mt-20 xl:mt-48'>
                        {resultFilter.length && <RecommendedFood  categoryData={resultFilter[0].categories[0].name} food={foodData} id={id} resultFilter={resultFilter} />}
                    </div>

                </div>


                <div className='md:hidden'>
                    {resultFilter.length && <AddToCartFooterM price={resultFilter[0].price.formatted} />}
                </div>

                <div className='hidden md:block'>
                    <Footer />
                </div>
            </div>
        );
    }

}


export default React.memo(FoodDetailsPage);





