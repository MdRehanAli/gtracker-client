import React from 'react';
import Products from '../Home/Products/Products';
import Banner from '../Home/Banner/Banner';
import { Helmet } from 'react-helmet-async';

const AllProduct = () => {

    return (
        <div>
            <Helmet>
                <title>GTracker | All Products</title>
            </Helmet>
            <Banner></Banner>
            <div className=''>
                <Products></Products>
            </div>
        </div>
    );
};

export default AllProduct;