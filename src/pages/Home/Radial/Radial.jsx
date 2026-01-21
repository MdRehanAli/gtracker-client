import React from 'react';
import { IoWaterOutline } from 'react-icons/io5';
import { MdOutlineForest, MdOutlineRecycling, MdOutlineSolarPower } from 'react-icons/md';

const Radial = () => {
    return (
        <section className="my-20 py-24 bg-slate-50 dark:bg-slate-800 mx-auto max-w-7xl w-11/12 rounded-xl">
            <div className=" px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="grid grid-cols-2 gap-8">
                            <div className="p-8 bg-accent rounded-xl border border-primary/20">
                                <span className="material-symbols-outlined text-primary text-4xl mb-4"><IoWaterOutline className="mb-4" /></span>
                                <h5 className="text-4xl font-black text-accent mb-2">85%</h5>
                                <p className="text-xs font-bold uppercase tracking-widest text-secondary">Water Recycled</p>
                            </div>
                            <div className="p-8 bg-accent rounded-xl border border-primary/20">
                                <span className="material-symbols-outlined text-primary text-4xl mb-4"><MdOutlineSolarPower className="mb-4" /></span>
                                <h5 className="text-4xl font-black text-accent mb-2">100%</h5>
                                <p className="text-xs font-bold uppercase tracking-widest text-secondary">Renewable Energy</p>
                            </div>
                            <div className="p-8 bg-accent rounded-xl border border-primary/20">
                                <span className="material-symbols-outlined text-primary text-4xl mb-4"><MdOutlineRecycling className="mb-4" /></span>
                                <h5 className="text-4xl font-black text-accent mb-2">Zero</h5>
                                <p className="text-xs font-bold uppercase tracking-widest text-secondary">Waste-to-Landfill</p>
                            </div>
                            <div className="p-8 bg-accent rounded-xl border border-primary/20">
                                <span className="material-symbols-outlined text-primary text-4xl mb-4"><MdOutlineForest className="mb-4" /></span>
                                <h5 className="text-4xl font-black text-accent mb-2">Carbon</h5>
                                <p className="text-xs font-bold uppercase tracking-widest text-secondary">Neutral Facility</p>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-4xl font-black mb-6 text-accent">Radical Circularity</h2>
                        <p className="text-lg text-secondary mb-10 leading-relaxed">
                            Our 2030 vision is to become a closed-loop ecosystem. We track the carbon footprint of every SKU, offering brands a real-time ESG dashboard for their entire production volume.
                        </p>
                        <button className="bg-primary px-10 py-5 text-white font-black rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">View ESG Report</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Radial;