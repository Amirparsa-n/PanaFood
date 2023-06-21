import React from 'react';

// image
import bgFooter from '../assets/images/BgFooter.svg';
import logo from '../assets/images/Logo.png';

// Icons
import call from '../assets/icons/call.svg';
import location from '../assets/icons/location.svg';
import send from '../assets/icons/send.svg';
import instagram from '../assets/icons/instagram.svg';
import discord from '../assets/icons/discord.svg';
import gitHub from '../assets/icons/gitHub.svg';


const Footer = () => {
    return (
        <div className='mt-20'>
            <img src={bgFooter} alt="" className='-mb-1 lg:-mb-20 xl:-mb-28' />

            <div className='bg-Footer pb-24 md:pb-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container px-8'>
                    <div className='col-span-1'>
                        <div className='flex justify-center md:justify-start'>
                            <img src={logo} alt="logo" className='w-56' />
                        </div>

                        <div className='flex flex-col gap-y-5 mt-8'>
                            <div className='flex gap-x-3 items-center'>
                                <img src={call} alt="call icon" />
                                <p className='text-gray-300'>09130531884</p>
                            </div>

                            <div className='flex gap-x-3 items-center lg:items-start'>
                                <img src={location} alt="call icon" />
                                <p className='text-gray-300 lg:leading-8'>20 Cooper Square, New York,<br className='hidden lg:block'/> NY 10003, USA </p>
                            </div>
                        </div>
                    </div>

                    <div className='col-span-1 mt-8 md:mt-0'>
                        <h3 className='text-white text-xl font-bold text-center lg:text-left'>Menu</h3>

                        <div className='flex flex-wrap gap-x-5 gap-y-2 md:gap-y-0 justify-center lg:justify-start text-gray-300 mt-4 lg:mt-6 text-lg md:gap-x-12 lg:gap-x-28'>
                            <div className='hidden md:flex md:flex-col md:gap-y-5'>
                                <p>Burgers</p>
                                <p>Pizza</p>
                                <p>Hotdog</p>
                            </div>
                            <div className='hidden md:flex md:flex-col md:gap-y-5'>
                                <p>Taco</p>
                                <p>Snack</p>
                                <p>Drink</p>
                            </div> 
                            <p className='block md:hidden'>Burgers</p>
                            <p className='block md:hidden'>Pizza</p>
                            <p className='block md:hidden'>Hotdog</p>
                            <p className='block md:hidden'>Taco</p>
                            <p className='block md:hidden'>Snack</p>
                            <p className='block md:hidden'>Drink</p>
                        </div>
                    </div>

                    <div className='col-span-1 md:col-span-2 lg:col-span-1 mt-8'>
                        <h3 className='text-white text-xl font-bold text-center lg:text-start'>Newsletter</h3>

                        <p className='text-gray-300 text-center lg:text-start mt-4'>
                            Get now free 20% discount for all
                            products on your first order. 
                        </p>

                        <div className='bg-[#3B3C3E] w-full h-[50px] mt-7 rounded-full relative'>
                            <input type="text" className='h-[50px] w-full rounded-full px-6 pr-14 bg-transparent focus:outline-primaryYellow text-gray-100 placeholder:text-sm' placeholder='Your email here... '/>
                            <div className='bg-primaryRed w-fit rounded-full absolute right-1 top-1 cursor-pointer'> <img src={send} alt="sendIcon" className='p-[10px]'/> </div>
                        </div>

                        <div className='mt-7 flex flex-col items-center lg:flex-row lg:items-center lg:gap-x-5'>
                            <ul className='flex gap-x-4'>
                                <li><a href="https://www.instagram.com/amirparsa366/" target='_blank' className='bg-[#3B3C3E] rounded-full inline-block'><img src={instagram} alt="social Icon" className='p-[10px] w-10 h-10' /></a></li>
                                <li><a href="https://github.com/Amirparsa-n" target='_blank' className='bg-[#3B3C3E] rounded-full inline-block'><img src={gitHub} alt="social Icon" className='p-[10px] w-10 h-10' /></a></li>
                                <li><a href="https://discordapp.com/users/752868025958400061" target='_blank' className='bg-[#3B3C3E] rounded-full inline-block'><img src={discord} alt="social Icon" className='p-[10px] w-10 h-10' /></a></li>
                            </ul>

                            <p className='text-gray-500 text-center mt-3 lg:mt-0 lg:text-start'>Made by Amirparsa Naghibi</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;