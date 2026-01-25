import React from 'react';
import { useForm } from 'react-hook-form';
import { MdAddShoppingCart } from 'react-icons/md';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';

const AddProduct = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate()

    const axiosSecure = useAxiosSecure()

    const { user } = useAuth()

    const handleOrderSubmit = (data) => {
        const productImage = data.image[0];
        console.log(data);

        const formdata = new FormData();
        formdata.append('image', productImage);

        const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`

        axios.post(image_API_URL, formdata)
            .then(res => {

                const image = res.data.data.url;

                // Create user in the database 
                const productInfo = {
                    name: data.name,
                    largeDescription: data.largeDescription,
                    category: data.category,
                    price: data.price,
                    availableQuantity: data.availableQuantity,
                    minimumOrder: data.minimumOrder,
                    image: image,
                    video: data.video,
                    paymentOptions: data.paymentOptions,
                    email: user.email,
                    displayName: user.displayName
                }

                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    iconColor: "#0f172b",
                    color: "#0f172b",
                    background: "#7C3AED",
                    confirmButtonColor: "#0f172b",
                    showCancelButton: true,
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Confirm to Add Product"
                }).then((result) => {
                    if (result.isConfirmed) {
                        axiosSecure.post('/all-products', productInfo)
                            .then(res => {

                                if (res.data.insertedId) {
                                    navigate('/dashboard/manage-products')
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        iconColor: "#0f172b",
                                        color: "#0f172b",
                                        background: "#7C3AED",
                                        title: "Product Added. Show all products.",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                }
                            })
                    }
                })
            })
            .catch(error => {
                toast.error(error.message);
            })
    }

    return (
        <div className='mx-auto my-20 bg-accent w-11/12 rounded-xl'>
            <div className=' shadow-xl bg-linear-to-r from-primary/30 to-accent rounded-xl py-10 p-5 md:p-20'>
                <div className="mb-12 text-center">
                    <div className='flex justify-center items-center gap-2'>
                        <div className='flex justify-center text-primary animate-[ping_2s_linear_infinite] hover:animate-none '><MdAddShoppingCart className='text-3xl md:text-4xl font-extrabold' /></div>
                        <h1 className='text-3xl md:text-4xl font-bold text-primary'>Add a New Product</h1>
                    </div>
                </div>
                <form onSubmit={handleSubmit(handleOrderSubmit)}>
                    <fieldset className="fieldset flex flex-col md:flex-row md:gap-10">

                        <div className='flex-1'>
                            {/* Product Title Field  */}
                            <label className="label mt-2 text-primary">Product Title</label>
                            <input type="text" {...register('name', { required: true })} className="input w-full border border-primary bg-accent outline-primary text-primary" placeholder="Product Name" />
                            {errors.name?.type === "required" && <p className='text-red-500'>Product Title is Required</p>}

                            {/* Product Description Field  */}
                            <label className="label mt-2 text-primary">Product Description</label>
                            <textarea rows={4} placeholder="Product Description" className='p-3 w-full border border-primary ou rounded-sm text-sm bg-accent outline-primary text-primary' name="" {...register('largeDescription', { required: true })} id=""></textarea>
                            {errors.largeDescription?.type === "required" && <p className='text-red-500'>Product Description is Required</p>}

                            {/* Category Field  */}
                            <label className=" label">Select Category</label>
                            <select {...register('category', { required: true })} className="select w-full border border-primary bg-accent outline-primary text-primary">
                                <option disabled={true}>Choose a Category</option>
                                <option value="shirt">Shirt</option>
                                <option value="pant">Pant</option>
                                <option value="jacket">Jacket</option>
                                <option value="accessories">Accessories</option>
                            </select>
                            {errors.category?.type === "required" && <p className='text-red-500'>Category is Required</p>}

                            {/* Price Field  */}
                            <label className="label mt-2 text-primary">Price</label>
                            <input type="number" {...register('price', { required: true })} className="input w-full border border-primary bg-accent outline-primary text-primary" placeholder="Price" />
                            {errors.price?.type === "required" && <p className='text-red-500'>Price is Required</p>}


                        </div>

                        <div className='flex-1'>
                            {/* Available Quantity Field  */}
                            <label className="label mt-2 text-primary">Available Quantity</label>
                            <input type="number" {...register('availableQuantity', { required: true })} className="input w-full border border-primary bg-accent outline-primary text-primary" placeholder="Available Quantity" />
                            {errors.availableQuantity?.type === "required" && <p className='text-red-500'>Available Quantity is Required</p>}

                            {/* Minimum Order Quantity (MOQ) Field  */}
                            <label className="label mt-2 text-primary">Minimum Order Quantity (MOQ)</label>
                            <input type="number" {...register('minimumOrder', { required: true })} className="input w-full border border-primary bg-accent outline-primary text-primary" placeholder="Minimum Order Quantity (MOQ)" />
                            {errors.minimumOrder?.type === "required" && <p className='text-red-500'>Minimum Order Quantity (MOQ) is Required</p>}

                            {/* Product Image Field  */}
                            <label className="label mt-2 text-primary">Product Image</label>
                            <input type="file" {...register('image', { required: true })} className="file-input w-full border border-primary bg-accent outline-primary text-primary" placeholder="Your Photo" />
                            {errors.image?.type === "required" && <p className='text-red-500'>Product Image is Required.</p>}

                            {/* Demo Video Link Field  */}
                            <label className="label mt-2 text-primary">Demo Video Link</label>
                            <input type="text" {...register('video', { required: true })} className="input w-full border border-primary bg-accent outline-primary text-primary" placeholder="Demo Video Link" />
                            {errors.video?.type === "required" && <p className='text-red-500'>Product Image is Required.</p>}

                            {/* Payment Options Field  */}
                            <label className="label mt-2 text-primary">Payment Options</label>
                            <select {...register('paymentOptions', { required: true })} className="select w-full border border-primary bg-accent outline-primary text-primary">
                                <option disabled={true}>Choose a Payment Options</option>
                                <option value="cashOnDelivery">Cash on Delivery </option>
                                <option value="payFast">PayFast</option>
                            </select>
                            {errors.paymentOptions?.type === "required" && <p className='text-red-500'>Payment Options is Required</p>}
                        </div>
                    </fieldset>
                    <button className="btn btn-primary mt-4 w-full">Submit Product</button>

                </form>
            </div>
        </div >
    );
};

export default AddProduct;