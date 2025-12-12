import React from 'react';

const Review = ({ review }) => {

    const { name, photo, reviews, location, ratings, date } = review;

    return (
        <div className="card border shadow-xl rounded-xl max-w-[400px] bg-gray-300">
            <figure className="px-10 pt-10 pb-2 avatar w-1/2">
                <img
                    src={photo}
                    alt={name} 
                    className="ring-green-500 ring-offset-green-300 ring-2 ring-offset-2 rounded-full w-1/2" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl">{name}</h2>
                <p className='text-justify'><span className='font-bold ml-8'>Review:</span> {reviews}</p>
                <p>Location: {location}</p>
                <div className=" mt-2 flex justify-between gap-10">
                    <p>Date: {date}</p>
                    <p>Ratings: {ratings}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;