import React from 'react';
import { Link } from 'react-router';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from '../../../assets/Banner/banner1.png'
import banner2 from '../../../assets/Banner/banner2.png'
import banner3 from '../../../assets/Banner/banner3.png'
import banner4 from '../../../assets/Banner/banner4.png'
import banner5 from '../../../assets/Banner/banner5.png'
import banner6 from '../../../assets/Banner/banner6.png'
import banner7 from '../../../assets/Banner/banner7.png'
import banner8 from '../../../assets/Banner/banner8.png'
import banner9 from '../../../assets/Banner/banner9.png'
import FlyInMotion from '../../../components/Motion/FlyInMotion';
import FlySideMotion from '../../../components/Motion/FlySideMotion';

const Banner = () => {

    const banners = [banner1, banner2, banner3, banner4, banner5, banner6, banner7, banner8, banner9]
    return (
        <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} className='mb-20'>
            {
                banners.map((banner, index) => <div key={index} className=' bg-no-repeat bg-cover' style={{ backgroundImage: `url(${banner})` }}>
                    <div className=' min-h-[500px] p-5 md:p-20 bg-accent/80 text-white text-center flex flex-col items-center justify-center'>
                        <FlyInMotion index={1}>
                            <h1 className='text-3xl md:text-7xl font-bold text-primary'>Discover the Best Products</h1>
                        </FlyInMotion>
                        <div className='md:w-1/2 mx-auto'>
                            <FlyInMotion index={3} className="w-full">
                                <p className='my-5 text-secondary mt-3 text-lg'>GTracker is the world best software services for Garment Order & Production Tracker for small and medium factories. Reduce delays manage workflow from cutting to delivery.</p>
                            </FlyInMotion>
                        </div>
                        <div className='flex justify-center items-center gap-5'>
                            <FlySideMotion index={4}>
                                <Link to="/all-products" className='btn btn-primary'>View Products</Link>
                            </FlySideMotion>
                            <FlySideMotion index={5}>
                                <a href="#how" className='btn btn-primary'>How it works</a>
                            </FlySideMotion>
                        </div>
                    </div>
                </div>)
            }
        </Carousel>
    );
};

export default Banner;