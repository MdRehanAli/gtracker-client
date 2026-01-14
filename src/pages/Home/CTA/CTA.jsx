import React from 'react';

const CTA = () => {
    return (
        <section className="py-24 bg-primary relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] [background-size:40px_40px]"></div>
            <div className="mx-auto max-w-5xl px-8 text-center relative z-10">
                <h2 className="text-5xl font-black text-white mb-8 tracking-tight">Revolutionize Your Supply Chain Today</h2>
                <p className="text-xl text-white/90 mb-12 font-medium max-w-3xl mx-auto">
                    Join 250+ enterprise labels scaling faster, cleaner, and smarter with GarmentPro.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                    <button className="bg-white text-primary px-12 py-5 text-xl font-black rounded-xl hover:scale-105 transition-transform shadow-2xl">Book Custom Demo</button>
                    <button className="bg-slate-900 text-white px-12 py-5 text-xl font-black rounded-xl border border-white/10 hover:bg-slate-800 transition-all">Talk to an Engineer</button>
                </div>
            </div>
        </section>
    );
};

export default CTA;