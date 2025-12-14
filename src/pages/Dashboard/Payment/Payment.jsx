import React from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../components/Loading/Loading';

const Payment = () => {

    const { orderId } = useParams();
    const axiosSecure = useAxiosSecure();

    const { isLoading, data: order } = useQuery({
        queryKey: ['order', orderId],
        queryFn: async () => {
            const result = await axiosSecure.get(`/order/${orderId}`)
            return result.data;
        }
    })


    const handlePayment = async () => {
        const paymentInfo = {
            orderPrice: order.orderPrice,
            productTitle: order.productTitle,
            email: order.email,
            orderId: order._id
        }

        const res = await axiosSecure.post('create-checkout-session', paymentInfo);
        console.log(res.data);

        window.location.href = res.data.url;
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1>Please Pay</h1>
            <button onClick={handlePayment} className='btn btn-primary'>Pay</button>
        </div>
    );
};

export default Payment;