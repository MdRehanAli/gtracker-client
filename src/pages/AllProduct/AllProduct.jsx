import React from 'react';
import Products from '../Home/Products/Products';

const productsPromise = fetch('/products.json').then(res => res.json())

const AllProduct = () => {
    return (
        <div>
            <Products productsPromise={productsPromise}></Products>
        </div>
    );
};

export default AllProduct;