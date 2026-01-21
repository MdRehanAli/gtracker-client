import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const Work = ({ work }) => {

    const { name, description, image } = work;

    return (
        <div className="p-5 md:p-10 rounded-xl bg-accent border border-primary hover:border-primary dark:hover:border-primary hover:shadow-lg hover:shadow-primary/10 transform duration-200 hover:scale-105 flex flex-col gap-2">
            <figure className="flex justify-center">
                <img
                    src={image}
                    alt={name}
                    className="w-20" />
            </figure>
            <div className="">
                <h2 className="text-xl font-extrabold my-2 text-primary text-center">{name}</h2>
                <p className='text-justify text-secondary leading-relaxed text-sm'><span className='font-bold'>Process:</span> {description}</p>
                <div className="mt-2 flex items-center gap-2 justify-end text-primary">
                    <button className="">Read More </button>
                    <span><FaArrowRightLong /></span>
                </div>
            </div>
        </div>
    );
};

export default Work;