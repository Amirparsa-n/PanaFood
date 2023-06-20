import React from 'react';
import { useEffect } from 'react';


// Component
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import MobileNavigationBar from '../components/MobileNavigationBar';
import ServiceSection from '../components/shared/ServiceSection';
import Categories from '../components/Categories';
import FoodProducts from '../components/FoodProducts';
import Contact from '../components/Contact';

// Data
import { ServiceData } from '../services/DummyData';

const Home = () => {


    return (
        <>

        <Header />

        <div className='container'>

            {/* section Service */}
            <div className='mt-16 md:mt-26'>
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

                
            <div className='mt-16 md:mt-28'>
                {/* title */}
                <div className='text-center' data-aos="fade-down">
                    <p className='text-lg md:text-2xl font-medium text-primaryRed'>menu</p>
                    <h2 className='text-28 font-bold mt-2 md:text-[40px]' >
                        Choose & Enjoy 
                    </h2>
                </div>

                {/* categoriesData */}
                <div>
                    <div className='mt-9 md:mt-16 '>
                        <Categories />
                    </div>
                </div>

                {/* Foods */}
                <div>
                    <div className='mt-20 md:mt-28'>
                        <FoodProducts />
                    </div>
                </div>
            </div>

        </div>

        <div>
            <Contact />      
        </div>


        {/* MobileNavigationBar */}
        <div className='w-full mx-auto'>
            <div className='fixed bottom-2 right-0 max-w-3xl container md:hidden'>
                    <MobileNavigationBar  />
            </div>
        </div>

        </>
    );
};

export default Home;