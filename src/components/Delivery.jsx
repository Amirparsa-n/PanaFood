import React from 'react';

// images
import BgContact from '../assets/images/BgContact.svg';
import motor from '../assets/images/motor.webp'

// Icon images
import fastDelivery from '../assets/icons/fast-delivery.svg'
import gift from '../assets/icons/gift.svg'
import phoneCall from '../assets/icons/phone-call.svg'

const Delivery = () => {
    return (
        <div className='bg-cover bg-no-repeat BgContact'  >
            <div className='container' >
                <div className='flex flex-col gap-y-12 md:flex-row md:justify-between lg:justify-around md:gap-x-12 lg:gap-0 lg:items-center'>
                    <div className='flex justify-center md:justify-start ' data-aos="fade-up-right" data-aos-delay="500">
                        <img src={motor} alt="motor" className='w-72 md:w-fit lg:w-[450px]' />
                    </div>

                    <div className='lg:w-[450px]'>
                        <span className='hidden lg:block text-gray-400 font-light'>DELIVERY</span>

                        <h2 className='text-28 font-bold text-center lg:text-left lg:text-[34px] lg:mt-2'>Fastest Delivery</h2>

                        <p className='mt-2 text-gray-600 lg:text-lg'>
                        We provide tasty food and super fast
                        delivery at your home. Let's use our services
                        right now and get discounts up to 20%.
                        </p>

                        <div className='flex flex-col gap-y-4 mt-7'>
                            <div className='flex gap-x-4 items-center'>
                                <div className='bg-black bg-opacity-10 flex items-center justify-center rounded-full p-2'>
                                    <img src={fastDelivery} alt="ContactItem" className='w-8 ' />
                                </div>

                                <p className='font-semibold text-[14px] lg:text-lg'>Fasted delivery in 30 minutes</p>
                            </div>
                            
                            <div className='flex gap-x-4 items-center'>
                                <div className='bg-black bg-opacity-10 flex items-center justify-center rounded-full p-2'>
                                    <img src={phoneCall} alt="ContactItem" className='w-8 ' />
                                </div>

                                <p className='font-semibold text-[14px] lg:text-lg'>100+ workers</p>
                            </div>

                            <div className='flex gap-x-4 items-center'>
                                <div className='bg-black bg-opacity-10 flex items-center justify-center rounded-full p-2'>
                                    <img src={gift} alt="ContactItem" className='w-8 ' />
                                </div>

                                <p className='font-semibold text-[14px] lg:text-lg'>50+ Restaurants</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Delivery;