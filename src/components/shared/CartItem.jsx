import React, {useContext} from 'react';

// context
import { CartContext } from '../../context/CartContextProvider';

// function
import { isInCart } from '../../helper/Function';
import { quantityCount } from '../../helper/Function';

// icons
import increase from '../../assets/icons/increase.svg';
import decrease from '../../assets/icons/decrease.svg';
import trash from '../../assets/icons/trash.svg';


const CartItem = ({ name, image, description, price, id, data }) => {

    const {state, dispatch} = useContext(CartContext);

    return (
        <div className='border-b border-black border-opacity-30'>
            <div className='flex items-center justify-between py-3'>

                <div>
                    <img src={image} alt={name} className='w-20' />
                </div>

                <div className='flex flex-col gap-y-3'>
                    <p className=''>{name}</p>

                    <div className='flex gap-x-4'>
                        <p className='font-semibold'>{price}$</p>

                        <div className='text-primaryYellow font-semibold'>
                            x
                            <span>{quantityCount(state, id)}</span>
                        </div>
                    </div>
                </div>

                <div className='h-full bg-primaryRed rounded-2xl'>
                        <button type='button'  onClick={() => dispatch({type:'INCREASE' , data: data})} className='bg-primaryYellow rounded-2xl'>
                            <img src={increase} alt="increase Icon" className='px-9 py-9'/>
                        </button>

                    <div className='h-10 flex items-center justify-center'>
                        {quantityCount(state, id) === 1 && 
                        <button type="button" onClick={() => dispatch({type:'REMOVE_ITEM' , data: data}) } className=' transition-all'>
                            <img src={trash} alt='trash Icon' className='px-[10px] pb-2'/>
                        </button>}

                        {quantityCount(state, id) > 1 && 
                        <button type="button" onClick={() => dispatch({type:'DECREASE' , data: data}) } className=' transition-all '>
                            <img src={decrease} alt="increase Icon" className='px-9 pb-2 '/>
                        </button>}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CartItem;