import React from 'react';
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router';

const Product = ({ product }) => {
    // console.log(product);

    const { _id, image, name, category, largeDescription, availableQuantity, price } = product

    return (
        <div className="card group border hover:shadow-lg hover:shadow-primary/10 transition-all hover:-translate-y-2">
            <figure className=" relative overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl text-center">{name}</h2>
                {/* <div className='flex justify-between items-center gap-2 w-full'>
                    <div className=''> <p>{category}</p></div>
                    <div className='flex items-center gap-1'><span className=''><IoCartOutline className='' /> </span> <span>{availableQuantity}</span></div>
                </div> */}
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