import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';

const productsPromise = fetch('/products.json').then(res => res.json())

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products productsPromise={productsPromise}></Products>
        </div>
    );
};

export default Home;