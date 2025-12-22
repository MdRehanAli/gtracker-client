import React from 'react';
import { Link } from 'react-router';

const Product = ({ product }) => {
    // console.log(product);

    const { _id, image, name, category, largeDescription, availableQuantity, price } = product

    return (
        <div className="card border shadow-xl rounded-2xl">
            <figure className="px-10 pt-10">
                <img
                    src={image}
                    alt={name}
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl">{name}</h2>
                <p className=''><span className='font-bold'>Category: </span> {category}</p>
                <p className=''><span className='font-bold'>Available Quantity: </span> {availableQuantity}</p>
                {/* <p className=''>{description}</p> */}
                {/* <p className='text-justify '>{largeDescription}</p> */}
                <p className='font-bold text-4xl'>${price}</p>
                <div className="card-actions mt-2">
                    <Link to={`/products-details/${_id}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Product;