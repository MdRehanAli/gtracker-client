import React from 'react';
import { FaBarcode } from 'react-icons/fa6';
import { MdArchitecture, MdPrecisionManufacturing } from 'react-icons/md';
import { FiPackage } from "react-icons/fi";
import { GrServices } from 'react-icons/gr';

const Services = () => {
    return (
        <section className="my-20 bg-accent mx-auto max-w-7xl w-11/12 rounded-xl">
            <div className='lg:p-20 md:p-10 p-5 py-10'>
                <div className="mb-12 text-center">
                    <div className='flex justify-center items-center gap-2 mb-5'>
                        <div className='flex justify-center text-primary animate-[spin_2s_linear_infinite] hover:[animation-play-state:paused]'>
                            <GrServices className='text-3xl md:text-4xl font-extrabold' />
                        </div>
                        <h2 className='text-3xl md:text-4xl font-bold text-primary'>
                            Manufacturing Services
                        </h2>
                    </div>
                    <p className="text-secondary mt-3 text-lg">
                        End-to-end apparel manufacturing services, from design engineering to global fulfillment.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="p-10 rounded-xl bg-accent border border-primary hover:border-primary dark:hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all hover:-translate-y-2">
                        <div className="h-14 w-14 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6">
                            <span className="material-symbols-outlined text-3xl"><MdPrecisionManufacturing /></span>
                        </div>
                        <h4 className="text-xl font-bold mb-4 text-primary">OEM Solutions</h4>
                        <p className="text-sm text-secondary">Scale your existing designs with our industrial-grade production capacity.</p>
                    </div>
                    <div className="p-10 rounded-xl bg-accent border border-primary hover:border-primary dark:hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all hover:-translate-y-2">
                        <div className="h-14 w-14 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6">
                            <span className="material-symbols-outlined text-3xl"><MdArchitecture /></span>
                        </div>
                        <h4 className="text-xl font-bold mb-4 text-primary">ODM Design</h4>
                        <p className="text-sm text-secondary">Leverage our in-house designers to create trend-leading technical collections.</p>
                    </div>
                    <div className="p-10 rounded-xl bg-accent border border-primary hover:border-primary dark:hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all hover:-translate-y-2">
                        <div className="h-14 w-14 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6">
                            <span className="material-symbols-outlined text-3xl"><FaBarcode /></span>
                        </div>
                        <h4 className="text-xl font-bold mb-4 text-primary">Private Label</h4>
                        <p className="text-sm text-secondary">Complete branding services including custom tags, packaging, and trims.</p>
                    </div>
                    <div className="p-10 rounded-xl bg-accent border border-primary hover:border-primary dark:hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all hover:-translate-y-2">
                        <div className="h-14 w-14 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6">
                            <span className="material-symbols-outlined text-3xl"><FiPackage /></span>
                        </div>
                        <h4 className="text-xl font-bold mb-4 text-primary">DTC Fulfillment</h4>
                        <p className="text-sm text-secondary">Ship individual orders directly from factory floor to global consumers.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;