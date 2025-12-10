import React, { use } from 'react';
import Blog from './Blog';
import { FaRegPenToSquare } from 'react-icons/fa6';

const Blogs = ({ blogsPromise }) => {

    const blogs = use(blogsPromise);

    return (
        <div className=''>
            <div className='text-center'>
                <div className='flex justify-center text-7xl mb-5 '><FaRegPenToSquare className='p-4 bg-gray-300 rounded-3xl' /></div>
                <h1 className='text-3xl md:text-5xl font-bold'>Latest Blog & Articles</h1>
                <p className='my-5'>Explore insights, tips, and the latest updates from the world of textiles and fabric technology.</p>

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