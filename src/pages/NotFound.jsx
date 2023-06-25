import React from 'react';

import { Link } from 'react-router-dom';

// image
import image from '../assets/images/404.svg';

const NotFound = () => {
    return (
        <div className='container flex items-center justify-center h-[90vh]'>

            <div className='flex flex-col items-center gap-y-5'>
                <img src={image} alt="404 image" className='w-[300px] md:w-[500px] lg:w-[600px]'/>

                <div>
                    <Link to={'/'}>
                        <button
                            type='button'
                            // className='text-xl text-white bg-primaryRed py-3 px-7 rounded-full'
                            className='bg-primaryRed py-4 md:py-[22px] px-7 md:px-8 text-white rounded-full shadow-button md:text-2xl'
                        >
                            Go to Home
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default NotFound;