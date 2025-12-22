import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { LiaHandsHelpingSolid } from "react-icons/lia";
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import { useLoaderData, useNavigate } from 'react-router';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Order = () => {
    const products = useLoaderData();
    const { name, price, minimumOrder, availableQuantity, } = products;
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors }
    } = useForm();

    const { user } = useAuth();

    const navigate = useNavigate()

    const axiosSecure = useAxiosSecure()

    const orderQuantity = watch("orderQuantity");

    useEffect(() => {
        const qty = Number(orderQuantity) || 0;
        const perUnitPrice = Number(price) || 0;

        const totalPrice = qty * perUnitPrice;

        setValue("orderPrice", totalPrice);
    }, [orderQuantity, price, setValue]);

    const handleOrderSubmit = (data) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm and Pay"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.post('/order', data)
                    .then(res => {
                        console.log("After Saving data: ", res.data);

                        if (res.data.insertedId) {
                            navigate('/dashboard/my-order')
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Order has created. Please Pay.",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })

            }
        });
    }

    return (
        <div className='max-w-7xl mx-auto w-11/12 my-20'>
            <div className='text-center'>
                <div className='flex justify-center text-7xl mb-5'><LiaHandsHelpingSolid className='p-4 bg-gray-300 rounded-3xl' /></div>
                <h1 className='text-3xl md:text-5xl font-bold'>Place Your Order Today</h1>
                <p className='mt-3 mb-12 md:w-2/3 mx-auto'>Order high-quality garments with ease and confidence. Choose your preferred product, review the details, and complete the booking process in just a few steps for fast and reliable service.</p>

            </div>
            <div className=' shadow-xl bg-gray-200 rounded-2xl p-5 md:p-10 md:w-3/4 mx-auto'>
                <form onSubmit={handleSubmit(handleOrderSubmit)}>
                    <fieldset className="fieldset flex flex-col md:flex-row md:gap-10">

                        <div className='flex-1'>
                            {/* Email Field  */}
                            <label className="text-black label mt-2">Email</label>
                            <input type="email" {...register('email', { required: true })} className="input w-full" placeholder="Email" defaultValue={user?.email} readOnly />
                            {errors.email?.type === "required" && <p className='text-red-500'>Email is Required</p>}

                            {/* Product Title Field  */}
                            <label className="text-black label mt-2">Product Title</label>
                            <input type="text" {...register('productTitle', { required: true })} className="input w-full" placeholder="Name" defaultValue={name} readOnly />
                            {errors.productTitle?.type === "required" && <p className='text-red-500'>Product Title is Required</p>}

                            {/* Price Field  */}
                            <label className="text-black label mt-2">Price</label>
                            <input type="text" {...register('price', { required: true })} className="input w-full" placeholder="Price" defaultValue={price} readOnly />
                            {errors.price?.type === "required" && <p className='text-red-500'>Price is Required</p>}

                            {/* First Name Field  */}
                            <label className="text-black label mt-2">First Name</label>
                            <input type="text" {...register('firstName', { required: true, minLength: 3 })} className="input w-full" placeholder="First Name" />
                            {errors.firstName?.type === "required" && <p className='text-red-500'>First Name is Required</p>}
                            {errors.firstName?.type === "minLength" && <p className='text-red-500'>First Name must have at least 3 Character</p>}

                            {/* Last Name Field  */}
                            <label className="text-black label mt-2">Last Name</label>
                            <input type="text" {...register('lastName', { required: true, minLength: 3 })} className="input w-full" placeholder="Last Name" />
                            {errors.lastName?.type === "required" && <p className='text-red-500'>Last Name is Required</p>}
                            {errors.lastName?.type === "minLength" && <p className='text-red-500'>Last Name must have at least 3 Character</p>}
                        </div>

                        <div className='flex-1'>
                            {/* Order Quantity Field  */}
                            <label className="text-black label mt-2">Order Quantity</label>
                            <input type="number" {...register('orderQuantity', {
                                required: "Order quantity is required",
                                min: {
                                    value: minimumOrder,
                                    message: `Minimum order quantity is ${minimumOrder}`
                                },
                                max: {
                                    value: availableQuantity,
                                    message: `Maximum available quantity is ${availableQuantity}`
                                },
                                valueAsNumber: true
                            })}
                                className="input w-full" placeholder="Order Quantity" />
                            {errors.orderQuantity && (
                                <p className="text-red-500">{errors.orderQuantity.message}</p>
                            )}

                            {/* Order Price Field  */}
                            <label className="label mt-2">Order Price</label>
                            <input
                                type="number"
                                {...register('orderPrice', { required: true })}
                                className="input w-full bg-gray-100 cursor-not-allowed"
                                readOnly
                            />
                            {errors.orderPrice?.type === "required" && (
                                <p className='text-red-500'>Order Price is Required</p>
                            )}


                            {/* Contact Number Field  */}
                            <label className="text-black label mt-2">Contact Number</label>
                            <input type="number" {...register('contactNumber', { required: true, minLength: 11 })} className="input w-full" placeholder="Contact Number" />
                            {errors.contactNumber?.type === "required" && <p className='text-red-500'>Contact Number is Required</p>}
                            {errors.contactNumber?.type === "minLength" && <p className='text-red-500'>Contact Number at least 11 character.</p>}

                            {/* Delivery Address Field  */}
                            <label className="text-black label mt-2">Delivery Address</label>
                            <input type="text" {...register('deliveryAddress', { required: true, })} className="input w-full" placeholder="Delivery Address" />
                            {errors.deliveryAddress?.type === "required" && <p className='text-red-500'>Delivery Address is Required</p>}

                            {/* Additional Notes/Instructions Field  */}
                            <label className="text-black label mt-2">Additional Notes/Instructions</label>
                            <input type="text" {...register('instructions', { required: true, })} className="input w-full" placeholder="Additional Notes/Instructions" />
                            {errors.instructions?.type === "required" && <p className='text-red-500'>Additional Notes/Instructions is Required</p>}
                        </div>
                    </fieldset>
                    <button className="btn btn-primary mt-4 w-full">Submit Order</button>

                </form>
            </div>
        </div >
    );
};

export default Order;