import React from 'react';

const Fabric = () => {
    return (
        <section className="rounded-xl py-24 bg-slate-50 dark:bg-slate-800 mx-auto max-w-7xl w-11/12">
            <div className=" px-8">
                <div className="flex justify-between items-center mb-16">
                    <h2 className="text-4xl font-black text-accent">Digital Fabric Library</h2>
                    <button className="text-primary font-bold border-b-2 border-primary pb-1">Browse 4,000+ Materials</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="p-8 bg-accent rounded-xl border border-primary hover:border-primary dark:hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all hover:-translate-y-2">
                        <h4 className="text-xl font-bold text-accent mb-4">Technical Nylon</h4>
                        <p className="text-sm text-secondary mb-6">4-way stretch with hydrophobic coating.</p>
                        <div className="flex gap-2">
                            <span className="px-2 py-1 bg-slate-100 dark:bg-white/5 text-[10px] font-bold text-secondary rounded">RECYCLED</span>
                            <span className="px-2 py-1 bg-slate-100 dark:bg-white/5 text-[10px] font-bold text-secondary rounded">WATERPROOF</span>
                        </div>
                    </div>
                    <div className="p-8 bg-accent rounded-xl border border-primary hover:border-primary dark:hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all hover:-translate-y-2">
                        <h4 className="text-xl font-bold text-accent mb-4">Organic Supima</h4>
                        <p className="text-sm text-secondary mb-6">Extra-long staple cotton for luxury basics.</p>
                        <div className="flex gap-2">
                            <span className="px-2 py-1 bg-slate-100 dark:bg-white/5 text-[10px] font-bold text-secondary rounded">GOTS</span>
                            <span className="px-2 py-1 bg-slate-100 dark:bg-white/5 text-[10px] font-bold text-secondary rounded">PREMIUM</span>
                        </div>
                    </div>
                    <div className="p-8 bg-accent rounded-xl border border-primary hover:border-primary dark:hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all hover:-translate-y-2">
                        <h4 className="text-xl font-bold text-accent mb-4">Smart-Wool Blend</h4>
                        <p className="text-sm text-secondary mb-6">Merino mixed with conductive threads.</p>
                        <div className="flex gap-2">
                            <span className="px-2 py-1 bg-slate-100 dark:bg-white/5 text-[10px] font-bold text-secondary rounded">HEATING</span>
                            <span className="px-2 py-1 bg-slate-100 dark:bg-white/5 text-[10px] font-bold text-secondary rounded">SENSITIVE</span>
                        </div>
                    </div>
                    <div className="p-8 bg-accent rounded-xl border border-primary hover:border-primary dark:hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all hover:-translate-y-2">
                        <h4 className="text-xl font-bold text-accent mb-4">Biodegradable PLA</h4>
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