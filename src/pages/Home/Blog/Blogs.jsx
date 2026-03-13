import React, { use } from 'react';
import Blog from './Blog';
import { FaRegPenToSquare } from 'react-icons/fa6';
import FlyInMotion from '../../../components/Motion/FlyInMotion';

const Blogs = ({ blogsPromise }) => {

    const blogs = use(blogsPromise);

    return (
        <div id="blogs" className='max-w-7xl mx-auto w-11/12 my-20'>
            <div className='text-center mb-12'>
                <FlyInMotion index={1}>
                    <div className='flex justify-center items-center gap-2 mb-5'>
                        <div className='flex justify-center text-primary animate-[ping_2s_linear_infinite] hover:[animation-play-state:paused]'>
                            <FaRegPenToSquare className='text-3xl md:text-4xl font-extrabold' />
                        </div>
                        <div>
                            <h1 className='text-3xl md:text-4xl font-bold text-primary text-nowrap'>Latest Blogs</h1>
                            <div className='h-px w-16 md:w-22 bg-primary flex mx-auto animate-[ping_3s_linear_infinite] hover:animate-none'></div>
                        </div>
                    </div>
                </FlyInMotion>
                <FlyInMotion index={3}>
                    <p className="text-secondary mt-3 text-lg">
                        Explore insights, tips, and the latest updates from the world of textiles and fabric technology.
                    </p>
                </FlyInMotion>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    blogs.map((blog, i) => <FlyInMotion index={i*2 - 1} key={blog._id}>
                        <Blog blog={blog}></Blog>
                    </FlyInMotion>)
                }
            </div>
        </div>
    );
};

export default Blogs;