import React from 'react';
import { TbLayoutGrid } from 'react-icons/tb';
import { useLoaderData } from 'react-router';

const AllProducts = () => {

    const products = useLoaderData();
    // const { _id, image, name, category, largeDescription, minimumOrder, availableQuantity, price, paymentOptions, video } = products;

    return (
        <div className='mx-auto my-20 bg-accent w-11/12 rounded-xl'>
            <div className=' shadow-xl bg-linear-to-r from-primary/30 to-accent rounded-xl py-10 p-5 md:p-20'>
                <div className="mb-12 text-center">
                    <div className='flex justify-center items-center gap-2'>
                        <div className='flex justify-center text-primary animate-[bounce_2s_linear_infinite] hover:animate-none '><TbLayoutGrid className='text-3xl md:text-4xl font-extrabold' /></div>
                        <h1 className='text-3xl md:text-4xl font-bold text-primary'>All Products {products.length}</h1>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="table table-zebra text-center">
                        {/* head */}
                        <thead>
                            <tr className=''>
                                <th>No.</th>
                                <th>Image</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Created By</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                products.map((product, index) => <tr key={product._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex justify-center items-center gap-3">
                                            <div className="avatar">
                                                <div className="w-20 h-12 rounded-xl">
                                                    <img className=''
                                                        src={product.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.category}</td>
                                    <td>{product.displayName === undefined ? 'GTracker' : product.displayName}</td>
                                    <td className='flex justify-center items-center gap-2'>

                                        <button className='btn btn-primary'>Show On Home</button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllProducts;