import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Works from '../Works/Works';
import Reviews from '../Reviews/Reviews';
import Blogs from '../Blog/Blogs';
import Statistics from '../Statistics/Statistics';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
// import { Link, useLoaderData } from 'react-router';

// const productsPromise = fetch('/products.json').then(res => res.json())
const worksPromise = fetch('/works.json').then(res => res.json())
const reviewsPromise = fetch('/reviews.json').then(res => res.json())
const blogsPromise = fetch('/blogs.json').then(res => res.json())

const Home = () => {

    // const products = useLoaderData()
    return (
        <div>
            <Helmet>
                <title>GTracker | Home</title>
            </Helmet>
            <div className='max-w-7xl mx-auto w-11/12'>
                <Banner></Banner>
                <Products></Products>
                <div className='flex items-center justify-center mt-10'>
                    <Link to='all-products' className='btn btn-primary px-20'>View All Products</Link>
                </div>
                <Works worksPromise={worksPromise}></Works>
                <Reviews reviewsPromise={reviewsPromise}></Reviews>
                <Blogs blogsPromise={blogsPromise}></Blogs>
            </div>
            <Statistics></Statistics>
        </div>
    );
};

export default Home;