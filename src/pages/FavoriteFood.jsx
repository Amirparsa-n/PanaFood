import React from 'react';
import { useContext } from 'react';

//Component
import MobileHeader from '../components/MobileHeader';
import FavoriteFoodDetails from '../components/shared/FavoriteFoodDetails';

// Context
import { FavoriteFoodContext } from '../context/FavoriteFoodContextProvider';

const FavoriteFood = () => {

    const {stateLike, dispatchLike} = useContext(FavoriteFoodContext)

    return (
        <>
        {/* MobileHeader */}
        <div className='md:hidden'>
            <MobileHeader title={'Favorite Food'}/>
        </div>
        <div className='container'>
            
            <div>
                <h1 className='text-2xl font-bold md:mt-6 mb-8'>My Favorite Food</h1>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-y-16 gap-x-8'>

            </div>

        </div>
        </>
    );
};

export default FavoriteFood;