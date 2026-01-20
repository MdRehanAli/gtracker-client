import React from 'react';
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router';

const Product = ({ product }) => {
    // console.log(product);

    const { _id, image, name, category, largeDescription, availableQuantity, price } = product

    return (
        <div className="flex flex-col rounded-xl group transition-all hover:scale-105 duration-200  bg-white dark:bg-slate-900 hover:border hover:border-primary dark:hover:border-primary hover:shadow-lg hover:shadow-primary/10 text-slate-900 dark:text-white">
            <figure className=" relative overflow-hidden rounded-t-xl">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-900 group-hover:scale-110 rounded-t-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-center">{name}</h2>
                {/* <div className='flex justify-between items-center gap-2 w-full'>
                    <div className=''> <p>{category}</p></div>
                    <div className='flex items-center gap-1'><span className=''><IoCartOutline className='' /> </span> <span>{availableQuantity}</span></div>
                </div> */}
                {/* <p className=''>{description}</p> */}
                {/* <p className='text-justify '>{largeDescription}</p> */}
                <p className='font-bold text-2xl'>${price}</p>
                <div className="card-actions mt-2">
                    <Link to={`/products-details/${_id}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Product;