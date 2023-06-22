import React from 'react';
import { useEffect, useState } from 'react';

// component
import RecommendedFoodDetails from './shared/RecommendedFoodDetails';


const RecommendedFood = ({ food, categoryData, id }) => {

    const [RecommendedFood, setRecommendedFood] = useState([])

    useEffect(() => {
        const RecommendedFoodData = food.filter(category => category.categories[0].name === categoryData && category.id !== id)
        setRecommendedFood(RecommendedFoodData)
    }, [])

    console.log(RecommendedFood);


    return (
        <div className='container'>
            <div>

                <h2 className='text-28 font-bold'>Recommended For You</h2>

                {RecommendedFood.length ?  

                    RecommendedFood.map((food) => (
                        <RecommendedFoodDetails key={food.id} />
                    ))

                :
                    'loading...'
                }

            </div>
        </div>
    );
};

export default RecommendedFood;