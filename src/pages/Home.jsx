import React from 'react';
import { useEffect } from 'react';

import Aos from 'aos';
import "aos/dist/aos.css";

// images
import logo from '../assets/images/Logo.png';
import banner from '../assets/images/baner.webp';
import Cherry from '../assets/images/Cherry.png'


// Component
import Navbar from '../components/Navbar';
import MobileNavigationBar from '../components/MobileNavigationBar';
import ServiceSection from '../components/ServiceSection';


// Data
import { ServiceData } from '../services/DummyData';

const Home = () => {

    useEffect(() => {
        Aos.init({
            duration: 800,
            easing: 'ease-in-quart',
        });
    }, [])

    return (
        <>
        <div className='gradientBgHeader h-screen w-full'>

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
                        <div className='flex justify-center' data-aos="zoom-in">
                            <img src={banner} alt="banner" className='w-[230px] md:w-[550px] xl:w-[605px]' />
                        </div>

                        <div data-aos="fade-right">

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
                                <button type='button' className='bg-primaryRed py-4 px-7 text-white rounded-full shadow-button'>
                                    Get Started
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                {/* section  */}
                <div className='mt-16 md:mt-28'>
                    {/* title */}
                    <div className='text-center' data-aos="fade-down">
                        <p className='text-lg md:text-2xl font-medium text-primaryRed'>WHAT WE SERVE</p>
                        <h2 className='text-28 font-bold mt-2 md:text-[40px]' >
                            Your Favorite Food<br />
                            Delivery Partner 
                        </h2>
                    </div>
                    {/* items */}
                    <div className='mt-8 md:mt-14'>
                        <div className='flex flex-col gap-y-8 md:gap-y-0 md:flex-row md:justify-between lg:gap-x-16'>
                            {ServiceData.map((item, index) => (
                                <ServiceSection key={index} image={item.image} title={item.title} description={item.description} />
                            ))}
                        </div>
                    </div>
                </div>

            </div>

        </div>


        <div className='w-full mx-auto'>
            <div className='fixed bottom-2 right-0 max-w-3xl container md:hidden'>
                    <MobileNavigationBar  />
            </div>
        </div>

        </>
    );
};

export default Home;