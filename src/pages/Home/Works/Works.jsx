import React, { use } from 'react';
import Work from './Work';
import { IoSettingsOutline } from "react-icons/io5";

const Works = ({ worksPromise }) => {

    const works = use(worksPromise)

    return (
        <div id='how' className=' my-20 mx-auto w-11/12 max-w-7xl'>
            <div className='text-center mb-12'>
                <div className='flex justify-center items-center gap-2 mb-5'>
                    <div className='flex justify-center text-3xl md:text-4xl text-primary animate-[spin_3s_linear_infinite] hover:animate-none'><IoSettingsOutline className='' /></div>
                    <h1 className='text-3xl md:text-4xl font-bold text-primary'>How It Works</h1>
                </div>
                <p className='text-secondary mt-3 text-lg'>Do you know? How GTracker is Delivering The Highest Quality Fabrics?</p>
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