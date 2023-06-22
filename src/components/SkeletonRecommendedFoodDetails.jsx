import React from 'react';

import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonRecommendedFoodDetails = () => {
    return (
        <div className='flex justify-center'>
            <div className='w-[95%] sm:w-[98%] md:w-[92%] border border-gray-400 rounded-[35px] px-6 relative pb-6 mt-20 mb-10'>

                <div className='-mt-10 flex'>
                    <Skeleton circle className='w-28 h-28 z-[1]' />
                </div>

                <Skeleton className='absolute right-6 top-4 w-28 h-10 z-[1] ' />

                <div className='mt-5'>
                    <Skeleton className='text-[22px] w-44 z-[1]'></Skeleton>
                </div>

                {/* Cart */}
                <div className='flex justify-between items-center mt-6 '>
                    <Skeleton className='w-36 rounded-2xl h-10 z-[1]' />

                    <Skeleton className='w-24 text-xl'/>
                </div>
            </div>
        </div>
    );
};

export default SkeletonRecommendedFoodDetails;