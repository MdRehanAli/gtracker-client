import React from 'react';
import { PiYarn } from "react-icons/pi";

const Fabric = () => {
    return (
        <section className="rounded-xl bg-accent mx-auto max-w-7xl w-11/12">
            <div className="lg:p-20 md:p-10 p-5 py-10">
                <div className='mb-12 text-center'>
                    <div className='flex justify-center items-center gap-2 mb-5'>
                        <div className='flex justify-center text-primary animate-[spin_2s_linear_infinite] hover:[animation-play-state:paused]'>
                            <PiYarn className='text-3xl md:text-4xl font-extrabold' />
                        </div>
                        <h2 className='text-3xl md:text-4xl font-bold text-primary'>
                            Digital Fabric
                        </h2>
                    </div>
                    <p className="text-secondary mt-3 text-lg">
                        Smart fabric management powered by data, version control, and material intelligence.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="p-8 bg-accent rounded-xl border border-primary/50 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all hover:-translate-y-2">
                        <h4 className="text-xl font-bold text-primary mb-4">Technical Nylon</h4>
                        <p className="text-sm text-secondary mb-6">4-way stretch with hydrophobic coating.</p>
                        <div className="flex gap-2">
                            <span className="px-2 py-1 bg-slate-100 dark:bg-white/5 text-[10px] font-bold text-secondary rounded">RECYCLED</span>
                            <span className="px-2 py-1 bg-slate-100 dark:bg-white/5 text-[10px] font-bold text-secondary rounded">WATERPROOF</span>
                        </div>
                    </div>
                    <div className="p-8 bg-accent rounded-xl border border-primary/50 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all hover:-translate-y-2">
                        <h4 className="text-xl font-bold text-primary mb-4">Organic Supima</h4>
                        <p className="text-sm text-secondary mb-6">Extra-long staple cotton for luxury basics.</p>
                        <div className="flex gap-2">
                            <span className="px-2 py-1 bg-slate-100 dark:bg-white/5 text-[10px] font-bold text-secondary rounded">GOTS</span>
                            <span className="px-2 py-1 bg-slate-100 dark:bg-white/5 text-[10px] font-bold text-secondary rounded">PREMIUM</span>
                        </div>
                    </div>
                    <div className="p-8 bg-accent rounded-xl border border-primary/50 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all hover:-translate-y-2">
                        <h4 className="text-xl font-bold text-primary mb-4">Smart-Wool Blend</h4>
                        <p className="text-sm text-secondary mb-6">Merino mixed with conductive threads.</p>
                        <div className="flex gap-2">
                            <span className="px-2 py-1 bg-slate-100 dark:bg-white/5 text-[10px] font-bold text-secondary rounded">HEATING</span>
                            <span className="px-2 py-1 bg-slate-100 dark:bg-white/5 text-[10px] font-bold text-secondary rounded">SENSITIVE</span>
                        </div>
                    </div>
                    <div className="p-8 bg-accent rounded-xl border border-primary/50 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all hover:-translate-y-2">
                        <h4 className="text-xl font-bold text-primary mb-4">Biodegradable PLA</h4>
                        <p className="text-sm text-secondary mb-6">Starch-based fibers that decompose safely.</p>
                        <div className="flex gap-2">
                            <span className="px-2 py-1 bg-slate-100 dark:bg-white/5 text-[10px] font-bold text-secondary rounded">COMPOSTABLE</span>
                            <span className="px-2 py-1 bg-slate-100 dark:bg-white/5 text-[10px] font-bold text-secondary rounded">CIRCULAR</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Fabric;