import React from 'react';
import { FaBalanceScaleRight } from "react-icons/fa";

const ProductionStat = () => {
    return (
        <section className=" bg-accent mx-auto max-w-7xl w-11/12 rounded-xl mb-20">
            <div className="lg:p-20 md:p-10 p-5 py-10">
                <div className="mb-12 text-center">
                    <div className='flex justify-center items-center gap-2 mb-5'>
                        <div className='flex justify-center text-primary animate-[bounce_1s_linear_infinite] hover:animate-none '><FaBalanceScaleRight className='text-3xl md:text-4xl font-bold' /></div>
                        <h1 className='text-3xl md:text-4xl font-bold text-primary text-nowrap'>Our Productions</h1>
                    </div>
                    <p className="text-secondary mt-3 text-lg">
                        Measurable performance across our global manufacturing ecosystem.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="p-5 md:p-10 rounded-xl border border-primary/50 hover:border hover:border-primary text-center group">
                        <div className="md:text-6xl text-4xl font-black text-primary mb-4">12M+</div>
                        <div className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Finished Units/Year</div>
                    </div>
                    <div className="p-5 md:p-10 rounded-xl border border-primary/50 hover:border hover:border-primary text-center group">
                        <div className="md:text-6xl text-4xl font-black text-primary mb-4">99%</div>
                        <div className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Order Accuracy Rate</div>
                    </div>
                    <div className="p-5 md:p-10 rounded-xl border border-primary/50 hover:border hover:border-primary text-center group">
                        <div className="md:text-6xl text-4xl font-black text-primary mb-4">42</div>
                        <div className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Production Hubs</div>
                    </div>
                    <div className="p-5 md:p-10 rounded-xl border border-primary/50 hover:border hover:border-primary text-center group">
                        <div className="md:text-6xl text-4xl font-black text-primary mb-4">24/7</div>
                        <div className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Real-Time Monitoring</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductionStat;