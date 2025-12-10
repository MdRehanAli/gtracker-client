import React, { use } from 'react';
import Work from './Work';
import { IoSettingsOutline } from "react-icons/io5";

const Works = ({ worksPromise }) => {

    const works = use(worksPromise)

    return (
        <div className='my-20'>
            <div className='text-center'>
                <div className='flex justify-center text-7xl mb-5 '><IoSettingsOutline className='p-4 bg-gray-300 rounded-3xl' /></div>
                <h1 className='text-3xl md:text-5xl font-bold'>How It Works</h1>
                <p className='my-5'>Do you know? How GTracker is Delivering The Highest Quality Fabrics?</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    works.map(work => <Work work={work} key={work._id}></Work>)
                }
            </div>
        </div>
    );
};

export default Works;