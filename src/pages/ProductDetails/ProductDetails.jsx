import React from 'react';
import { Link, useLoaderData } from 'react-router';
import { AiOutlineFileSearch } from "react-icons/ai";

const ProductDetails = () => {

    const products = useLoaderData();
    const { _id, image, name, category, description, largeDescription, minimumOrder, availableQuantity, price, paymentOptions } = products;

    return (
        < div className='max-w-7xl mx-auto w-11/12 my-20'>
            <div className='text-center'>
                <div className='flex justify-center text-7xl mb-5'><AiOutlineFileSearch className='p-4 bg-gray-300 rounded-3xl' /></div>
                <h1 className='text-3xl md:text-5xl font-bold'>Product Details</h1>
                <p className='mt-3 mb-12 md:w-2/3 mx-auto'>Explore complete information about this product, including specifications, pricing, available quantity, and ordering options everything you need to make the right choice with confidence.</p>

            </div>
            <div className="card shadow-sm">
                <figure>
                    <img
                        src={image}
                        alt={name}
                        className='lg:w-1/2 rounded-2xl' />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p className='text-justify'><span className='font-bold'>Description: </span> {largeDescription}</p>
                    <p><span className='font-bold'>Category: </span> {category}</p>
                    <p className=''><span className='font-bold'>Available Quantity: </span> {availableQuantity}</p>
                    <p className='font-bold text-4xl'>${price}</p>
                    <p className=''><span className='font-bold'>Minimum Order: </span>{minimumOrder}</p>
                    <div className="card-actions justify-end">
                        <p>Payment Options: {paymentOptions} </p>
                    </div>
                    <Link to={`/order/${_id}`} className="btn btn-primary my-10">Order Now</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;