import React, {useContext} from 'react';

import { ProductsContext } from '../context/ProductsContextProvider';

// Carousel 
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// component
import CategoriesDetails from './shared/CategoriesDetails';

const Categories = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 6
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 3
        }
      };

    const { categoryData } = useContext(ProductsContext);

    console.log(categoryData);

    return (
        <Carousel 
            responsive={responsive} 
            itemClass="carousel-Categories"
            removeArrowOnDeviceType={["tablet", "mobile","desktop","superLargeDesktop"]}
        >
            {categoryData.map((category) => (
                <CategoriesDetails key={category.name} name={category.name} description={category.description} image={category.assets[0].url} />
            ))}
        </Carousel>
    );
};

export default Categories;