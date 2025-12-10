import React, { use } from 'react';
import Work from './Work';

const Works = ({ worksPromise }) => {

    const works = use(worksPromise)

    return (
        <div className='my-20'>
            <div className='text-center'>
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