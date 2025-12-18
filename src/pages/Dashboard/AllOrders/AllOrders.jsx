import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { FaTrash, FaUserCheck } from 'react-icons/fa6';
import { IoPersonRemoveOutline } from 'react-icons/io5';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

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

    return (
        <div>
            <h1>Manager</h1>

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
                                <td>
                                    <button onClick={() => handleApproval(order)} className='btn '>
                                        <FaUserCheck />
                                    </button>
                                    <button onClick={() => handleRejection(order)} className='btn mx-2'>
                                        <IoPersonRemoveOutline />
                                    </button>
                                    <button className='btn '>
                                        <FaTrash></FaTrash>
                                    </button>
                                </td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllOrders;