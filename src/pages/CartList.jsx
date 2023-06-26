import React, {useContext} from 'react';

// import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import { useWindowSize } from '@uidotdev/usehooks';

import { Link } from 'react-router-dom';

// context
import { CartContext } from '../context/CartContextProvider';

// component
import MobileHeader from '../components/MobileHeader';
import CartItem from '../components/shared/CartItem';

// image
import emptyCart from '../assets/images/emptyCart.svg';
import SuccessfulTick from '../assets/images/SuccessfulTick.svg';

const CartList = () => {

    const {state, dispatch} = useContext(CartContext);

    const size = useWindowSize();

    return (
        <>
            {/* MobileHeader */}
            <div className='md:hidden'>
                <MobileHeader title={'Cart'}/>
            </div>

            {/* HeaderDesktop */}
            <div>

            </div>

            {state.itemsCounter > 0 ? 
                <>
                <div className='container'>
                    
                    <h1 className='text-2xl font-bold'>My Cart List</h1>

                    <div className='flex justify-between mt-6 text-gray-400 border-b border-black border-opacity-30 pb-1 '>
                        <span>Food</span>
                        <span>Price</span>
                        <span>quantity</span>
                    </div>

                    <div className='h-[340px] overflow-scroll '>
                        {state.selectedItems.map(item => (
                            <CartItem key={item.id} name={item.name} image={item.image.url} description={item.description} price={item.price.formatted} id={item.id} data={item} />
                        ))}
                    </div>

                </div>

                <div className='md:hidden fixed bottom-0 right-0 w-full bg-white shadow-MobileNavigationBar rounded-t-[35px] pt-8 pb-6'>
                    <div className='container'>
                        <div className='border-b border-black border-opacity-[15%] pb-4'>
                            <h3 className='text-[22px] font-semibold'>Payment Info</h3>
                        </div>

                        <div className='mt-8 text-xl'>
                            <p>Total Foods : {state.itemsCounter}</p>
                            <p className='mt-4'>Total Payments : {state.total} $</p>
                        </div>

                        <div className='flex justify-between items-center mt-8 text-lg'>
                            <button
                            type='button'
                            className='border-2 border-primaryYellow py-3 px-7 text-primaryYellow hover:text-white hover:bg-primaryYellow rounded-full '
                            onClick={() => dispatch({type: 'CLEAR'})}
                            >
                                Clear
                            </button>

                            <button
                            type='button'
                            className='py-3 px-7 border-2 border-primaryRed bg-primaryRed text-white rounded-full shadow-button'
                            onClick={() => dispatch({type: 'CHECKOUT'})}
                            >
                                Check Out
                            </button>
                        </div>
                    </div>
                </div>
                </>
                

            :
            
            state.checkout ? 
                <div>
                    <Confetti
                    width={size.width}
                    height={size.height}
                    numberOfPieces={200}
                    />

                    <div className='container'>
                        <div className='flex flex-col items-center justify-center cartEmptyHeight'>
                            <img src={SuccessfulTick} alt="SuccessfulTick" className='w-52' />
                            <h3 className='text-2xl font-semibold mt-14 mb-8 text-center'>Thank you for your purchase</h3>

                            <Link to="/">
                            <button type='button' className='bg-[#32BA7C] py-4 md:py-[22px] px-7 md:px-8 text-white rounded-full shadow-button shadow-[#32BA7C] md:text-2xl'>
                                Go to Home
                            </button>
                        </Link>
                        </div>
                    </div>
                </div>
            :
                
            
                <div className='container'>
                    <div className='flex flex-col items-center justify-center cartEmptyHeight'>
                        <img src={emptyCart} alt="emptyCart" className='w-full'/>

                        <h2 className='text-2xl font-semibold'>Your shopping cart is empty.</h2>
                        <p className='text-gray-500 mt-6 mb-4'>Want to Buy?</p>

                        <Link to="/">
                            <button type='button' className='bg-primaryRed py-4 md:py-[22px] px-7 md:px-8 text-white rounded-full shadow-button md:text-2xl'>
                                Go to Home
                            </button>
                        </Link>
                    </div>
                </div>

            }

            

        </>
    );
};

export default CartList;