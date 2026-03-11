import React from 'react';
import Product from './Product';
import { Link, useLoaderData } from 'react-router';
import { CiShoppingTag } from "react-icons/ci";
import FlyInMotion from '../../../components/Motion/FlyInMotion';

const Products = () => {

    const products = useLoaderData();

    return (
        <div className='mx-auto w-11/12 max-w-7xl'>
            <div className='mb-12 text-center'>
                <FlyInMotion index={1}>
                    <div className='flex justify-center items-center gap-2 mb-5'>
                        <div className='flex justify-center text-primary animate-[pulse_1s_linear_infinite] hover:animate-none '><CiShoppingTag className='text-3xl md:text-4xl font-bold' /></div>
                        <div>
                            <h1 className='text-3xl md:text-4xl font-bold text-primary text-nowrap'>Our Products</h1>
                            <div className='h-px w-24 md:w-30 bg-primary flex mx-auto animate-[ping_3s_linear_infinite] hover:animate-none'></div>
                        </div>
                    </div>
                </FlyInMotion>
                <FlyInMotion index={3}>
                    <p className='text-secondary mt-3 text-lg'>All our latest product are here. You can easily buy products from here.</p>
                </FlyInMotion>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {
                    products.map((product, i) => <FlyInMotion index={i * 2 - 1} key={product._id}>
                        <Product product={product}></Product>
                    </FlyInMotion>)
                }
            </div>
        </div>
    );
};

export default Products;