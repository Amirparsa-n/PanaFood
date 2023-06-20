import React from 'react';

import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonCategory = ({ carts }) => {
    return (
        <div>
            <SkeletonTheme baseColor="rgba(233,80,81,0.4)" highlightColor="#ff7272">
                <button 
                type='button' 
                className='flex items-center md:flex-col w-full' 
                >
                    <div 
                        className='flex flex-row items-center gap-x-2 md:gap-x-0 md:gap-y-4 md:flex-col rounded-xl px-3 md:px-8 py-1 md:py-4 bg-primaryRed bg-opacity-10'
                    >
                        <div>
                            <Skeleton className='rounded-2xl md:rounded-3xl w-[25px] h-[25px]  md:w-[60px] md:h-[60px]'/>
                        </div>
                        <div>
                            <Skeleton className='h-[16px] w-12 md:w-16 md:h-[23]' />
                        </div>
                    </div>
                </button>
            </SkeletonTheme>
        </div>
    );
};

export default SkeletonCategory;