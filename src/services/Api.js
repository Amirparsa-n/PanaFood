import Commerce from '@chec/commerce.js';

const commerce = new Commerce(import.meta.env.VITE_REACT_API_KEY , true);

const productsData = async () => {
    const { data } = await commerce.products.list({limit: 40,})
    return data;
}

const categoriesData = async () => {
    const { data } = await commerce.categories.list({limit: 20,})
    return data;
}

export {productsData};

export {categoriesData};


