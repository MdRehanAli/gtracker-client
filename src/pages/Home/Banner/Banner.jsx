import React from 'react';
import banner1 from '../../../assets/Banner/banner1.png'
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className='rounded-2xl bg-no-repeat bg-cover mt-10' style={{ backgroundImage: `url(${banner1})` }}>
            <div className=' min-h-[500px] rounded-2xl p-5 md:p-20 bg-[#0000005c] text-white text-center flex flex-col items-center justify-center'>
                <h1 className='text-2xl md:text-7xl font-bold'>Discover the Best Products</h1>
                <p className='my-5'>GTracker is the world best software services for Garment Order & Production Tracker for small and medium factories. Reduce delays manage workflow from cutting to delivery.</p>
                <div className='flex justify-center items-center gap-5'>
                    <Link to="/all-product" className='btn btn-primary'>View Products</Link>
                    <a href="#how" className='btn btn-primary'>How it works</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;