import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaRegCreditCard } from 'react-icons/fa6';

const PaymentHistory = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments?email=${user.email}`);
            return res.data;
        }
    })

    return (
        <div className='mx-auto md:h-full my-20'>
            <div className=' shadow-xl  rounded-xl p-5 py-10 md:p-10 w-11/12 mx-auto border'>
                <div className='flex justify-center text-7xl'><FaRegCreditCard className='p-4  rounded-xl' /></div>
                <h1 className='text-3xl md:text-5xl font-bold text-center my-5'>Payments History: {payments.length}</h1>
                <div className="overflow-x-auto">
                    <table className="table table-zebra text-center">
                        {/* head */}
                        <thead className=''>
                            <tr>
                                <th>NO.</th>
                                <th>Name</th>
                                <th>Amount</th>
                                <th>Paid Time</th>
                                <th>Transaction Id</th>

                            </tr>
                        </thead>
                        <tbody className=''>

                            {
                                payments.map((payment, index) => <tr key={payment._id}>
                                    <th>{index + 1}</th>
                                    <td>{payment.productTitle}</td>
                                    <td>$ {payment.amount}</td>
                                    <td>{payment.paidAt}</td>
                                    <td>{payment.transactionId}</td>

                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;