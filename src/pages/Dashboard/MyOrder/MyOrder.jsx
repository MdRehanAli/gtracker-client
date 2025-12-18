import React from 'react';
import { useQuery } from '@tanstack/react-query'
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const MyOrder = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: orders = [], refetch } = useQuery({
        queryKey: ['myOrder', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/order?email=${user.email}`);
            return res.data;
        }
    })

    const handleCancelOrder = id => {
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

                axiosSecure.delete(`order/${id}`)
                    .then(res => {
                        console.log(res.data);

                        if (res.data.deletedCount) {
                            refetch();

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                        }
                    })
            }
        });
    }

    const handlePayment = async (order) => {
        const paymentInfo = {
            orderPrice: order.orderPrice,
            productTitle: order.productTitle,
            email: order.email,
            orderId: order._id
        }

        const res = await axiosSecure.post('payment-checkout-session', paymentInfo);
        console.log(res.data);

        window.location.assign(res.data.url);
    }

    return (
        <div>
            <h1>All Order: {orders.length}</h1>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Order ID</th>
                            <th>User</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order._id}</td>
                                <td>{order.firstName} {order.lastName}</td>
                                <td>{order.productTitle}</td>
                                <td>{order.orderQuantity}</td>
                                <td>
                                    {
                                        order.payment_status === 'paid' ?
                                            <span className='text-green-500'>Paid</span>
                                            :
                                            <button onClick={() => handlePayment(order)} className="btn btn-primary">Pay</button>
                                    }
                                </td>
                                <td>{order.status}</td>
                                <td>
                                    <button className='btn btn-primary mr-2'>View</button>
                                    <button onClick={() => handleCancelOrder(order._id)} className='btn btn-primary'>Cancel</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;