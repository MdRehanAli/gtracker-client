import React from 'react';
import Product from './Product';
import { Link, useLoaderData } from 'react-router';
import { CiShoppingTag } from "react-icons/ci";

const Products = () => {

    const products = useLoaderData();

    return (
        <div className='mx-auto w-11/12 max-w-7xl'>
            <div className='text-center'>
                <div className='flex justify-center text-7xl mb-5 '><CiShoppingTag className='p-4 bg-gray-300 rounded-3xl' /></div>
                <h1 className='text-3xl md:text-5xl font-bold'>Our Products</h1>
                <p className='mt-3 mb-12'>All our latest product are here. You can easily buy products from here</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {
                    products.map(product => <Product product={product} key={product._id}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;