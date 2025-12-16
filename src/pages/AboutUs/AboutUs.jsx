import React from 'react';
import { IoIosInformationCircleOutline } from "react-icons/io";

import about1 from '../../assets/About1.png'
import about2 from '../../assets/About2.png'
import Banner from '../Home/Banner/Banner';
import WhyChoose from './WhyChoose';

const AboutUs = () => {
    return (
        <div className='max-w-7xl mx-auto w-11/12 my-20'>
            <Banner></Banner>
            <div className='text-center'>
                <div className='flex justify-center text-7xl mb-5'><IoIosInformationCircleOutline className='p-4 bg-gray-300 rounded-3xl' /></div>
                <h1 className='text-3xl md:text-5xl font-bold'>About GTracker</h1>
                <p className='mt-3 mb-12 md:w-2/3 mx-auto'>Discover who we are, what we stand for, and how we're transforming the textile and apparel industry with smart, innovative technology designed for seamless production and business growth.</p>
            </div>
            <div className='flex flex-col lg:flex-row justify-between items-start gap-10'>
                <div className='mx-auto'>
                    <div className=''>
                        <img className='rounded-2xl' src={about1} alt="About 1" />
                    </div>
                    <div className='relative -top-5'>
                        <img className='rounded-2xl w-2/3 mx-auto' src={about2} alt="About 2" />
                    </div>
                </div>
                <div className='w-full'>
                    {/* <h4>ABOUT GTracker</h4> */}
                    <h2 className='text-4xl font-bold text-center mb-5'>Smart Garments Order & Production Tracking Made Simple</h2>
                    <p className='text-justify'>GTracker streamlines the entire garments production process with real-time tracking and automated updates. From order placement to shipment, it ensures smooth workflow management, reduces delays, minimizes errors, and gives factories and buyers full visibility at every stage.</p>
                    <div className='flex flex-col md:flex-row justify-baseline items-start gap-10 mt-10'>
                        <div className=''>
                            <h1 className='text-2xl font-semibold text-center md:text-left'>Our Vision</h1>
                            <ul className='list-disc ml-5 mt-2'>
                                <li>Digitize the entire garments production workflow.</li>
                                <li>Improve transparency between buyers, merchandisers, and factory teams.</li>
                                <li>Reduce communication gaps with real-time order status updates.</li>
                                <li>Help factories boost output and reduce wastage.</li>
                                <li>Enable smarter decision-making with analytics and insights.</li>
                            </ul>
                        </div>
                        <div className=''>
                            <h1 className='text-2xl font-semibold text-center md:text-left'>Our Mission</h1>
                            <ul className='list-disc ml-5 mt-2'>
                                <li>Build a reliable and scalable production tracking ecosystem.</li>
                                <li>Simplify complex order management for teams at every level.</li>
                                <li>Deliver fast, accurate, and automated tracking tools for daily operations.</li>
                                <li>Support factories in achieving on-time delivery and increased efficiency.</li>
                                <li>Empower the textile industry with modern technology and smart processes.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center mt-10'>
                <button className='btn btn-primary px-10'>OUR SERVICES</button>
            </div>

            <WhyChoose></WhyChoose>
        </div>
    );
};

export default AboutUs;