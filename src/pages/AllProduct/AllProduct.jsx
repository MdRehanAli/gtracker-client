import React from 'react';
import Products from '../Home/Products/Products';
import Banner from '../Home/Banner/Banner';
import { Helmet } from 'react-helmet-async';

const AllProduct = () => {

    return (
        <div className='max-w-7xl mx-auto w-11/12'>
            <Helmet>
                <title>GTracker | All Products</title>
            </Helmet>
            <Banner></Banner>
            <Products></Products>
        </div>
    );
};

export default AllProduct;