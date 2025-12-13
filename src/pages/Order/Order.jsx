import React from 'react';
import { useForm } from 'react-hook-form';
import { LiaHandsHelpingSolid } from "react-icons/lia";
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import { useLoaderData } from 'react-router';

const Order = () => {
    const products = useLoaderData();
    const { name, price } = products;

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();

    const handleOrderSubmit = (data, event) => {
        console.log(data);

        Swal.fire({
            position: "center",
            icon: "success",
            title: "Order has been Placed!",
            showConfirmButton: false,
            timer: 1500
        });

        event.target.reset()
    }

    return (
        <div className='max-w-7xl mx-auto w-11/12 my-20'>
            <div className='text-center'>
                <div className='flex justify-center text-7xl mb-5'><LiaHandsHelpingSolid className='p-4 bg-gray-300 rounded-3xl' /></div>
                <h1 class='text-3xl md:text-5xl font-bold'>Place Your Order Today</h1>
                <p class='mt-3 mb-12 md:w-2/3 mx-auto'>Order high-quality garments with ease and confidence. Choose your preferred product, review the details, and complete the booking process in just a few steps for fast and reliable service.</p>

            </div>
            <div className=' shadow-xl bg-gray-200 rounded-2xl p-5 md:p-10 md:w-3/4 mx-auto'>
                <form onSubmit={handleSubmit(handleOrderSubmit)}>
                    <fieldset className="fieldset flex flex-col md:flex-row md:gap-10">

                        <div className='flex-1'>
                            {/* Email Field  */}
                            <label className="label mt-2">Email</label>
                            <input type="email" {...register('email', { required: true })} className="input w-full" placeholder="Email" defaultValue={user?.email} readOnly />
                            {errors.email?.type === "required" && <p className='text-red-500'>Email is Required</p>}

                            {/* Product Title Field  */}
                            <label className="label mt-2">Product Title</label>
                            <input type="text" {...register('productTitle', { required: true })} className="input w-full" placeholder="Name" defaultValue={name} readOnly />
                            {errors.productTitle?.type === "required" && <p className='text-red-500'>Product Title is Required</p>}

                            {/* Price Field  */}
                            <label className="label mt-2">Price</label>
                            <input type="text" {...register('price', { required: true })} className="input w-full" placeholder="Price" defaultValue={price} readOnly />
                            {errors.price?.type === "required" && <p className='text-red-500'>Price is Required</p>}

                            {/* First Name Field  */}
                            <label className="label mt-2">First Name</label>
                            <input type="text" {...register('firstName', { required: true, minLength: 3 })} className="input w-full" placeholder="First Name" />
                            {errors.firstName?.type === "required" && <p className='text-red-500'>First Name is Required</p>}
                            {errors.firstName?.type === "minLength" && <p className='text-red-500'>First Name must have at least 3 Character</p>}

                            {/* Last Name Field  */}
                            <label className="label mt-2">Last Name</label>
                            <input type="text" {...register('lastName', { required: true, minLength: 3 })} className="input w-full" placeholder="Last Name" />
                            {errors.lastName?.type === "required" && <p className='text-red-500'>Last Name is Required</p>}
                            {errors.lastName?.type === "minLength" && <p className='text-red-500'>Last Name must have at least 3 Character</p>}
                        </div>

                        <div className='flex-1'>
                            {/* Order Quantity Field  */}
                            <label className="label mt-2">Order Quantity</label>
                            <input type="number" {...register('orderQuantity', { required: true, })} className="input w-full" placeholder="Order Quantity" />
                            {errors.orderQuantity?.type === "required" && <p className='text-red-500'>Order Quantity is Required</p>}

                            {/* Order Price Field  */}
                            <label className="label mt-2">Order Price</label>
                            <input type="number" {...register('orderPrice', { required: true, })} className="input w-full" placeholder="Order Price" readOnly />
                            {errors.orderPrice?.type === "required" && <p className='text-red-500'>Order Price is Required</p>}

                            {/* Contact Number Field  */}
                            <label className="label mt-2">Contact Number</label>
                            <input type="number" {...register('contactNumber', { required: true, })} className="input w-full" placeholder="Contact Number" />
                            {errors.contactNumber?.type === "required" && <p className='text-red-500'>Contact Number is Required</p>}

                            {/* Delivery Address Field  */}
                            <label className="label mt-2">Delivery Address</label>
                            <input type="text" {...register('deliveryAddress', { required: true, })} className="input w-full" placeholder="Delivery Address" />
                            {errors.deliveryAddress?.type === "required" && <p className='text-red-500'>Delivery Address is Required</p>}

                            {/* Additional Notes/Instructions Field  */}
                            <label className="label mt-2">Additional Notes/Instructions</label>
                            <input type="text" {...register('instructions', { required: true, })} className="input w-full" placeholder="Additional Notes/Instructions" />
                            {errors.instructions?.type === "required" && <p className='text-red-500'>Additional Notes/Instructions is Required</p>}
                        </div>
                    </fieldset>
                    <button className="btn btn-neutral mt-4 w-full">Submit Order</button>

                </form>
            </div>
        </div >
    );
};

export default Order;