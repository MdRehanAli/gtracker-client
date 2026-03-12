import React from 'react';
import { GoGoal } from "react-icons/go";
import { IoWaterOutline } from 'react-icons/io5';
import { MdOutlineForest, MdOutlineRecycling, MdOutlineSolarPower } from 'react-icons/md';
import { Link } from 'react-router';
import FlyInMotion from '../../../components/Motion/FlyInMotion';

const Radial = () => {
    return (
        <section className="my-20 bg-accent mx-auto max-w-7xl w-11/12 rounded-xl">
            <div className="lg:p-20 md:p-10 p-5 py-10">
                <div className="mb-12 text-center">
                    <FlyInMotion index={1}>
                        <div className='flex justify-center items-center gap-2 mb-5'>
                            <div className='flex justify-center text-primary animate-[ping_2s_linear_infinite] hover:[animation-play-state:paused]'>
                                <GoGoal className='text-3xl md:text-4xl font-extrabold' />
                            </div>
                            <div>
                                <h1 className='text-3xl md:text-4xl font-bold text-primary text-nowrap'>Our Vision</h1>
                                <div className='h-px w-16 md:w-22 bg-primary flex mx-auto animate-[ping_3s_linear_infinite] hover:animate-none'></div>
                            </div>
                        </div>
                    </FlyInMotion>
                    <FlyInMotion index={3}>
                        <p className="text-secondary mt-3 text-lg">
                            A future traceable, efficient, and sustainably produced.
                        </p>
                    </FlyInMotion>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <FlyInMotion index={3}>
                                <div className="p-5 md:p-10 bg-accent rounded-xl border border-primary/20">
                                    <span className="material-symbols-outlined text-primary text-4xl mb-4 animate-[pulse_1s_linear_infinite] hover:animate-none"><IoWaterOutline className="mb-4" /></span>
                                    <h5 className="text-3xl md:text-4xl font-bold text-primary mb-2">85%</h5>
                                    <p className="text-xs font-bold uppercase tracking-widest text-secondary">Water Recycled</p>
                                </div>
                            </FlyInMotion>
                            <FlyInMotion index={3}>
                                <div className="p-5 md:p-10 bg-accent rounded-xl border border-primary/20">
                                    <span className="material-symbols-outlined text-primary text-4xl mb-4 animate-[pulse_1s_linear_infinite] hover:animate-none"><MdOutlineSolarPower className="mb-4" /></span>
                                    <h5 className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</h5>
                                    <p className="text-xs font-bold uppercase tracking-widest text-secondary">Renewable Energy</p>
                                </div>
                            </FlyInMotion>
                            <FlyInMotion index={3}>
                                <div className="p-5 md:p-10 bg-accent rounded-xl border border-primary/20">
                                    <span className="material-symbols-outlined text-primary text-4xl mb-4 animate-[pulse_1s_linear_infinite] hover:animate-none"><MdOutlineRecycling className="mb-4" /></span>
                                    <h5 className="text-3xl md:text-4xl font-bold text-primary mb-2">Zero</h5>
                                    <p className="text-xs font-bold uppercase tracking-widest text-secondary">Waste-to-Landfill</p>
                                </div>
                            </FlyInMotion>
                            <FlyInMotion index={3}>
                                <div className="p-5 md:p-10 bg-accent rounded-xl border border-primary/20">
                                    <span className="material-symbols-outlined text-primary text-4xl mb-4 animate-[pulse_1s_linear_infinite] hover:animate-none"><MdOutlineForest className="mb-4" /></span>
                                    <h5 className="text-3xl md:text-4xl font-bold text-primary mb-2">Carbon</h5>
                                    <p className="text-xs font-bold uppercase tracking-widest text-secondary">Neutral Facility</p>
                                </div>
                            </FlyInMotion>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <FlyInMotion index={3}>
                            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-6 text-center md:text-left">Radical Circularity</h2>
                        </FlyInMotion>
                        <FlyInMotion index={5}>
                            <p className="text-lg text-justify text-secondary mb-10 leading-relaxed">
                                Our 2030 vision is to become a closed-loop ecosystem. We track the carbon footprint of every SKU, offering brands a real-time ESG dashboard for their entire production volume.
                            </p>
                        </FlyInMotion>
                        <FlyInMotion index={7}>
                            <div className='flex items-center justify-center md:justify-start'>
                                <a href="#blogs" className="btn btn-primary">View recent Article</a>
                            </div>
                        </FlyInMotion>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Radial;