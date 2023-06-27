import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

// icons
import heart from '../../assets/images/heart.svg';
import heartF from '../../assets/icons/heartF.svg';

// context
import { FavoriteFoodContext } from '../../context/FavoriteFoodContextProvider';

// functions
import { checkIsClick } from '../../helper/Function';

const FavoriteFoodDetails = ({name, price, image, id ,data, description }) => {

    const {stateLike, dispatchLike} = useContext(FavoriteFoodContext)

    return (
        <div className='flex flex-row justify-center'>
            <div className='border border-gray-400 rounded-[35px] px-6 relative pb-6 mt-10 mb-4'>

                <div className='h-32 -mt-4 flex items-center justify-center'>
                    <img src={image} alt="image food" className='w-52 h-fit inline'/>
                </div>

                <div className='mt-10'>
                    <p className='text-[22px] font-bold'>{name}</p>
                </div>

                <div className='mt-4'>
                    <p className='lg:text-lg text-gray-500 line-clamp-4 fadeParagraph' dangerouslySetInnerHTML={{__html: description}}></p>
                </div>


                <div className='flex justify-between items-center mt-6 '>
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

                    <div>
                        <Link to={`/${id}`} className='text-primaryYellow font-semibold text-xl hover:text-primaryRed transition-colors hover:transition-colors'>Details</Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FavoriteFoodDetails;