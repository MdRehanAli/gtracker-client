import React from 'react';
import { HiMiniPencilSquare } from 'react-icons/hi2';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const ManageProducts = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

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
            <div className=' shadow-xl bg-gray-200 rounded-2xl p-5 py-10 md:p-10 w-11/12 mx-auto'>
                <div className='flex justify-center text-7xl'><HiMiniPencilSquare className='p-4 bg-gray-300 rounded-3xl' /></div>
                <h1 className='text-3xl md:text-5xl font-bold text-center my-5'>Manage Products</h1>

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
                                products.map((product, index) => <tr key={product._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex justify-center items-center gap-3">
                                            <div className="avatar">
                                                <div className="w-20 h-12 rounded-lg">
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