import React from 'react';
import { MdOutlineFeaturedPlayList, MdOutlineVerified } from 'react-icons/md';
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FaRoute } from 'react-icons/fa6';

const Features = () => {
    return (
        <section className="my-20 bg-bg-dark">
            <div className="mx-auto max-w-7xl px-6 lg:px-20">
                <div className="mb-20 text-center">
                    <div className='flex justify-center text-7xl mb-5 '><MdOutlineFeaturedPlayList className='p-4 bg-gray-300 rounded-xl' /></div>
                    <h1 className='text-3xl md:text-5xl font-bold'>System Features</h1>
                    <p className='mt-3 mb-12'>GTracker recently launch many more new Features for Delivering better products</p>
                </div>
                <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                    <div className="group space-y-6 p-8 rounded-xl bg-surface/20 border border-white/5 hover:border-primary/50 transition-all">
                        <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                            <span className="material-symbols-outlined text-3xl"><AiOutlineThunderbolt /></span>
                        </div>
                        <h3 className="text-2xl font-bold">High Speed Production</h3>
                        <p className="text-zinc-400 leading-relaxed">Optimized workflows that reduce manufacturing lead times by up to 35% through smart AI-driven scheduling.</p>
                    </div>
                    <div className="group space-y-6 p-8 rounded-xl bg-surface/20 border border-white/5 hover:border-primary/50 transition-all">
                        <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                            <span className="material-symbols-outlined text-3xl"><MdOutlineVerified /></span>
                        </div>
                        <h3 className="text-2xl font-bold">Uncompromising Quality</h3>
                        <p className="text-zinc-400 leading-relaxed">Multi-stage inspection checkpoints with digital logs for every garment in the production line.</p>
                    </div>
                    <div className="group space-y-6 p-8 rounded-xl bg-surface/20 border border-white/5 hover:border-primary/50 transition-all">
                        <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                            <span className="material-symbols-outlined text-3xl"><FaRoute /></span>
                        </div>
                        <h3 className="text-2xl font-bold">End-to-End Trackability</h3>
                        <p className="text-zinc-400 leading-relaxed">Monitor every single stitch from the moment of raw material intake to final logistics dispatch.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;