import React, { use } from 'react';
import Review from './Review';

const Reviews = ({ reviewsPromise }) => {

    const reviews = use(reviewsPromise);

    return (
        <div className='my-20'>
            <div className='text-center'>
                <h1 className='text-3xl md:text-5xl font-bold'>Customer Feedback</h1>
                <p className='my-5'>Trusted by businesses and individuals, see how our service quality speaks through our customers.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review review={review} key={review._id}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;