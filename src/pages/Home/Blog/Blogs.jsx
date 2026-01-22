import React, { use } from 'react';
import Blog from './Blog';
import { FaRegPenToSquare } from 'react-icons/fa6';

const Blogs = ({ blogsPromise }) => {

    const blogs = use(blogsPromise);

    return (
        <div id="blogs" className='max-w-7xl mx-auto w-11/12 my-20'>
            <div className='text-center mb-12'>
                <div className='flex justify-center items-center gap-2 mb-5'>
                    <div className='flex justify-center text-primary animate-[ping_2s_linear_infinite] hover:[animation-play-state:paused]'>
                        <FaRegPenToSquare className='text-3xl md:text-4xl font-extrabold' />
                    </div>
                    <h2 className='text-3xl md:text-4xl font-bold text-primary'>
                        Latest Blogs
                    </h2>
                </div>
                <p className="text-secondary mt-3 text-lg">
                    Explore insights, tips, and the latest updates from the world of textiles and fabric technology.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    blogs.map(blog => <Blog blog={blog} key={blog._id}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;