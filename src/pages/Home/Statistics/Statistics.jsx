import React from 'react';
import statistics from '../../../assets/Statistics.png'
import { IoBagCheckOutline } from 'react-icons/io5';
import { GrGroup } from "react-icons/gr";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { Link } from 'react-router';
import { FaUserTie } from 'react-icons/fa6';

const Statistics = () => {
    return (
        <div className='my-20 relative'>
            <div className='bg-no-repeat bg-cover' style={{ backgroundImage: `url(${statistics})` }}>
                <div className=' min-h-[500px] p-5 md:p-20 bg-accent/80 text-white text-center flex flex-col items-center justify-center gap-2'>
                    <h1 className='text-xl font-bold text-secondary'>Do You Want Custom Project?</h1>
                    <h1 className='text-3xl md:text-5xl font-bold text-primary'>Contact Us</h1>
                    <p className='my-5 md:w-2/3 text-secondary'>GTracker is the world best software services for Garment Order & Production Tracker for small and medium factories. Reduce delays manage workflow from cutting to delivery.</p>
                    <Link to="/contact" className='btn btn-primary px-20'>Contact Us</Link>
                </div>
            </div>
            <div className=' md:w-3/4 mx-auto -mt-24'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 p-10 bg-accent rounded-xl'>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <IoBagCheckOutline className='text-7xl text-secondary mb-2' />
                        <h1 className='text-4xl font-bold text-primary'>1,201 +</h1>
                        <p className='text-secondary'>Successful Project</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <FaUserTie className='text-7xl text-secondary mb-2' />
                        <h1 className='text-4xl font-bold text-primary'>936 +</h1>
                        <p className='text-secondary'>Satisfied Clients</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <HiOutlineCheckBadge className='text-7xl text-secondary mb-2' />
                        <h1 className='text-4xl font-bold text-primary'>5 +</h1>
                        <p className='text-secondary'>Years Of Experience</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <GrGroup className='text-7xl text-secondary mb-2' />
                        <h1 className='text-4xl font-bold text-primary'>18 +</h1>
                        <p className='text-secondary'>Professional Team</p>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Statistics;