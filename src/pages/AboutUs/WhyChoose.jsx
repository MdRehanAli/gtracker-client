import React from 'react';

const WhyChoose = () => {
    return (
        <div className='my-20 flex flex-col md:flex-row justify-between items-center gap-10'>
            <div className='flex-1'>
                <h2 className='text-2xl font-semibold md:text-left text-center text-gray-600'>Why Choose GTracker</h2>
                <h1 className='text-3xl md:text-4xl font-bold my-5 mb-10'>Lowest Price Guaranteed, Quality Never Compromised</h1>
                <p className='text-justify'>GTracker is designed to bring efficiency, accuracy, and visibility to every stage of the garments production cycle. From order placement to cutting, sewing, finishing, and shipment, our platform ensures seamless workflow management with real-time tracking and automated updates. With GTracker, factories and buyers can monitor progress instantly, reduce delays, eliminate manual errors, and achieve smoother production operations across all departments.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 flex-1 gap-10'>
                <div className='flex flex-col items-center justify-center gap-5'>
                    <p className='inline-block rounded-full border-4 border-gray-600 p-8 py-10 text-2xl font-bold'>95%</p>
                    <p className='text-gray-600'>Factory Experience</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-5'>
                    <p className='inline-block rounded-full border-4 border-gray-600 p-8 py-10 text-2xl font-bold'>97%</p>
                    <p className='text-gray-600'>Textile Material</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-5'>
                    <p className='inline-block rounded-full border-4 border-gray-600 p-8 py-10 text-2xl font-bold'>98%</p>
                    <p className='text-gray-600'>Worker Skills</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-5'>
                    <p className='inline-block rounded-full border-4 border-gray-600 p-8 py-10 text-2xl font-bold'>93%</p>
                    <p className='text-gray-600'>Machinery & Equipment</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;