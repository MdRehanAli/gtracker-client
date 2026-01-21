import React, { use } from 'react';
import Review from './Review';
import { FaQuoteLeft } from 'react-icons/fa6';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const Reviews = ({ reviewsPromise }) => {

    const reviews = use(reviewsPromise);

    return (
        <div className='my-20 mx-auto w-11/12 max-w-7xl'>
            <div className='text-center'>
                <div className='flex justify-center text-7xl mb-5 '><FaQuoteLeft className='p-4 bg-gray-300 rounded-xl' /></div>
                <h1 className='text-3xl md:text-4xl font-bold'>Customer Feedback</h1>
                <p className='text-secondary mt-3 text-lg'>Trusted by businesses and individuals, see how our service quality speaks through our customers.</p>
            </div>
            <Swiper
                loop={true}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                breakpoints={{
                    0: {            // Mobile
                        slidesPerView: 1,
                    },
                    768: {          // Tablet / Medium
                        slidesPerView: 2,
                    },
                    1024: {         // Laptop / Large
                        slidesPerView: 3,
                    },
                }}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 50,
                    stretch: '50%',
                    depth: 200,
                    modifier: 1,
                    scale: 0.75,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
            >

                {
                    reviews.map(review => <SwiperSlide key={review._id}><Review review={review}></Review></SwiperSlide>)
                }
            </Swiper>
            {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            </div> */}
        </div>
    );
};

export default Reviews;