import React from 'react';
import { FaRegUser } from 'react-icons/fa6';

const UserDashboardHome = () => {
    return (
        <div className='mx-auto md:h-full my-20'>
            <div className=' shadow-xl bg-gray-200 rounded-2xl p-5 py-10 md:p-10 w-11/12 mx-auto'>
                <div className='flex justify-center text-7xl'><FaRegUser className='p-4 bg-gray-300 rounded-3xl' /></div>
                <h1 className='text-3xl md:text-5xl font-bold text-center my-5'>User Dashboard</h1>
            </div>
        </div>
    );
};

export default UserDashboardHome;