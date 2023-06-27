import React from 'react';
import { useContext } from 'react';

import { Link } from 'react-router-dom';

//Component
import MobileHeader from '../components/MobileHeader';
import FavoriteFoodDetails from '../components/shared/FavoriteFoodDetails';
import Navbar from '../components/Navbar';

// Context
import { FavoriteFoodContext } from '../context/FavoriteFoodContextProvider';

// image
import FavoriteFoodImage from '../assets/images/FavoriteFoodImage.svg';

const FavoriteFood = () => {

    const {stateLike, dispatchLike} = useContext(FavoriteFoodContext)

    return (
        <>
        {/* MobileHeader */}
        <div className='md:hidden'>
            <MobileHeader title={'Favorite Food'}/>
        </div>

        <div className='hidden md:block'>
            <Navbar />
        </div>

        <div className='container'>
            
            {stateLike.itemsCounter > 0 ?
                <div>
                    <div className='flex justify-between flex-wrap items-center md:mt-6 mb-12 gap-y-4'>
                        <h1 className='text-2xl md:text-4xl font-bold '>My Favorite Food</h1>

                        <button
                        type='button'
                        className='text-sm md:text-lg bg-primaryYellow hover:bg-primaryRed transition-all shadow-button shadow-primaryYellow hover:shadow-primaryRed text-white py-2 px-2 md:py-3 rounded-full md:px-5'
                        onClick={() => dispatchLike({type: 'CLEAR_LIKE'})}
                        >
                            Clear All Favorite
                        </button>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 md:gap-x-24'>
                        {stateLike.selectedFavoriteFood.map(item => (
                            <FavoriteFoodDetails key={item.id} name={item.name} price={item.price.formatted} description={item.description} image={item.image.url} id={item.id} data={item}  />
                        ))}
                    </div>
                </div>
            
            :
                <div className='flex flex-col md:flex-row items-center justify-center md:justify-between cartEmptyHeight'>
                    
                    <img src={FavoriteFoodImage} alt="FavoriteFoodImage" className='w-full sm:w-96 md:w-1/2'/>

                    <div className='text-center'>
                        <h2 className='text-2xl font-semibold mt-2 mb-8 text-center'>You have not chosen your favorite food yet</h2>

                        <Link to="/">
                            <button type='button' className='bg-primaryRed py-4 md:py-[22px] px-7 md:px-8 text-white rounded-full shadow-button md:text-2xl'>
                                Go to Home
                            </button>
                        </Link>
                    </div>
                </div>
            }



        </div>
        </>
    );
};

export default FavoriteFood;