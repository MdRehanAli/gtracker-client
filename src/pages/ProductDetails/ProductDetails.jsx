import React from 'react';
import { Link, useLoaderData } from 'react-router';

const ProductDetails = () => {

    const products = useLoaderData();
    const { _id, image, name, category, description, largeDescription, minimumOrder, availableQuantity, price, paymentOptions } = products;

    return (
        < div className='max-w-7xl mx-auto w-11/12 my-20'>
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
                        <p>Payment Options:</p>
                        {
                            paymentOptions.map((paymentOption, index) => <div key={index}>
                                <button className="btn btn-primary btn-sm">{paymentOption}</button>
                            </div>)
                        }
                    </div>
                    <Link to='/order' className="btn btn-primary my-10">Order Now</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;