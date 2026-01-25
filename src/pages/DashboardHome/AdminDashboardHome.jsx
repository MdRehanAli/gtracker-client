import React from 'react';
import { Helmet } from 'react-helmet-async';
import { RiAdminFill } from "react-icons/ri";

const AdminDashboardHome = () => {
    return (
        <div className='mx-auto my-20 bg-accent w-11/12 rounded-xl'>
            <Helmet>
                <title>GTracker | Admin DashBoard</title>
            </Helmet>
            <div className=' shadow-xl bg-linear-to-r from-primary/30 to-accent rounded-xl py-10 p-5 md:p-20'>
                <div className='flex justify-center text-7xl'><RiAdminFill className='p-4 bg-gray-300 rounded-xl' /></div>
                <h1 className='text-3xl md:text-5xl font-bold text-center my-5'>Admin Dashboard</h1>
            </div>
        </div>
    );
};

export default AdminDashboardHome;