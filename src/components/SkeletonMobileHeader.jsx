import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

// icon 
import back from '../assets/icons/back.svg';
import logo from '../assets/icons/logoIcon.svg';

import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';

const SkeletonMobileHeader = () => {

    const navigate = useNavigate();

    const backHandler = () => {
        navigate(-1);
    }


    return (
    <div className='container mt-4 mb-8'>
        <div className='flex justify-between items-center'>
            <div className='bg-primaryRed rounded-lg' onClick={backHandler}>
                <img src={back} alt="back" className='py-2 px-3'/>
            </div>

            <div>
                <Skeleton className='text-lg w-32'></Skeleton>
            </div>

            <div>
                <Link to={'/'}><img src={logo} alt="logo" className='w-[34px]' /></Link>
            </div>

        </div>
    </div>
    );
};

export default SkeletonMobileHeader;