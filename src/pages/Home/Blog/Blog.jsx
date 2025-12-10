import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const Blog = ({ blog }) => {

    const { title, date, image, description } = blog;

    return (
        <div className="card border shadow-xl rounded-xl">
            <figure className="px-10 pt-10 pb-2 avatar">
                <img
                    src={image}
                    alt="Image"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl">{title}</h2>
                <p className='text-justify'><span className='font-bold ml-8'>Description:</span> {description}</p>
                <p>Date: {date}</p>
                <div className=" mt-2 flex justify-between gap-10">
                    <button className="btn btn-ghost">Read More <FaArrowRightLong /></button>
                </div>
            </div>
        </div>
    );
};

export default Blog;