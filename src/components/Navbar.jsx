import React from 'react';

import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

// images
import logo from '../assets/images/Logo.png';

const Navbar = () => {
    return (
        <div className='h-[80px] xl:h-[120px] bg-transparent flex items-center '>
            
            <div className='flex justify-between items-center container'>
                <div className=''>
                    <Link to={'/'}>
                        <img src={logo} alt="logo" className='w-[120px] lg:w-[180px]'/>
                    </Link>
                </div>

                <div>
                    <ul className='flex gap-x-6 lg:gap-x-12 text-[18px] lg:text-[22px]'>
                        <li className='text-primaryRed cursor-pointer'>
                            <HashLink 
                             to="/#WhyPana"
                             scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                             >
                                Why pana?
                            </HashLink>
                        </li>
                        <li className='hover:text-primaryRed cursor-pointer'>
                            <HashLink 
                             to="/#Service"
                             scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                             >
                                Service
                            </HashLink>
                        </li>
                        <li className='hover:text-primaryRed cursor-pointer'>
                            <HashLink 
                             to="/#Menu"
                             scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                             >
                                Menu
                            </HashLink>
                        </li>
                        <li className='hover:text-primaryRed cursor-pointer'>
                        <HashLink 
                             to="/#Delivery"
                             scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                             >
                                Delivery
                            </HashLink>
                        </li>
                    </ul>
                </div>

                <div className='flex gap-x-4 lg:gap-x-8 items-center'>
                    <div className='relative'>
                        <div className='bg-primaryRed absolute -top-[14px] left-[14px] text-white rounded-full'>
                            <span className='p-[6px] '>4</span>
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="25.135" viewBox="0 0 28 25.135">
                        <path id="heart" d="M15.25,27.486a3.371,3.371,0,0,1-1.12-.169C9.155,25.611,1.25,19.555,1.25,10.608A8.243,8.243,0,0,1,9.468,2.352a8.093,8.093,0,0,1,5.782,2.4,8.093,8.093,0,0,1,5.782-2.4,8.251,8.251,0,0,1,8.218,8.257c0,8.96-7.905,15-12.88,16.709A3.371,3.371,0,0,1,15.25,27.486ZM9.468,4.305a6.292,6.292,0,0,0-6.264,6.3c0,8.895,8.556,13.844,11.565,14.873a2.064,2.064,0,0,0,.977,0c3-1.029,11.565-5.965,11.565-14.873a6.292,6.292,0,0,0-6.264-6.3,6.188,6.188,0,0,0-5,2.527,1.008,1.008,0,0,1-1.563,0A6.212,6.212,0,0,0,9.468,4.305Z" transform="translate(-1.25 -2.352)" fill="#292d32"/>
                        </svg>
                    </div>

                    <div className='relative'>
                        <div className='bg-primaryRed absolute -top-[14px] left-[14px] text-white rounded-full '>
                            <span className='p-[6px] '>4</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28.624"><g fill="#020617"><path d="M22.55 20.368H8.374a4.9 4.9 0 0 1-3.475-1.418 4.218 4.218 0 0 1-1.238-3.333L4.766 3.321a1.285 1.285 0 0 0-.386-1.037 1.5 1.5 0 0 0-1.078-.434h-2.3a.971.971 0 0 1-1-.926.971.971 0 0 1 1-.926h2.313a3.6 3.6 0 0 1 2.543 1.039 3.165 3.165 0 0 1 .772 1.284h16.628a4.933 4.933 0 0 1 3.492 1.382 4.161 4.161 0 0 1 1.238 3.321l-.719 9.258a4.643 4.643 0 0 1-4.719 4.086ZM6.697 4.16l-1.038 11.6a2.4 2.4 0 0 0 .706 1.926 2.782 2.782 0 0 0 2.01.815H22.55a2.761 2.761 0 0 0 2.743-2.37l.719-9.258a2.409 2.409 0 0 0-.717-1.923 2.831 2.831 0 0 0-2.024-.8H6.697Z" data-name="Path 3"/><path d="M19.633 28.624a3.3 3.3 0 1 1 3.3-3.3 3.312 3.312 0 0 1-3.3 3.3Zm0-4.128a.826.826 0 1 0 .826.826.818.818 0 0 0-.826-.826Z" data-name="Path 4"/><path d="M9.583 28.624a3.3 3.3 0 1 1 3.3-3.3 3.312 3.312 0 0 1-3.3 3.3Zm0-4.128a.826.826 0 1 0 .826.826.818.818 0 0 0-.826-.826Z" data-name="Path 5"/><path d="M25.882 10.321H6.07a1.238 1.238 0 1 1 0-2.477h19.812a1.238 1.238 0 0 1 0 2.477Z" data-name="Path 6"/></g></svg>
                    </div>

                    <div>
                        <Link type='button' className='flex gap-x-2 bg-primaryRed px-2 lg:px-4 py-2 lg:py-3 rounded-full text-white items-center shadow-button'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="19.99" height="20"><g fill="#fff"><path d="M7 5.2v9.59A4.835 4.835 0 0 0 12.2 20h2.59a4.832 4.832 0 0 0 5.2-5.2V5.2A4.819 4.819 0 0 0 14.8 0h-2.6A4.832 4.832 0 0 0 7 5.2Z" data-name="Path 1" opacity=".4"/><path d="m10.43 6.12 3.35 3.35a.754.754 0 0 1 0 1.06l-3.35 3.35a.75.75 0 0 1-1.06-1.06l2.07-2.07H.75a.75.75 0 0 1 0-1.5h10.69L9.37 7.18a.75.75 0 0 1 1.06-1.06Z" data-name="Path 2"/></g></svg>
                            <span className="font-light">Login</span>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;