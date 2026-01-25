import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FcManager } from "react-icons/fc";

const ManagerDashboardHome = () => {
    return (
        <div className='mx-auto my-20 bg-accent w-11/12 rounded-xl'>
            <Helmet>
                <title>GTracker | Manager DashBoard</title>
            </Helmet>
            <div className=' shadow-xl bg-linear-to-r from-primary/30 to-accent rounded-xl py-10 p-5 md:p-20 '>
                <div className="mb-12 text-center">
                    <div className='flex justify-center items-center gap-2'>
                        <div className='flex justify-center text-primary animate-[bounce_2s_linear_infinite] hover:animate-none '><FcManager className='text-3xl md:text-4xl font-extrabold' /></div>
                        <h1 className='text-3xl md:text-4xl font-bold text-primary'>Manager Dashboard</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManagerDashboardHome;