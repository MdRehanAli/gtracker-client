import React from 'react';
import { MdScreenshotMonitor } from 'react-icons/md';
import { Link, useLoaderData } from 'react-router';

const ViewOrder = () => {
    const orders = useLoaderData();
    console.log(orders);
    const { contactNumber, createdAt, deliveryAddress, email, firstName, instructions, lastName, orderPrice, orderQuantity, price, productTitle, status, image, _id } = orders;

    return (
        <div className='my-20'>
            <div className=' shadow-xl bg-gray-200 rounded-2xl py-10 p-5 md:p-10 w-11/12 mx-auto'>
                <div className='flex justify-center text-7xl'><MdScreenshotMonitor className='p-4 bg-gray-300 rounded-3xl' /></div>
                <h1 className='text-3xl md:text-5xl font-bold text-center my-5'>Order Details</h1>

                <div className="card shadow-lg md:w-1/2 mx-auto mt-10">
                    <figure>
                        <img
                            src={image}
                            alt={firstName}
                            className='lg:w-1/2 rounded-2xl' />
                    </figure>
                    <div className="card-body text-center rounded-2xl">
                        <div className='flex flex-col gap-3'>
                            <h2 className="text-2xl font-bold md:text-5xl">{productTitle}</h2>
                            <p className='text-xl'><span className='font-bold'>Ordered by: </span> {firstName} {lastName}</p>
                            <p className='text-xl'><span className='font-bold'>Delivery Address: </span> {deliveryAddress}</p>

                            <p className='text-xl'><span className='font-bold'>Contact: </span> {contactNumber}</p>
                            <p className='font-bold text-xl'>Price per Unit: ${price}</p>
                            <p className='text-xl'><span className='font-bold'>Quantity: </span>{orderQuantity}</p>
                            <p className='text-4xl'>Total Price: <span className='font-bold'>${orderPrice}</span></p>
                            <div className="card-actions justify-end">
                                <p><span className='font-bold'>Order Status:</span> {status} </p>
                            </div>
                            <p><span className='font-bold'>Ordered At: </span> {new Date(createdAt).toLocaleString("en-GB", {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                                hour12: true,
                            })}</p>
                            <Link to={`/dashboard/my-order`} className="btn btn-primary w-full">Go Back</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ViewOrder;