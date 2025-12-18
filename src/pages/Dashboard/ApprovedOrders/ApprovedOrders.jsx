import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const ApprovedOrders = () => {

    const axiosSecure = useAxiosSecure();
    const { data: orders = [] } = useQuery({
        queryKey: ['orders', 'pending'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/order?status=approved`);
            return res.data;
        }
    })

    return (
        <div>
            <h1>Approved Orders: {orders.length}</h1>
        </div>
    );
};

export default ApprovedOrders;