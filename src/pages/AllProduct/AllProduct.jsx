import React from 'react';
import Products from '../Home/Products/Products';
import Banner from '../Home/Banner/Banner';

const AllProduct = () => {

    return (
        <div className='max-w-7xl mx-auto w-11/12'>
            <Banner></Banner>
            <Products></Products>
        </div>
    );
};

export default AllProduct;