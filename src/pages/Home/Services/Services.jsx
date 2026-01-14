import React from 'react';
import { FaBarcode } from 'react-icons/fa6';
import { MdArchitecture, MdPrecisionManufacturing } from 'react-icons/md';
import { FiPackage } from "react-icons/fi";

const Services = () => {
    return (
        <section className="py-24 bg-white dark:bg-slate-900 mx-auto max-w-7xl w-11/12 rounded-xl">
            <div className=" px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="p-10 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-white/5 hover:border-primary dark:hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all hover:-translate-y-2">
                        <div className="h-14 w-14 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6">
                            <span className="material-symbols-outlined text-3xl"><MdPrecisionManufacturing /></span>
                        </div>
                        <h4 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">OEM Solutions</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Scale your existing designs with our industrial-grade production capacity.</p>
                    </div>
                    <div className="p-10 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-white/5 hover:border-primary dark:hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all hover:-translate-y-2">
                        <div className="h-14 w-14 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6">
                            <span className="material-symbols-outlined text-3xl"><MdArchitecture /></span>
                        </div>
                        <h4 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">ODM Design</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Leverage our in-house designers to create trend-leading technical collections.</p>
                    </div>
                    <div className="p-10 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-white/5 hover:border-primary dark:hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all hover:-translate-y-2">
                        <div className="h-14 w-14 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6">
                            <span className="material-symbols-outlined text-3xl"><FaBarcode /></span>
                        </div>
                        <h4 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Private Label</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Complete branding services including custom tags, packaging, and trims.</p>
                    </div>
                    <div className="p-10 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-white/5 hover:border-primary dark:hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all hover:-translate-y-2">
                        <div className="h-14 w-14 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6">
                            <span className="material-symbols-outlined text-3xl"><FiPackage /></span>
                        </div>
                        <h4 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">DTC Fulfillment</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Ship individual orders directly from factory floor to global consumers.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;