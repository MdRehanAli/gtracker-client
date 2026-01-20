import React from 'react';

const ProductionStat = () => {
    return (
        <section className=" bg-white dark:bg-slate-900 mx-auto max-w-7xl w-11/12 rounded-xl">
            <div className="md:p-20 p-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="p-5 md:p-10 rounded-xl bg-slate-50  border border-slate-200 dark:border-white/5 text-center group">
                        <div className="md:text-6xl text-4xl font-black text-primary mb-4">12M+</div>
                        <div className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Finished Units/Year</div>
                    </div>
                    <div className="p-5 md:p-10 rounded-xl bg-slate-50  border border-slate-200 dark:border-white/5 text-center group">
                        <div className="md:text-6xl text-4xl font-black text-primary mb-4">99%</div>
                        <div className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Order Accuracy Rate</div>
                    </div>
                    <div className="p-5 md:p-10 rounded-xl bg-slate-50  border border-slate-200 dark:border-white/5 text-center group">
                        <div className="md:text-6xl text-4xl font-black text-primary mb-4">42</div>
                        <div className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Production Hubs</div>
                    </div>
                    <div className="p-5 md:p-10 rounded-xl bg-slate-50  border border-slate-200 dark:border-white/5 text-center group">
                        <div className="md:text-6xl text-4xl font-black text-primary mb-4">24/7</div>
                        <div className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Real-Time Monitoring</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductionStat;