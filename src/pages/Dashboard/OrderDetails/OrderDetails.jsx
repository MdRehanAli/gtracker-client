import React from 'react';
import { MdScreenshotMonitor } from 'react-icons/md';
import { MdOutlineProductionQuantityLimits, MdOutlineScale } from 'react-icons/md';
import { Link, useLoaderData } from 'react-router';
import { BsCartCheck } from "react-icons/bs";
import { TbShoppingCartPin } from "react-icons/tb";
import { IoCallOutline, IoTimeOutline } from 'react-icons/io5';
import { GrStatusGood } from 'react-icons/gr';

const OrderDetails = () => {

    const orders = useLoaderData();
    console.log(orders);
    const { contactNumber, createdAt, deliveryAddress, email, firstName, instructions, lastName, orderPrice, orderQuantity, price, productTitle, status, image, _id } = orders;
    return (
        <div className='mx-auto my-20 bg-accent w-11/12 rounded-xl'>
            <div className=' shadow-xl bg-linear-to-r from-primary/30 to-accent rounded-xl py-10 p-5 md:p-20'>
                <div className="mb-12 text-center">
                    <div className='flex justify-center items-center gap-2'>
                        <div className='flex justify-center text-primary animate-[ping_2s_linear_infinite] hover:animate-none '><MdScreenshotMonitor className='text-3xl md:text-4xl font-extrabold' /></div>
                        <h1 className='text-3xl md:text-4xl font-bold text-primary'>Order Details</h1>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-5 md:gap-10">
                    <figure className='w-full flex-1'>
                        <img
                            src={image}
                            alt={firstName}
                            className='rounded-xl w-full' />
                    </figure>
                    <div className="flex-1 text-center rounded-xl">
                        <div className='flex flex-col gap-2 md:text-left text-center'>
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">{productTitle}</h2>
                            <p className='font-bold text-xl'><span className='font-bold'><BsCartCheck className='inline text-primary mr-1' /> </span> {firstName} {lastName}</p>
                            <p className='font-bold text-xl'><span className='font-bold'><TbShoppingCartPin className='inline text-primary mr-1' /> </span> {deliveryAddress}</p>

                            <p className='text-xl font-bold'><span><IoCallOutline className='inline text-primary mr-1' /> </span> {contactNumber}</p>
                            <p className='font-bold text-xl'><MdOutlineScale className='inline text-primary mr-1' /> ${price}</p>
                            <p className='text-xl font-bold'><span className='font-bold'><MdOutlineProductionQuantityLimits className='inline text-primary mr-1' /> </span>{orderQuantity}</p>
                            <p className='text-5xl font-bold text-center text-primary'>${orderPrice}</p>
                            <div className="card-actions justify-end">
                                <p><span className='font-bold'><GrStatusGood className='inline text-primary mr-1' /></span> {status} </p>
                            </div>
                            <p><span className='font-bold'><IoTimeOutline className='inline text-primary mr-1' /> </span> {new Date(createdAt).toLocaleString("en-GB", {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                                hour12: true,
                            })}</p>
                            <Link to={`/dashboard/pending-orders`} className="btn btn-primary w-full">Go Back</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;