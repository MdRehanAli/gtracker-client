import React from 'react';
import { useQuery } from '@tanstack/react-query'
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const MyOrder = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: order = [] } = useQuery({
        queryKey: ['myOrder', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/order?email=${user.email}`);
            return res.data;
        }
    })

    return (
        <div>
            <h1>All Order: {order.length}</h1>
        </div>
    );
};

export default MyOrder;