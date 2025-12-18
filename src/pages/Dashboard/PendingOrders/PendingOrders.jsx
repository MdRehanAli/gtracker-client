import React, { useRef, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

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

    const openApproveModal = order => {
        setSelectedOrder(order);
        orderModalRef.current.showModal()
    }

    return (
        <div>
            <h1>Pending Orders: {orders.length}</h1>

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
                                <td>
                                    <button onClick={() => openApproveModal(order)} className='btn btn-primary text-black'>Approve</button>
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
    );
};

export default PendingOrders;