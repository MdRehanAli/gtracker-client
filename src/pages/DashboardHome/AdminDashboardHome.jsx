import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaRegCreditCard, FaRegUser } from 'react-icons/fa6';
import { GrServices } from 'react-icons/gr';
import { LiaHandsHelpingSolid } from 'react-icons/lia';
import { RiAdminFill } from "react-icons/ri";

const AdminDashboardHome = () => {
    return (
        <div className='mx-auto my-20 bg-accent w-11/12 rounded-xl'>
            <Helmet>
                <title>GTracker | Admin DashBoard</title>
            </Helmet>
            <div className=' shadow-xl bg-linear-to-r from-primary/30 to-accent rounded-xl py-10 p-5 md:p-10 '>
                <div className="mb-12 text-center">
                    <div className='flex justify-center items-center gap-2'>
                        <div className='flex justify-center text-primary animate-[pulse_1s_linear_infinite_reverse] hover:animate-none '><RiAdminFill className='text-3xl md:text-4xl font-extrabold' /></div>
                        <h1 className='text-3xl md:text-4xl font-bold text-primary'>Admin Dashboard</h1>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    <div className='p-4 border border-primary rounded-xl flex flex-col gap-2 text-primary'>
                        <LiaHandsHelpingSolid className='text-3xl animate-[pulse_1s_linear_infinite_reverse] hover:animate-none'/>
                        <h1 className='text-4xl mt-4 font-semibold'>356</h1>
                        <p>Total amount of Orders</p>
                    </div>
                    <div className='p-4 border border-primary rounded-xl flex flex-col gap-2 text-primary'>
                        <FaRegCreditCard className='text-3xl animate-[pulse_1s_linear_infinite_reverse] hover:animate-none'/>
                        <h1 className='text-4xl mt-4 font-semibold'>$ 64,265</h1>
                        <p>Total amount of Orders</p>
                    </div>
                    <div className='p-4 border border-primary rounded-xl flex flex-col gap-2 text-primary'>
                        <GrServices className='text-3xl animate-[pulse_1s_linear_infinite_reverse] hover:animate-none'/>
                        <h1 className='text-4xl mt-4 font-semibold'>25</h1>
                        <p>Total Category of Services</p>
                    </div>
                    <div className='p-4 border border-primary rounded-xl flex flex-col gap-2 text-primary'>
                        <FaRegUser className='text-3xl animate-[pulse_1s_linear_infinite_reverse] hover:animate-none'/>
                        <h1 className='text-4xl mt-4 font-semibold'>3036</h1>
                        <p>Visitors Last Month</p>
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default AdminDashboardHome;