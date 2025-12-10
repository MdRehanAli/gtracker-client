import React, { use } from 'react';
import Product from './Product';
import { Link } from 'react-router';

const Products = ({ productsPromise }) => {

    const products = use(productsPromise);

    return (
        <div className=''>
            <div className='text-center'>
                <h1 className='text-3xl md:text-5xl font-bold'>Our Products</h1>
                <p className='my-5'>All our latest product are here. You can easily buy products from here</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    products.map(product => <Product product={product} key={product._id}></Product>)
                }
            </div>
            <div className='flex items-center justify-center mt-10'>
                <Link to='all-products' className='btn btn-primary px-20'>View All Products</Link>
            </div>
        </div>
    );
};

export default Products;