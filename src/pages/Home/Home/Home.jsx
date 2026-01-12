import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Works from '../Works/Works';
import Reviews from '../Reviews/Reviews';
import Blogs from '../Blog/Blogs';
import Statistics from '../Statistics/Statistics';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import Features from '../Features/Features';
import Connected from '../Connected/Connected';
import ProductionStat from '../ProductionStat/ProductionStat';
import Supply from '../Supply/Supply';
import BestSeller from '../BestSeller/BestSeller';
const worksPromise = fetch('/works.json').then(res => res.json())
const reviewsPromise = fetch('/reviews.json').then(res => res.json())
const blogsPromise = fetch('/blogs.json').then(res => res.json())

const Home = () => {

    return (
        <div>
            <Helmet>
                <title>GTracker | Home</title>
            </Helmet>
            <Banner></Banner>
            <Connected></Connected>
            <ProductionStat></ProductionStat>
            <Supply></Supply>
            <BestSeller></BestSeller>
            <div className='max-w-7xl mx-auto w-11/12'>
                <Products></Products>
                <div className='flex items-center justify-center mt-10'>
                    <Link to='all-products' className='btn btn-primary px-20'>View All Products</Link>
                </div>
                <Works worksPromise={worksPromise}></Works>
                <Features></Features>
                <Reviews reviewsPromise={reviewsPromise}></Reviews>
                <Blogs blogsPromise={blogsPromise}></Blogs>
            </div>
            <Statistics></Statistics>
        </div>
    );
};

export default Home;