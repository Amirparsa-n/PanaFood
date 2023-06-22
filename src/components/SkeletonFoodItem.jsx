import React from 'react';

import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonFoodItem = () => {
    return (
        <div className='col-span-1 bg-white shadow-MobileNavigationBar rounded-[35px] px-6 relative pb-6 '>

        <div className='-mt-10 flex'>
            <Skeleton circle className='w-28 h-28 z-[1]' />
        </div>

        <Skeleton className='absolute right-6 top-4 w-28 h-10 z-[1] ' />

        <div className='mt-5'>
            <Skeleton className='text-[22px] w-44 z-[1]'></Skeleton>
        </div>

        {/* Cart */}
        <div className='flex justify-center mt-6 '>
            <Skeleton
                className='w-36 rounded-2xl h-10 z-[1]'
            >

            </Skeleton>
        </div>

    </div>
    );
};

export default SkeletonFoodItem;