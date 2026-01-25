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
import Pipeline from '../Pipeline/Pipeline';
import Services from '../Services/Services';
import Radial from '../Radial/Radial';
import CTA from '../CTA/CTA';
import FAQ from '../FAQ/FAQ';
import Fabric from '../Fabric/Fabric';
import WinterShowcase from '../WinterShowcase/WinterShowcase';
import Join from '../Join/Join';
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
            <Products></Products>
            <div className='flex items-center justify-center mt-10 mb-20'>
                <Link to='all-products' className='btn btn-primary px-20'>View All Products</Link>
            </div>
            <div className=''>
                <Supply></Supply>
                <Works worksPromise={worksPromise}></Works>
                <Pipeline></Pipeline>
                <Services></Services>
                <Radial></Radial>
                <FAQ></FAQ>
                <Fabric></Fabric>
                <WinterShowcase></WinterShowcase>
                <Join></Join>
                <Features></Features>
                <Reviews reviewsPromise={reviewsPromise}></Reviews>
                <Blogs blogsPromise={blogsPromise}></Blogs>
            </div>
            <Statistics></Statistics>
            <CTA></CTA>
        </div>
    );
};

export default Home;