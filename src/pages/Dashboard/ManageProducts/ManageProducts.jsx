import React, { useState } from 'react';
import { HiMiniPencilSquare } from 'react-icons/hi2';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const ManageProducts = () => {


    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const [searchText, setSearchText] = useState('');

    const { data: allProducts = [] } = useQuery({
        queryKey: ['all-products', searchText],
        queryFn: async () => {
            const res = await axiosSecure.get(`/all-products?searchText=${searchText}`);
            return res.data;
        }
    })

    const { data: products = [], refetch } = useQuery({
        queryKey: ['manageProducts', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/all-products?email=${user.email}`);
            return res.data;
        }
    })

    const handleDeleteProduct = id => {
        console.log(id);

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

                axiosSecure.delete(`all-products/${id}`)
                    .then(res => {
                        console.log(res.data);

                        if (res.data.deletedCount) {
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
            <div className=' shadow-xl rounded-xl p-5 py-10 md:p-10 w-11/12 mx-auto border'>
                <div className='flex justify-center text-7xl'><HiMiniPencilSquare className='p-4 rounded-xl' /></div>
                <h1 className='text-3xl md:text-5xl font-bold text-center my-5'>Manage Products</h1>

                <div className='flex justify-center'>
                    <label className="input w-full md:w-1/2 h-14 mb-8">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input onChange={(e) => setSearchText(e.target.value)} type="search" className="grow" placeholder="Search Product Name/Category" />
                    </label>
                </div>

                <div className="overflow-x-auto">
                    <table className="table table-zebra text-center">
                        {/* head */}
                        <thead>
                            <tr className=''>
                                <th>No.</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Payment Mode</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                allProducts.map((product, index) => <tr key={product._id}>
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
                                    <td>{product.paymentOptions}</td>
                                    <td className='flex justify-center items-center gap-2 flex-wrap'>
                                        <Link to={`/dashboard/update-product/${product._id}`} className="btn btn-primary">Update</Link>
                                        {/* <button onClick={() => handleUpdateProduct(product._id)} className='btn btn-primary mr-2'>Update </button> */}
                                        <button onClick={() => handleDeleteProduct(product._id)} className='btn btn-primary'>Delete</button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
};

export default ManageProducts;