import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const Work = ({ work }) => {

    const { name, description, image } = work;

    return (
        <div className="card border shadow-xl rounded-2xl">
            <figure className="px-10 pt-10">
                <img
                    src={image}
                    alt={name}
                    className="w-20" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl">{name}</h2>
                <p className='text-justify'><span className='font-bold ml-8'>Process:</span> {description}</p>
                <div className="card-actions mt-2">
                    <button className="btn btn-ghost">Read More <FaArrowRightLong /></button>
                </div>
            </div>
        </div>
    );
};

export default Work;