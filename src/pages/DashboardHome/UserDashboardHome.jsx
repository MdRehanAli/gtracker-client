import React from 'react';
import { Helmet } from 'react-helmet';
import { FaRegUser } from 'react-icons/fa6';

const UserDashboardHome = () => {
    return (
        <div className='mx-auto my-20 bg-accent w-11/12 rounded-xl'>
            <Helmet>
                <title>GTracker | User DashBoard</title>
            </Helmet>
            <div className=' shadow-xl p-5 py-10 md:p-10 w-11/12 mx-auto border'>
                <div className="mb-12 text-center">
                    <div className='flex justify-center items-center gap-2'>
                        <div className='flex justify-center text-primary animate-[spin_2s_linear_infinite_reverse] hover:animate-none '><FaRegUser className='text-3xl md:text-4xl font-extrabold' /></div>
                        <h1 className='text-3xl md:text-4xl font-bold text-primary'>User Dashboard</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboardHome;