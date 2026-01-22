import React from 'react';
import { MdOutlineFeaturedPlayList, MdOutlineVerified } from 'react-icons/md';
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FaRoute } from 'react-icons/fa6';

const Features = () => {
    return (
        <section className="mx-auto w-11/12 max-w-7xl my-20">
            <div className="mb-12 text-center">
                <div className='flex justify-center items-center gap-2 mb-5'>
                    <div className='flex justify-center text-primary animate-[pulse_1s_linear_infinite] hover:animate-none '><MdOutlineFeaturedPlayList className='text-3xl md:text-4xl font-bold' /></div>
                    <h1 className='text-3xl md:text-4xl font-bold text-primary'>System Features</h1>
                </div>
                <p className='text-secondary mt-3 text-lg'>GTracker recently launch many more new Features for Delivering better products.</p>
            </div>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                <div className="group space-y-6 p-5 md:p-10 bg-accent rounded-xl bg-surface/20 border border-white/5 hover:border-primary/50 transition-all">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                        <span className="material-symbols-outlined text-3xl animate-[pulse_1s_linear_infinite] hover:animate-none"><AiOutlineThunderbolt /></span>
                    </div>
                    <h3 className="text-2xl font-bold text-primary">High Speed Production</h3>
                    <p className="text-secondary leading-relaxed">Optimized workflows that reduce manufacturing lead times by up to 35% through smart AI-driven scheduling.</p>
                </div>
                <div className="group space-y-6 p-5 md:p-10 bg-accent rounded-xl bg-surface/20 border border-white/5 hover:border-primary/50 transition-all">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                        <span className="material-symbols-outlined text-3xl animate-[pulse_1s_linear_infinite] hover:animate-none"><MdOutlineVerified /></span>
                    </div>
                    <h3 className="text-2xl font-bold text-primary">Uncompromising Quality</h3>
                    <p className="text-secondary leading-relaxed">Multi-stage inspection checkpoints with digital logs for every garment in the production line.</p>
                </div>
                <div className="group space-y-6 p-5 md:p-10 bg-accent rounded-xl bg-surface/20 border border-white/5 hover:border-primary/50 transition-all">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                        <span className="material-symbols-outlined text-3xl animate-[pulse_1s_linear_infinite] hover:animate-none"><FaRoute /></span>
                    </div>
                    <h3 className="text-2xl font-bold text-primary">End-to-End Trackability</h3>
                    <p className="text-secondary leading-relaxed">Monitor every single stitch from the moment of raw material intake to final logistics dispatch.</p>
                </div>
            </div>
        </section >
    );
};

export default Features;