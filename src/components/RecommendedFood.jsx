import React from 'react';
import { useEffect, useState } from 'react';

// component
import RecommendedFoodDetails from './shared/RecommendedFoodDetails';
import SkeletonRecommendedFoodDetails from './SkeletonRecommendedFoodDetails';

// Carousel 
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const RecommendedFood = ({ food, categoryData, id, resultFilter }) => {

    const [RecommendedFood, setRecommendedFood] = useState([])

    useEffect(() => {
        const RecommendedFoodData = food.filter(category => category.categories[0].name === categoryData && category.id !== id)
        setRecommendedFood(RecommendedFoodData)
    }, [resultFilter])



    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const quantitySkeletonRecommendedFoodDetails = [0,1,2,3,4,5]

    return (
        <div className='container'>
                <h2 className='text-28 font-bold mb-16'>Recommended For You</h2>
            <div className=''>


                <Carousel 
                    responsive={responsive} 
                    itemClass="carousel-Categories"
                    removeArrowOnDeviceType={["tablet", "mobile","desktop","superLargeDesktop"]}
                    containerClass="RecommendedFoodDetails"
                    // arrows={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}

                >
                {RecommendedFood.length ?

                  RecommendedFood.map((food) => (
                    <RecommendedFoodDetails key={food.id} name={food.name} price={food.price.formatted} image={food.image.url} id={food.id} data={food} />
                  ))


                :

                  quantitySkeletonRecommendedFoodDetails.map(item => (
                    <SkeletonRecommendedFoodDetails key={item} />
                  ))
                }
                </Carousel>

            </div>
        </div>
    );
};

export default RecommendedFood;