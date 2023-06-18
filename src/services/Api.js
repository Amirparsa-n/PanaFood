import Commerce from '@chec/commerce.js';

const commerce = new Commerce(import.meta.env.VITE_REACT_API_KEY , true);

const productsData = async () => {
    const { data } = await commerce.products.list({limit: 40,})
    return data;
}

export {productsData};


