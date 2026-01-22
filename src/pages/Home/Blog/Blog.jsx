import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';

const Blog = ({ blog }) => {

    const { title, date, image, description } = blog;

    return (
        <div className="border border-primary/50 shadow-xl rounded-xl  flex flex-col gap-2">
            <figure className="">
                <img
                    src={image}
                    alt="Image"
                    className="rounded-t-xl" />
            </figure>
            <div className="px-5 md:px-10 my-5 flex flex-col gap-2">
                <h2 className="text-xl font-bold text-center text-primary">{title}</h2>
                <p className='text-left text-secondary'><FaRegCalendarAlt className='inline mr-2' /> {date}</p>
                <p className='text-justify text-secondary'><span className='font-bold ml-8'></span> {description}</p>
                <div className=" mt-2 flex justify-between gap-10">
                    <button className="text-primary font-bold">Read More <FaArrowRightLong className='inline font-bold'/></button>
                </div>
            </div>
        </div>
    );
};

export default Blog;