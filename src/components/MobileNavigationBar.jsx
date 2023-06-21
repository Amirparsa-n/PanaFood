import React from 'react';
import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const MobileNavigationBar = () => {

    let location = useLocation();

    const [iconColorHome, setIconColorHome] = useState('#292d32')
    const [iconColorUser, setIconColorUser] = useState('#292d32')
    const [iconColorCart, setIconColorCart] = useState('#292d32')
    const [iconColorFavorite, setIconColorFavorite] = useState('#292d32')

    useEffect(() => {
        if (location.pathname == '/') {
            setIconColorHome('#E95051')
        } else if (location.pathname === '/cart') {
            setIconColorCart('#E95051')
        } else if (location.pathname === '/favorite') {
            setIconColorFavorite('#E95051')
        } else if (location.pathname === '/login') {
            setIconColorUser('#E95051')
        }
    }, [location])

    return (
        <div className='w-full mx-auto'>
            <div className='fixed bottom-2 right-0 max-w-3xl container md:hidden'>
                <div className='bg-white shadow-MobileNavigationBar rounded-2xl w-full z-50'>
                    <div className='flex-row-reverse flex justify-between py-4 px-4 items-center w-full'>
                        <Link to={'/'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23.973"><path style={{fill: iconColorHome}} d="M21.639 5.775 14.733.944a5.817 5.817 0 0 0-6.581.156L2.146 5.787A6.177 6.177 0 0 0 0 10.151v8.272a5.551 5.551 0 0 0 5.538 5.55h12.924A5.541 5.541 0 0 0 24 18.435v-8.128a6.118 6.118 0 0 0-2.361-4.532Zm-8.739 13.4a.9.9 0 0 1-1.8 0v-3.6a.9.9 0 0 1 1.8 0Z"/></svg>
                        </Link>

                        <Link to={'/login'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="27.063"><path style={{fill: iconColorUser}} d="M11.999 13.18A6.59 6.59 0 1 0 5.39 6.59a6.6 6.6 0 0 0 6.609 6.59Z" data-name="Path 68"/><path style={{fill: iconColorUser}} d="M12 16.519c-6.614 0-12 4.429-12 9.885a.653.653 0 0 0 .66.659h22.68a.653.653 0 0 0 .66-.659c0-5.456-5.386-9.885-12-9.885Z" data-name="Path 69"/></svg>
                        </Link>

                        <Link to={'/cart'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23.875"><path style={{fill: iconColorCart}} d="M20.688 4.293h-.48L16.152.243a.84.84 0 1 0-1.188 1.186l2.868 2.864H6.168l2.868-2.864A.84.84 0 1 0 7.848.243L3.8 4.293h-.48c-1.076 0-3.32 0-3.32 3.068a3.264 3.264 0 0 0 .744 2.433 1.938 1.938 0 0 0 1.008.539 4.647 4.647 0 0 0 1.08.1h18.336a5.018 5.018 0 0 0 1.056-.1C23.232 10.094 24 9.375 24 7.361c0-3.068-2.244-3.068-3.312-3.068Z" data-name="Path 66"/><path style={{fill: iconColorCart}}d="M20.464 11.89H3.443a1.2 1.2 0 0 0-1.188 1.39l1.008 6.16c.336 2.061 1.236 4.434 5.234 4.434h6.734c4.045 0 4.765-2.025 5.2-4.29l1.212-6.268a1.2 1.2 0 0 0-1.179-1.426Zm-8.463 8.988a5.109 5.109 0 0 1-5.1-5.093.9.9 0 0 1 1.8 0 3.3 3.3 0 0 0 6.6 0 .9.9 0 0 1 1.8 0 5.109 5.109 0 0 1-5.1 5.093Z" data-name="Path 67"/></svg>
                        </Link>

                        <Link to={'/favorite'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21.36"><path style={{fill: iconColorFavorite}} d="M17.328-.002A6.659 6.659 0 0 0 12 2.676 6.662 6.662 0 0 0 0 6.708a12.814 12.814 0 0 0 .624 3.972c1.9 6 7.74 9.588 10.632 10.572a2.617 2.617 0 0 0 1.488 0c2.892-.984 8.736-4.572 10.632-10.572A12.814 12.814 0 0 0 24 6.708a6.689 6.689 0 0 0-6.672-6.71Z"/></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileNavigationBar;