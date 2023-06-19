import React from 'react';

import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonCategory = ({ carts }) => {
    return (
        <div>
            <SkeletonTheme baseColor="#E95051" highlightColor="#ff7a7a">
                <button 
                type='button' 
                className='flex items-center md:flex-col w-full' 
                >
                    <div 
                        className='flex gap-x-2 md:gap-x-0 md:gap-y-4 md:flex-col rounded-xl px-3 md:px-8 py-1 md:py-4 bg-primaryRed bg-opacity-10'
                    >
                        <div>
                            <Skeleton className='rounded-3xl' width={60} height={60} />
                        </div>
                        <div>
                            <Skeleton height={23} />
                        </div>
                    </div>
                </button>
            </SkeletonTheme>
        </div>
    );
};

export default SkeletonCategory;