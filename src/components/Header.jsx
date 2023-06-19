import React from 'react';

import Navbar from './Navbar';

// images
import logo from '../assets/images/Logo.png';
import banner from '../assets/images/baner.webp';
import Cherry from '../assets/images/Cherry.png'

const Header = () => {
    return (
        <div className='gradientBgHeader w-full'>
            {/* Navbar */}
            <div className='hidden md:block'>
                <Navbar />
            </div>

            <div className='container'>
                {/* Logo in mobile */}
                <div className='py-4 flex justify-center md:hidden'>
                    <img src={logo} alt="logo" className='w-[120px]'/>
                </div>

                {/* Header */}
                <div className='mt-5'>

                    <div className='flex flex-col md:flex-row-reverse gap-y-4 md:gap-y-0 md:gap-x-8 md:items-center md:justify-between'>

                        {/* banner */}
                        <div className='flex justify-center' data-aos="zoom-in" data-aos-offset="0">
                            <img src={banner} alt="banner" className='w-[230px] md:w-[550px] xl:w-[605px]' />
                        </div>

                        <div data-aos="fade-right" data-aos-delay="1000">

                            <div className='hidden lg:inline-block mb-6'>
                                <div className='px-4 py-2 flex bg-primaryRed rounded-full items-center gap-x-1 bg-opacity-20'>
                                    <span className='font-light text-primaryRed'>More than Faster</span>
                                    <div className='w-[30px]'>
                                        <img src={Cherry} alt="Cherry" className=''/>
                                    </div>
                                </div>
                            </div>

                            <h3 className='font-bold text-[38px] md:text-[38px] lg:text-[71px] text-center md:text-left mx-5 md:mx-0 text-black '>
                                Be The Fastest<br className='hidden md:block'/>
                                In Delivering <br className='hidden md:block'/>
                                Your <span className='text-primaryRed'>Food</span>
                            </h3>

                            <p className='mt-3 md:mt-9 lg:text-xl'>
                                Our job is to filling your tummy with delicious <br className='hidden lg:block'/>
                                food and with fast and free delivery. 
                            </p>

                            <div className='flex justify-center md:justify-start mt-8'>
                                <button type='button' className='bg-primaryRed py-4 md:py-[22px] px-7 md:px-8 text-white rounded-full shadow-button md:text-2xl'>
                                    Get Started
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;


