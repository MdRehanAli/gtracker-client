import React, { useRef, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { TbClockQuestion } from 'react-icons/tb';
import { Link } from 'react-router';

const PendingOrders = () => {
    const [selectedOrder, setSelectedOrder] = useState(null);

    const axiosSecure = useAxiosSecure();
    const orderModalRef = useRef();

    const { data: orders = [] } = useQuery({
        queryKey: ['orders', 'pending'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/order?status=pending`);
            return res.data;
        }
    })

    // const openApproveModal = order => {
    //     setSelectedOrder(order);
    //     orderModalRef.current.showModal()
    // }

    return (
        <div className='mx-auto my-20 bg-accent w-11/12 rounded-xl'>
            <div className=' shadow-xl bg-linear-to-r from-primary/30 to-accent rounded-xl py-10 p-5 md:p-10'>
                <div className="mb-12 text-center">
                    <div className='flex justify-center items-center gap-2'>
                        <div className='flex justify-center text-primary animate-[ping_2s_linear_infinite] hover:animate-none '><TbClockQuestion className='text-3xl md:text-4xl font-extrabold' /></div>
                        <h1 className='text-3xl md:text-4xl font-bold text-primary'>Pending Orders : {orders.length}</h1>
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
                                <th>Order Date</th>
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
                                        <button onClick={() => openApproveModal(order)} className='btn btn-primary text-black'>Approve</button>
                                        <button className='btn btn-primary text-black'>Reject</button>
                                        <Link to={`/dashboard/order-details/${order._id}`} className='btn btn-primary text-black'>View</Link>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
                {/* Modal  */}
                <dialog ref={orderModalRef} className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Press ESC key or click the button below to close</p>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default PendingOrders;