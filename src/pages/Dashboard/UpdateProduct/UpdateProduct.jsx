import React from 'react';
import { useForm } from 'react-hook-form';
import { HiMiniPencilSquare } from 'react-icons/hi2';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const UpdateProduct = () => {

    const products = useLoaderData();
    console.log(products);
    const { _id, image, name, category, largeDescription, minimumOrder, availableQuantity, price, paymentOptions, video } = products;

    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm();

    const axiosSecure = useAxiosSecure();


    const handleUpdateProduct = data => {
        const productUpdateInfo = {
            name: data.name,
            largeDescription: data.largeDescription,
            category: data.category,
            price: Number(data.price),
            availableQuantity: Number(data.availableQuantity),
            minimumOrder: Number(data.minimumOrder),
            video: data.video,
            paymentOptions: data.paymentOptions
        }

        Swal.fire({
            title: "Are you sure?",
            text: "You want to update this product?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, update it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure
                    .patch(`/all-products/${_id}`, productUpdateInfo)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            navigate('/dashboard/manage-products')
                            Swal.fire("Updated!", "Product updated successfully", "success");
                        }
                    })
                    .catch(err => {
                        console.error(err);
                        Swal.fire("Error!", "Update failed", "error");
                    });
            }
        });
    };


    return (
        <div className='mx-auto md:h-full my-20'>
            <div className=' shadow-xl bg-gray-200 rounded-xl py-10 p-5 md:p-10 w-11/12 mx-auto'>
                <div className='flex justify-center text-7xl'><HiMiniPencilSquare className='p-4 bg-gray-300 rounded-xl' /></div>
                <h1 className='text-3xl md:text-5xl font-bold text-center my-5'>Update Product</h1>
                <form onSubmit={handleSubmit(handleUpdateProduct)}>
                    <fieldset className="fieldset flex flex-col md:flex-row md:gap-10">

                        <div className='flex-1'>
                            {/* Product Title Field  */}
                            <label className="text-black label mt-2">Product Title</label>
                            <input type="text" {...register('name', { required: true })} defaultValue={name} className="input w-full" placeholder="Product Name" />
                            {errors.name?.type === "required" && <p className='text-red-500'>Product Title is Required</p>}

                            {/* Product Description Field  */}
                            <label className="text-black label mt-2">Product Description</label>
                            <textarea rows={4} placeholder="Product Description" className='p-3 w-full border border-gray-300 rounded-sm text-sm bg-base-100' name="" {...register('largeDescription', { required: true })} defaultValue={largeDescription} id=""></textarea>
                            {errors.largeDescription?.type === "required" && <p className='text-red-500'>Product Description is Required</p>}

                            {/* Category Field  */}
                            <label className="text-black label">Select Category</label>
                            <select {...register('category', { required: true })} defaultValue={category} className="select w-full">
                                <option >Choose a Category</option>
                                <option value="shirt">Shirt</option>
                                <option value="pant">Pant</option>
                                <option value="jacket">Jacket</option>
                                <option value="accessories">Accessories</option>
                            </select>
                            {errors.category?.type === "required" && <p className='text-red-500'>Category is Required</p>}

                            {/* Price Field  */}
                            <label className="text-black label mt-2">Price</label>
                            <input type="number" {...register('price', { required: true })} defaultValue={price} className="input w-full" placeholder="Price" />
                            {errors.price?.type === "required" && <p className='text-red-500'>Price is Required</p>}

                        </div>

                        <div className='flex-1'>
                            {/* Available Quantity Field  */}
                            <label className="text-black label mt-2">Available Quantity</label>
                            <input type="number" {...register('availableQuantity', { required: true })} defaultValue={availableQuantity} className="input w-full" placeholder="Available Quantity" />
                            {errors.availableQuantity?.type === "required" && <p className='text-red-500'>Available Quantity is Required</p>}

                            {/* Minimum Order Quantity (MOQ) Field  */}
                            <label className="text-black label mt-2">Minimum Order Quantity (MOQ)</label>
                            <input type="number" {...register('minimumOrder', { required: true })} defaultValue={minimumOrder} className="input w-full" placeholder="Minimum Order Quantity (MOQ)" />
                            {errors.minimumOrder?.type === "required" && <p className='text-red-500'>Minimum Order Quantity (MOQ) is Required</p>}

                            {/* Product Image Field  */}
                            {/* <label className="text-black label mt-2">Product Image</label>
                            <input type="file" {...register('image', { required: true })} className="file-input w-full" placeholder="Your Photo" />
                            {errors.image?.type === "required" && <p className='text-red-500'>Product Image is Required.</p>} */}

                            {/* Demo Video Link Field  */}
                            <label className="text-black label mt-2">Demo Video Link</label>
                            <input type="text" {...register('video')} defaultValue={video} className="input w-full" placeholder="Demo Video Link" />

                            {/* Payment Options Field  */}
                            <label className="text-black label mt-2">Payment Options</label>
                            <select {...register('paymentOptions', { required: true })} defaultValue={paymentOptions} className="select w-full">
                                <option disabled={true}>Choose a Payment Options</option>
                                <option value="cashOnDelivery">Cash on Delivery </option>
                                <option value="payFast">PayFast</option>
                            </select>
                            {errors.paymentOptions?.type === "required" && <p className='text-red-500'>Payment Options is Required</p>}
                        </div>
                    </fieldset>
                    <button className="btn btn-primary mt-4 w-full">Update</button>

                </form>
            </div>
        </div >
    );
};

export default UpdateProduct;