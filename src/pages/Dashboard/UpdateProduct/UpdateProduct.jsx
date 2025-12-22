import React from 'react';
import { useForm } from 'react-hook-form';
import { HiMiniPencilSquare } from 'react-icons/hi2';
import { useLoaderData } from 'react-router';

const UpdateProduct = () => {

    const products = useLoaderData();
    console.log(products);
    const { _id, image, name, category, largeDescription, minimumOrder, availableQuantity, price, paymentOptions, video } = products;

    const { register, handleSubmit, formState: { errors } } = useForm();


    const handleUpdateProduct = id => {
        const productUpdateInfo = {
            name: products.name,
            image: products.image,
            largeDescription: products.largeDescription,
            category: products.category,
            price: products.price,
            availableQuantity: products.availableQuantity,
            minimumOrder: products.minimumOrder,
            video: products.video,
            paymentOptions: products.paymentOptions
        }

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`all-products/${id}`, productUpdateInfo)
                    .then(res => {
                        console.log(res.data);

                        if (res.data.modifiedCount) {
                            refetch();

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Product has been deleted.",
                                icon: "success"
                            });

                        }
                    })
            }
        });
    }


    return (
        <div className='mx-auto md:h-full my-20'>
            <div className=' shadow-xl bg-gray-200 rounded-2xl py-10 p-5 md:p-10 w-11/12 mx-auto'>
                <div className='flex justify-center text-7xl'><HiMiniPencilSquare className='p-4 bg-gray-300 rounded-3xl' /></div>
                <h1 className='text-3xl md:text-5xl font-bold text-center my-5'>Update Product</h1>
                <form onSubmit={handleSubmit(handleUpdateProduct)}>
                    <fieldset className="fieldset flex flex-col md:flex-row md:gap-10">

                        <div className='flex-1'>
                            {/* Product Title Field  */}
                            <label className="text-black label mt-2">Product Title</label>
                            <input type="text" {...register('name', { required: true })} className="input w-full" placeholder="Product Name" />
                            {errors.name?.type === "required" && <p className='text-red-500'>Product Title is Required</p>}

                            {/* Product Description Field  */}
                            <label className="text-black label mt-2">Product Description</label>
                            <textarea rows={4} placeholder="Product Description" className='p-3 w-full border border-gray-300 rounded-sm text-sm bg-base-100' name="" {...register('largeDescription', { required: true })} id=""></textarea>
                            {errors.largeDescription?.type === "required" && <p className='text-red-500'>Product Description is Required</p>}

                            {/* Category Field  */}
                            <label className="text-black label">Select Category</label>
                            <select {...register('category', { required: true })} className="select w-full">
                                <option >Choose a Category</option>
                                <option value="shirt">Shirt</option>
                                <option value="pant">Pant</option>
                                <option value="jacket">Jacket</option>
                                <option value="accessories">Accessories</option>
                            </select>
                            {errors.category?.type === "required" && <p className='text-red-500'>Category is Required</p>}

                            {/* Price Field  */}
                            <label className="text-black label mt-2">Price</label>
                            <input type="number" {...register('price', { required: true })} className="input w-full" placeholder="Price" />
                            {errors.price?.type === "required" && <p className='text-red-500'>Price is Required</p>}

                        </div>

                        <div className='flex-1'>
                            {/* Available Quantity Field  */}
                            <label className="text-black label mt-2">Available Quantity</label>
                            <input type="number" {...register('availableQuantity', { required: true })} className="input w-full" placeholder="Available Quantity" />
                            {errors.availableQuantity?.type === "required" && <p className='text-red-500'>Available Quantity is Required</p>}

                            {/* Minimum Order Quantity (MOQ) Field  */}
                            <label className="text-black label mt-2">Minimum Order Quantity (MOQ)</label>
                            <input type="number" {...register('minimumOrder', { required: true })} className="input w-full" placeholder="Minimum Order Quantity (MOQ)" />
                            {errors.minimumOrder?.type === "required" && <p className='text-red-500'>Minimum Order Quantity (MOQ) is Required</p>}

                            {/* Product Image Field  */}
                            <label className="text-black label mt-2">Product Image</label>
                            <input type="file" {...register('image', { required: true })} className="file-input w-full" placeholder="Your Photo" />
                            {errors.image?.type === "required" && <p className='text-red-500'>Product Image is Required.</p>}

                            {/* Demo Video Link Field  */}
                            <label className="text-black label mt-2">Demo Video Link</label>
                            <input type="text" {...register('video')} className="input w-full" placeholder="Demo Video Link" />

                            {/* Payment Options Field  */}
                            <label className="text-black label mt-2">Payment Options</label>
                            <select {...register('paymentOptions', { required: true })} className="select w-full">
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