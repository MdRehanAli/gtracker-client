import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { FaTrash, FaUserCheck } from 'react-icons/fa6';
import { IoPersonRemoveOutline } from 'react-icons/io5';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { MdListAlt } from 'react-icons/md';

const AllOrders = () => {

    const axiosSecure = useAxiosSecure();
    const { data: orders = [], refetch } = useQuery({
        queryKey: ['orders', 'pending'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order');
            return res.data;
        }
    })

    const updateOrderStatus = (order, status) => {
        const updateInfo = { status: status, email: order.email };
        axiosSecure.patch(`/order/${order._id}`, updateInfo)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch();

                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Manager status is set to ${status}.`,
                        iconColor: "#0f172b",
                        color: "#0f172b",
                        background: "#7C3AED",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const handleApproval = order => {
        updateOrderStatus(order, 'approved')
    }

    const handleRejection = order => {
        updateOrderStatus(order, 'rejected')
    }


    const handleDeleteOrder = id => {
        console.log(id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            iconColor: "#0f172b",
            color: "#0f172b",
            background: "#7C3AED",
            confirmButtonColor: "#0f172b",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/order/${id}`)
                    .then(res => {
                        console.log(res.data);

                        if (res.data.deletedCount) {
                            refetch();

                            Swal.fire({
                                title: "Deleted!",
                                text: "Order has been deleted.",
                                icon: "success",
                                iconColor: "#0f172b",
                                color: "#0f172b",
                                background: "#7C3AED",
                                showConfirmButton: false,
                                timer: 1500
                            });

                        }
                    })
            }
        });
    }

    return (
        <div className='mx-auto my-20 bg-accent w-11/12 rounded-xl'>
            <div className=' shadow-xl bg-linear-to-r from-primary/30 to-accent rounded-xl py-10 p-5 md:p-20'>

                <div className="mb-12 text-center">
                    <div className='flex justify-center items-center gap-2'>
                        <div className='flex justify-center text-primary animate-[bounce_2s_linear_infinite] hover:animate-none '><MdListAlt className='text-3xl md:text-4xl font-extrabold' /></div>
                        <h1 className='text-3xl md:text-4xl font-bold text-primary'>All Orders : {orders.length}</h1>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead className='text-center'>
                            <tr>
                                <th>No.</th>
                                <th>Order ID</th>
                                <th>User</th>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>

                            {
                                orders.map((order, index) => <tr key={order._id}>
                                    <th>{index + 1}</th>
                                    <td>{order._id}</td>
                                    <td>{order.firstName} {order.lastName}</td>
                                    <td>{order.productTitle}</td>
                                    <td>{order.orderQuantity}</td>
                                    <td>
                                        <p className={`${order.status === 'approved' ? 'text-green-500' : order.status === 'rejected' ? 'text-red-500' : 'text-yellow-500'}`}>{order.status}</p>
                                    </td>
                                    <td className='flex justify-center items-center gap-2 '>
                                        <button onClick={() => handleApproval(order)} className='btn btn-primary '>
                                            <FaUserCheck className='text-green-500' />
                                            <span className='text-green-500'>Approve</span>
                                        </button>
                                        <button onClick={() => handleRejection(order)} className='btn  btn-primary mr-2'>
                                            <IoPersonRemoveOutline className='text-yellow-500' />
                                            <span className='text-yellow-500'>Reject</span>
                                        </button>
                                        <button onClick={() => handleDeleteOrder(order._id)} className='btn btn-primary'>
                                            <FaTrash className='text-red-500'></FaTrash>
                                            <span className='text-red-500'>Delete</span>
                                        </button>
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

export default AllOrders;