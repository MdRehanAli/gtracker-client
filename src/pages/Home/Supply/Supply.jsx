import React from 'react';
import { MdOutlineDynamicFeed, MdOutlineHub, MdOutlineInsights, MdOutlineVerified } from 'react-icons/md';
import { GiPentarrowsTornado } from "react-icons/gi";

const Supply = () => {
    return (
        <section className="my-20 mx-auto max-w-7xl w-11/12">
            <div className="mb-12 text-center">
                <div className='flex justify-center items-center gap-2 mb-5'>
                    <div className='flex justify-center text-primary animate-[spin_2s_linear_infinite_reverse] hover:animate-none '><GiPentarrowsTornado className='text-3xl md:text-4xl font-extrabold' /></div>
                    <h1 className='text-3xl md:text-4xl font-bold text-primary'>Modern Ecosystem</h1>
                </div>
                <p className="text-secondary mt-3 text-lg">Four pillars of modern garment manufacturing intelligence.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="p-5 md:p-10 rounded-xl bg-accent border border-primary/50 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transform duration-200 hover:scale-105">
                    <span className="text-5xl text-primary mb-6"><MdOutlineDynamicFeed className='mb-6' /></span>
                    <h3 className="text-xl font-extrabold mb-4 text-primary">Live Operations</h3>
                    <p className="text-secondary leading-relaxed text-sm">Real-time status of every sewing line and station across multiple global facilities.</p>
                </div>
                <div className="p-5 md:p-10 rounded-xl bg-accent border border-primary/50 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transform duration-200 hover:scale-105">
                    <span className="material-symbols-outlined text-5xl text-primary mb-6"><MdOutlineVerified className='mb-6' /></span>
                    <h3 className="text-xl font-extrabold mb-4 text-primary">Quality Shield</h3>
                    <p className="text-secondary leading-relaxed text-sm">Automated QC gates using computer vision to detect 0.1mm defects instantly.</p>
                </div>
                <div className="p-5 md:p-10 rounded-xl bg-accent border border-primary/50 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transform duration-200 hover:scale-105">
                    <span className="material-symbols-outlined text-5xl text-primary mb-6"><MdOutlineHub className='mb-6' /></span>
                    <h3 className="text-xl font-extrabold mb-4 text-primary">Global Nodes</h3>
                    <p className="text-secondary leading-relaxed text-sm">Unified control center for logistics, from raw yarn arrival to final port delivery.</p>
                </div>
                <div className="p-5 md:p-10 rounded-xl bg-accent border border-primary/50 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transform duration-200 hover:scale-105">
                    <span className="material-symbols-outlined text-5xl text-primary mb-6"><MdOutlineInsights className='mb-6' /></span>
                    <h3 className="text-xl font-extrabold mb-4 text-primary">AI Prediction</h3>
                    <p className="text-secondary leading-relaxed text-sm">Predictive lead times based on historical throughput and seasonal patterns.</p>
                </div>
            </div>
        </section>
    );
};

export default Supply;