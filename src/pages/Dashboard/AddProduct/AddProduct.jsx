import React from 'react';
import { useForm } from 'react-hook-form';
import { LiaHandsHelpingSolid } from 'react-icons/lia';
import { MdAddShoppingCart } from 'react-icons/md';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useNavigate } from 'react-router';

const AddProduct = () => {

    // const products = useLoaderData();
    // const { name, price, minimumOrder, availableQuantity, } = products;

    const { register, handleSubmit, formState: { errors } } = useForm();
    // const { user } = useAuth();

    const navigate = useNavigate()

    const axiosSecure = useAxiosSecure()

    const handleOrderSubmit = (data) => {
        console.log(data);

        // const perPrice = parseFloat(data.price)
        // const quantity = data.orderQuantity;
        // // let totalPrice = 0;
        // const totalPrice = perPrice * quantity;
        // data.orderPrice = totalPrice;


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm and Pay"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    axiosSecure.post('/products', data)
                        .then(res => {
                            console.log("After Saving data: ", res.data);

                            if (res.data.insertedId) {
                                navigate('/dashboard/manage-products')
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
        <div className='mx-auto w-11/12 md:h-full my-20'>
            <div className='text-center'>
                <div className='flex justify-center text-7xl mb-5'><MdAddShoppingCart className='p-4 bg-gray-300 rounded-3xl' /></div>
                <h1 className='text-3xl md:text-5xl font-bold'>Add a New Product</h1>
                <p className='mt-3 mb-12 md:w-2/3 mx-auto'>Easily add new garments to your catalog by providing essential details such as images, pricing, and stock information. Keep your product listings accurate and up to date for smooth order management and tracking.</p>

            </div>
            <div className=' shadow-xl bg-gray-200 rounded-2xl p-5 md:p-10 md:w-11/12 mx-auto'>
                <form onSubmit={handleSubmit(handleOrderSubmit)}>
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
                            <input type="number" {...register('video')} className="input w-full" placeholder="Demo Video Link" />

                            {/* Payment Options Field  */}
                            <label className="text-black label mt-2">Payment Options</label>
                            <select {...register('category', { required: true })} className="select w-full">
                                <option disabled={true}>Choose a Payment Options</option>
                                <option value="shirt">Cash on Delivery </option>
                                <option value="pant">PayFast</option>
                            </select>
                            {errors.category?.type === "required" && <p className='text-red-500'>Payment Options is Required</p>}
                        </div>
                    </fieldset>
                    <button className="btn btn-primary mt-4 w-full">Submit Order</button>

                </form>
            </div>
        </div >
    );
};

export default AddProduct;