import React from 'react';



const FoodDetails = ({ name, image, description, price }) => {


    return (
        <div className='container'>
            <div className='flex flex-col gap-y-10 '>
                <div className='flex justify-center'>
                    <img src={image} alt="foodPicture" className='w-[300px]' />
                </div>

                <div>
                    <h1 className='text-3xl font-bold'>{name}</h1>

                    <p className='mt-7' dangerouslySetInnerHTML={{__html: description}}></p>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;