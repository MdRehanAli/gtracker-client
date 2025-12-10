import React from 'react';

const Product = ({ product }) => {

    const { image, name, description, price } = product

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
                <p className=''>{description}</p>
                {/* <p className='text-justify '>{largeDescription}</p> */}
                <p className='font-bold text-4xl'>${price}</p>
                <div className="card-actions mt-2">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Product;