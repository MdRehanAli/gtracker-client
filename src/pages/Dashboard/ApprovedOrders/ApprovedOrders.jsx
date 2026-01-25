import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FiCheckSquare } from 'react-icons/fi';

const ApprovedOrders = () => {

    const axiosSecure = useAxiosSecure();
    const { data: orders = [] } = useQuery({
        queryKey: ['orders', 'approved'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/order?status=approved`);
            return res.data;
        }
    })

    return (
        <div className='mx-auto my-20 bg-accent w-11/12 rounded-xl'>
            <div className=' shadow-xl bg-linear-to-r from-primary/30 to-accent rounded-xl py-10 p-5 md:p-20'>
                <div className='flex justify-center text-7xl'><FiCheckSquare className='p-4 rounded-xl' /></div>
                <h1 className='text-3xl md:text-5xl font-bold text-center my-5'>Approve Orders : {orders.length}</h1>

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
                                <th>Approved Date</th>
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
                                    <td>{order.createdAt}</td>
                                    <td className='flex justify-center items-center gap-2'>
                                        <button onClick={() => openApproveModal(order)} className='btn btn-primary text-black'>Add Tracking</button>
                                        <button onClick={() => openApproveModal(order)} className='btn btn-primary text-black'>View Tracking</button>
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

export default ApprovedOrders;