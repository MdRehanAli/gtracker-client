import React from 'react';
import { Link, useLoaderData } from 'react-router';
import { AiOutlineFileSearch } from "react-icons/ai";
import { BiCategoryAlt } from 'react-icons/bi';
import { MdEventAvailable, MdPayment } from 'react-icons/md';
import { RiSlowDownFill } from "react-icons/ri";

const ProductDetails = () => {

    const products = useLoaderData();
    const { _id, image, name, category, largeDescription, minimumOrder, availableQuantity, price, paymentOptions } = products;

    return (
        < div className='max-w-7xl mx-auto w-11/12 my-20'>
            <div className='text-center mb-12'>
                <div className='flex justify-center items-center gap-2 mb-5'>
                    <div className='flex justify-center text-primary animate-[pulse_1s_linear_infinite] hover:animate-none '><AiOutlineFileSearch className='text-3xl md:text-4xl font-bold' /></div>
                    <h1 className='text-3xl md:text-4xl font-bold text-primary'>Product Details</h1>
                </div>
                <p className='text-secondary mt-3 text-lg'>Explore complete information about this product, including specifications, pricing, available quantity, and ordering options everything you need to make the right choice with confidence.</p>
            </div>
            <div className='bg-accent rounded-xl'>
                <div className="flex md:flex-row flex-col justify-between items-center gap-5 md:gap-10 bg-linear-to-r from-primary/30 to-accent p-5 md:p-10 rounded-xl text-secondary">
                    <figure className='flex-1 w-full'>
                        <img
                            src={image}
                            alt={name}
                            className='rounded-xl w-full' />
                    </figure>
                    <div className="flex-1 flex flex-col gap-2 md:text-left text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">{name}</h2>
                        <p className='text-justify'>{largeDescription}</p>
                        <p className='font-bold text-md'><span><BiCategoryAlt className='inline text-primary mr-1' /> </span> {category}</p>
                        <div className='flex justify-between'>
                            <p className='font-bold text-2xl'><span className=''><MdEventAvailable className='inline text-primary mr-1' /> </span> {availableQuantity}</p>
                            <p className='font-bold text-2xl'><span className='font-bold'><RiSlowDownFill className='inline text-primary mr-1' /></span>{minimumOrder}</p>
                        </div>
                        <p className='font-extrabold text-primary text-5xl text-center'>$ {price}</p>
                        <div className="card-actions justify-end">
                            <p className='font-bold text-md'><MdPayment className='inline text-primary mr-1' /> {paymentOptions} </p>
                        </div>
                        <Link to={`/order/${_id}`} className="btn btn-primary">Order Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;