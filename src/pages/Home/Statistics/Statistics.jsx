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
                <div className='bg-linear-to-r from-primary/30 to-accent grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10 p-5 md:p-10 bg-accent rounded-xl'>
                    <div className='flex flex-col items-center justify-center gap-2 border border-primary p-5 rounded-xl'>
                        <IoBagCheckOutline className='text-4xl text-secondary animate-[bounce_1s_linear_infinite] hover:animate-none' />
                        <h1 className='text-4xl font-bold text-primary'>1,201+</h1>
                        <p className='text-secondary text-center'>Successful Project</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2 border border-primary p-5 rounded-xl'>
                        <FaUserTie className='text-4xl text-secondary animate-[bounce_2s_linear_infinite] hover:animate-none' />
                        <h1 className='text-4xl font-bold text-primary'>936+</h1>
                        <p className='text-secondary text-center'>Satisfied Clients</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2 border border-primary p-5 rounded-xl'>
                        <HiOutlineCheckBadge className='text-4xl text-secondary animate-[bounce_1s_linear_infinite] hover:animate-none' />
                        <h1 className='text-4xl font-bold text-primary'>5+</h1>
                        <p className='text-secondary text-center'>Years Of Experience</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2 border border-primary p-5 rounded-xl'>
                        <GrGroup className='text-4xl text-secondary animate-[bounce_2s_linear_infinite] hover:animate-none' />
                        <h1 className='text-4xl font-bold text-primary'>18+</h1>
                        <p className='text-secondary text-center'>Professional Team</p>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Statistics;