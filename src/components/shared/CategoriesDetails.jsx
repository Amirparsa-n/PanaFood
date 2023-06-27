import React, {useContext} from 'react';

// lazy loading
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { ContextDataProvider } from '../../context/ContextProvider';

const CategoriesDetails = ({ name, image, description }) => {

    const {currentCategory, setCurrentCategory} = useContext(ContextDataProvider);

    return (
        <button 
            type='button' 
            className='flex items-center md:flex-col w-full' 
            
            onClick={() => setCurrentCategory(name)}
        >

            <div 
                className='flex items-center gap-x-2 md:gap-x-0 md:gap-y-4 md:flex-col rounded-xl px-3 md:px-8 py-1 md:py-4'
                style={currentCategory === name ? {backgroundColor: '#E95051', color: '#fff'} : {backgroundColor: 'rgba(233,80,81,0.1)', color: '#000'}}
            >
                <div>
                    <LazyLoadImage
                        alt={name}
                        className='w-[30px] sm:w-[40px] md:w-[64px]'
                        src={image} 
                        effect="blur"
                    />
                    {/* <img src={image} alt="CategoryImage" className='w-[30px] sm:w-[40px] md:w-[64px]' /> */}
                </div>
                <div>
                    <p className='text-sm sm:text-[15px] md:text-xl'>{description}</p>
                </div>
            </div>
        </button>
    );
};

export default CategoriesDetails;