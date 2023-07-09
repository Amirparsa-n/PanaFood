import React, {useContext} from 'react';

// Icon
import heart from '../assets/images/heart.svg';
import heartF from '../assets/icons/heartF.svg';
import increaseIcon from '../assets/icons/increase.svg';
import decreaseIcon from '../assets/icons/decrease.svg';
import trash from '../assets/icons/trash.svg';

// Context
import { FavoriteFoodContext } from '../context/FavoriteFoodContextProvider';


// redux
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addItem, removeItem, increase, decrease } from '../Redux/Features/cartSlice';

// function
import { isInCart } from '../helper/Function';
import { quantityCount } from '../helper/Function';
import { checkIsClick } from '../helper/Function';



const AddToCartFooterM = ({ price, data, id }) => {

    const {stateLike, dispatchLike} = useContext(FavoriteFoodContext);

    const state = useSelector(state => state.cart);
    const dispatch = useDispatch();

    
    return (
        <div className='bg-white shadow-MobileNavigationBar py-4 rounded-t-2xl fixed bottom-0 left-0 w-full'>

            <div className='flex justify-between items-center container'>
                <div>
                    <p className='text-xl font-semibold'>{price} $</p>
                </div>

                <div className='flex gap-x-4 items-center'>
                    <div>
                            {checkIsClick(stateLike, id) ? 
                                <button
                                type='button'
                                onClick={() => dispatchLike({type: 'REMOVED_LIKE', data: data})}
                                >   
                                    <img src={heartF} alt="heartIcon" />
                                </button>
                            :
                                <button
                                type='button'
                                onClick={() => dispatchLike({type: 'ADD_LIKE', data: data})}
                                >   
                                    <img src={heart} alt="heartIcon" />
                                </button>
                            }
                    </div>

                    <div className='flex gap-x-2 items-stretch'>

                        {!isInCart(state, id) ? 

                            <button
                            type='button'
                            className='bg-primaryRed rounded-2xl px-3 py-9 flex gap-x-2 shadow-button transition-transform'
                            onClick={() => dispatch(addItem(data))}
                            >
                                <p className='text-white'>
                                    Add to cart
                                </p>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21.5" height="21.497"><path fill="#fff" d="M10.75 17.246a4.259 4.259 0 0 1-4.25-4.25.75.75 0 0 1 1.5 0 2.75 2.75 0 0 0 5.5 0 .75.75 0 0 1 1.5 0 4.259 4.259 0 0 1-4.25 4.25Z" data-name="Path 12"/><path fill="#fff" d="M3.941 5.127a.767.767 0 0 1-.53-.22.754.754 0 0 1 0-1.06l3.63-3.63a.75.75 0 0 1 1.06 1.06l-3.63 3.63a.786.786 0 0 1-.53.22Z" data-name="Path 13"/><path fill="#fff" d="M17.559 5.127a.742.742 0 0 1-.53-.22l-3.63-3.63a.75.75 0 0 1 1.06-1.06l3.63 3.63a.754.754 0 0 1 0 1.06.767.767 0 0 1-.53.22Z" data-name="Path 14"/><path fill="#fff" d="M18.96 9.346H2.75a2.693 2.693 0 0 1-2.08-.57A2.907 2.907 0 0 1 0 6.596c0-2.75 2.01-2.75 2.97-2.75h15.56c.96 0 2.97 0 2.97 2.75a2.892 2.892 0 0 1-.67 2.18 2.48 2.48 0 0 1-1.87.57Zm-15.99-1.5h15.79c.45.01.87.01 1.01-.13.07-.07.22-.31.22-1.12 0-1.13-.28-1.25-1.47-1.25H2.97c-1.19 0-1.47.12-1.47 1.25 0 .81.16 1.05.22 1.12a2.013 2.013 0 0 0 1.01.13Z" data-name="Path 15"/><path fill="#fff" d="M13.641 21.497h-6.03c-3.58 0-4.38-2.13-4.69-3.98l-1.41-8.65a.75.75 0 0 1 1.48-.24l1.41 8.64c.29 1.77.89 2.73 3.21 2.73h6.03c2.57 0 2.86-.9 3.19-2.64l1.68-8.75a.75.75 0 0 1 1.47.29l-1.68 8.75c-.39 2.03-1.04 3.85-4.66 3.85Z" data-name="Path 16"/></svg>
                                </span>
                            </button>
                            :
                                <button type='button'  onClick={() => dispatch(increase(data))} className='bg-primaryRed rounded-2xl'>
                                    <img src={increaseIcon} alt="increase Icon" className='px-9 py-9'/>
                                </button>

                        }

                        {quantityCount(state, id) > 0 &&
                        <div className='border-[3px] border-primaryYellow rounded-2xl w-[41.5px] flex justify-center items-center transition-all'>
                            <span className='text-primaryYellow text-xl font-semibold '>{quantityCount(state, id)}</span>
                        </div>}

                        {quantityCount(state, id) === 1 && 
                        <button type="button" onClick={() => dispatch(removeItem(data)) } className='bg-primaryRed rounded-2xl transition-all'>
                            <img src={trash} alt='trash Icon' className='px-[10px]'/>
                        </button>}

                        {quantityCount(state, id) > 1 && 
                        <button type="button" onClick={() => dispatch(decrease(data)) } className='bg-primaryRed rounded-2xl transition-all'>
                            <img src={decreaseIcon} alt="increase Icon" className='px-9 py-9'/>
                        </button>}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddToCartFooterM;