import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaQuoteLeft, FaRegCalendarAlt } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa6';

const Review = ({ review }) => {

    const { name, photo, reviews, location, ratings, date } = review;

    return (
        <div className=" p-5 md:p-10 border border-primary/50 shadow-xl rounded-xl max-w-[400px] bg-accent">
            <figure className="avatar flex justify-center mb-5">
                <img
                    src={photo}
                    alt={name}
                    className="ring-primary ring-offset-primary ring-2 ring-offset-2 rounded-full w-1/4" />
            </figure>
            <div className="flex flex-col gap-2 items-center text-center">
                <h2 className="text-2xl font-bold text-primary">{name}</h2>
                <p className='my-5 text-secondary font-bold italic'><span className='font-bold my-8'><FaQuoteLeft className='inline mb-4 mr-2' /></span> {reviews}</p>
                <div className="flex justify-between w-full">
                    <p className='text-secondary'><FaRegCalendarAlt className='inline mr-2' /> {date}</p>
                    <p className='text-secondary'><FaStar className='inline mr-2 text-primary' /> {ratings}</p>
                </div>
                <p className='text-secondary'><CiLocationOn className='inline mr-2' /> {location}</p>
            </div>
        </div>
    );
};

export default Review;