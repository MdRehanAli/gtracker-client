import React from 'react';

const Pipeline = () => {
    return (
        <section className="my-20 py-24 bg-white dark:bg-slate-900 relative mx-auto max-w-7xl w-11/12 rounded-xl">
            <div className=" px-8 relative z-10">
                <h2 className="text-4xl font-black text-center mb-20 text-slate-900 dark:text-white">The Deployment Pipeline</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="relative p-10 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-white/5">
                        <div className="text-8xl font-black text-primary/10 absolute -top-4 -left-2">01</div>
                        <div className="relative">
                            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Tech Pack Audit</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">Design engineers verify patterns, sizing, and material requirements for scalability.</p>
                        </div>
                    </div>
                    <div className="relative p-10 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-white/5">
                        <div className="text-8xl font-black text-primary/10 absolute -top-4 -left-2">02</div>
                        <div className="relative">
                            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">IoT Integration</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">We assign RFID tags to every garment piece for individual tracing throughout the facility.</p>
                        </div>
                    </div>
                    <div className="relative p-10 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-white/5">
                        <div className="text-8xl font-black text-primary/10 absolute -top-4 -left-2">03</div>
                        <div className="relative">
                            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Machine Sewing</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">High-speed assembly lines monitored by AI to ensure stitch consistency across the batch.</p>
                        </div>
                    </div>
                    <div className="relative p-10 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-white/5">
                        <div className="text-8xl font-black text-primary/10 absolute -top-4 -left-2">04</div>
                        <div className="relative">
                            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Final Validation</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">Final QC passing via scanner before automated packaging and dispatch notice.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pipeline;