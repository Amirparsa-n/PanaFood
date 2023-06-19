import React from 'react';

const ServiceSection = ({ image, title, description }) => {
    return (
        <div 
            className='bg-white shadow-simple p-4 flex gap-x-8 justify-between items-center rounded-xl md:flex-col-reverse 
            md:shadow-none md:gap-y-8'
        >
            <div className='md:text-center'>
                <h3 className='text-lg font-semibold md:text-28'>{title}</h3>
                <p className='text-sm w-[180px] md:w-fit md:text-base lg:text-xl md:mt-[18px]'>{description}</p>
            </div>

            <div className='w-28 md:w-40 lg:w-56'>
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default ServiceSection;