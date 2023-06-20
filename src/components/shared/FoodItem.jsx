import React from 'react';

// image
import bgItem from '../../assets/images/itemFood.svg';
import bgPrice from '../../assets/images/bgPrice.svg';

const FoodItem = ({ name, price, image}) => {
    return (
            <div className='col-span-1 bg-white shadow-MobileNavigationBar rounded-[35px] px-6 relative pb-6'>

                <div className='h-32 -mt-10 flex items-center'>
                    <img src={image} alt="image food" className='w-32 h-fit inline' />
                </div>

                <div className='absolute right-6 top-4 flex flex-row-reverse items-center gap-x-4'>
                        <div className='bg-[#f1f1f1] rounded-xl'>
                            <p className='text-lg font-semibold mx-3 my-2'>{price}$</p>
                        </div>

                        <div>
                            <svg svg xmlns="http://www.w3.org/2000/svg" width="22" height="19.749"><path fill="#292d32" d="M11 19.748a2.649 2.649 0 0 1-.88-.133C6.211 18.275 0 13.515 0 6.487A6.476 6.476 0 0 1 6.457 0 6.359 6.359 0 0 1 11 1.882a6.359 6.359 0 0 1 4.543-1.883A6.483 6.483 0 0 1 22 6.487c0 7.04-6.211 11.788-10.12 13.128a2.649 2.649 0 0 1-.88.133ZM6.457 1.534a4.944 4.944 0 0 0-4.922 4.953c0 6.989 6.723 10.877 9.087 11.686a1.622 1.622 0 0 0 .767 0c2.353-.808 9.087-4.687 9.087-11.686a4.944 4.944 0 0 0-4.926-4.953 4.862 4.862 0 0 0-3.929 1.985.792.792 0 0 1-1.228 0 4.881 4.881 0 0 0-3.936-1.985Z"/></svg>
                        </div>
                </div>

                <div className='mt-6'>
                    <p className='text-[22px] font-bold'>{name}</p>
                </div>

                {/* Cart */}
                <div className='flex justify-center mt-6 '>
                    <button
                        type='button'
                        className='bg-primaryRed rounded-2xl px-3 py-9 flex gap-x-2 shadow-button'
                    >
                        <p className='text-white'>
                            Add to cart
                        </p>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21.5" height="21.497"><path fill="#fff" d="M10.75 17.246a4.259 4.259 0 0 1-4.25-4.25.75.75 0 0 1 1.5 0 2.75 2.75 0 0 0 5.5 0 .75.75 0 0 1 1.5 0 4.259 4.259 0 0 1-4.25 4.25Z" data-name="Path 12"/><path fill="#fff" d="M3.941 5.127a.767.767 0 0 1-.53-.22.754.754 0 0 1 0-1.06l3.63-3.63a.75.75 0 0 1 1.06 1.06l-3.63 3.63a.786.786 0 0 1-.53.22Z" data-name="Path 13"/><path fill="#fff" d="M17.559 5.127a.742.742 0 0 1-.53-.22l-3.63-3.63a.75.75 0 0 1 1.06-1.06l3.63 3.63a.754.754 0 0 1 0 1.06.767.767 0 0 1-.53.22Z" data-name="Path 14"/><path fill="#fff" d="M18.96 9.346H2.75a2.693 2.693 0 0 1-2.08-.57A2.907 2.907 0 0 1 0 6.596c0-2.75 2.01-2.75 2.97-2.75h15.56c.96 0 2.97 0 2.97 2.75a2.892 2.892 0 0 1-.67 2.18 2.48 2.48 0 0 1-1.87.57Zm-15.99-1.5h15.79c.45.01.87.01 1.01-.13.07-.07.22-.31.22-1.12 0-1.13-.28-1.25-1.47-1.25H2.97c-1.19 0-1.47.12-1.47 1.25 0 .81.16 1.05.22 1.12a2.013 2.013 0 0 0 1.01.13Z" data-name="Path 15"/><path fill="#fff" d="M13.641 21.497h-6.03c-3.58 0-4.38-2.13-4.69-3.98l-1.41-8.65a.75.75 0 0 1 1.48-.24l1.41 8.64c.29 1.77.89 2.73 3.21 2.73h6.03c2.57 0 2.86-.9 3.19-2.64l1.68-8.75a.75.75 0 0 1 1.47.29l-1.68 8.75c-.39 2.03-1.04 3.85-4.66 3.85Z" data-name="Path 16"/></svg>
                        </span>
                    </button>
                </div>

            </div>
    );
};

export default FoodItem;