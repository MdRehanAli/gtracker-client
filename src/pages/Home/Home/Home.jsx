import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Works from '../Works/Works';
import Reviews from '../Reviews/Reviews';
import Blogs from '../Blog/Blogs';
import Statistics from '../Statistics/Statistics';

const productsPromise = fetch('/products.json').then(res => res.json())
const worksPromise = fetch('/works.json').then(res => res.json())
const reviewsPromise = fetch('/reviews.json').then(res => res.json())
const blogsPromise = fetch('/blogs.json').then(res => res.json())

const Home = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto w-11/12'>
                <Banner></Banner>
                <Products productsPromise={productsPromise}></Products>
                <Works worksPromise={worksPromise}></Works>
                <Reviews reviewsPromise={reviewsPromise}></Reviews>
                <Blogs blogsPromise={blogsPromise}></Blogs>
            </div>
            <Statistics></Statistics>
        </div>
    );
};

export default Home;