import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Works from '../Works/Works';

const productsPromise = fetch('/products.json').then(res => res.json())
const worksPromise = fetch('/works.json').then(res => res.json())

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products productsPromise={productsPromise}></Products>
            <Works worksPromise={worksPromise}></Works>
        </div>
    );
};

export default Home;