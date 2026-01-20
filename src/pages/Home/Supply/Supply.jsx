import React from 'react';
import { MdOutlineDynamicFeed, MdOutlineHub, MdOutlineInsights, MdOutlineVerified } from 'react-icons/md';

const Supply = () => {
    return (
        <section className="my-20 mx-auto max-w-7xl w-11/12">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl font-black">Supply Chain Ecosystem</h2>
                    <p className="text-slate-600 dark:text-slate-400 mt-4 text-lg">Four pillars of modern garment manufacturing intelligence.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="p-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 hover:border-primary dark:hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all hover:-translate-y-2">
                        <span className="material-symbols-outlined text-5xl text-primary mb-6"><MdOutlineDynamicFeed className='mb-6' /></span>
                        <h3 className="text-xl font-extrabold mb-4 text-slate-900 dark:text-white">Live Operations</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">Real-time status of every sewing line and station across multiple global facilities.</p>
                    </div>
                    <div className="p-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 hover:border-primary dark:hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all hover:-translate-y-2">
                        <span className="material-symbols-outlined text-5xl text-primary mb-6"><MdOutlineVerified className='mb-6' /></span>
                        <h3 className="text-xl font-extrabold mb-4 text-slate-900 dark:text-white">Quality Shield</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">Automated QC gates using computer vision to detect 0.1mm defects instantly.</p>
                    </div>
                    <div className="p-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 hover:border-primary dark:hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all hover:-translate-y-2">
                        <span className="material-symbols-outlined text-5xl text-primary mb-6"><MdOutlineHub className='mb-6' /></span>
                        <h3 className="text-xl font-extrabold mb-4 text-slate-900 dark:text-white">Global Nodes</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">Unified control center for logistics, from raw yarn arrival to final port delivery.</p>
                    </div>
                    <div className="p-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 hover:border-primary dark:hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all hover:-translate-y-2">
                        <span className="material-symbols-outlined text-5xl text-primary mb-6"><MdOutlineInsights className='mb-6' /></span>
                        <h3 className="text-xl font-extrabold mb-4 text-slate-900 dark:text-white">AI Prediction</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">Predictive lead times based on historical throughput and seasonal patterns.</p>
                    </div>
                </div>
        </section>
    );
};

export default Supply;