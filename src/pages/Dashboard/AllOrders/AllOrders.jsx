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
            confirmButtonColor: "#3085d6",
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
                <div className='flex justify-center text-7xl'><MdListAlt className='p-4 bg-gray-300 rounded-3xl' /></div>
                <h1 className='text-3xl md:text-5xl font-bold text-center my-5'>All Orders : {orders.length}</h1>

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
                                        <p className={`${order.status === 'approved' ? 'text-green-500' : order.status === 'rejected' ? 'text-red-500' : 'text-black'}`}>{order.status}</p>
                                    </td>
                                    <td className='flex justify-center items-center gap-2 '>
                                        <button onClick={() => handleApproval(order)} className='btn '>
                                            <FaUserCheck />
                                        </button>
                                        <button onClick={() => handleRejection(order)} className='btn'>
                                            <IoPersonRemoveOutline />
                                        </button>
                                        <button onClick={()=> handleDeleteOrder(order._id)} className='btn '>
                                            <FaTrash></FaTrash>
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