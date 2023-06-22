import React, {useContext} from 'react';

import { ProductsContext } from '../context/ProductsContextProvider';

// Carousel 
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// component
import CategoriesDetails from './shared/CategoriesDetails';
import SkeletonCategory from './SkeletonCategory';

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

    const quantityCarts = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <Carousel 
            responsive={responsive} 
            itemClass="carousel-Categories"
            removeArrowOnDeviceType={["tablet", "mobile","desktop","superLargeDesktop"]}
        >
              {categoryData.length ? 
               

                categoryData.map((category) => (
                  <CategoriesDetails key={category.name} name={category.name} description={category.description} image={category.assets[0].url} />
                ))

                
            :
            quantityCarts.map((item) => (
                <SkeletonCategory key={item}/>
            ))
            }

        </Carousel>
    );
};

export default Categories;