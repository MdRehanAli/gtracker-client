import React from 'react';
import { Link } from 'react-router';

const CTA = () => {
    return (
        <section className="bg-accent relative overflow-hidden bg-gradient-to-r from-primary/30 to-accent">
            <div className='lg:p-20 md:p-10 p-5 py-10'>
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] [background-size:40px_40px]"></div>
                <div className="w-11/12 max-w-7xl mx-auto text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-black text-primary mb-4 tracking-tight">Revolutionize Your Supply Chain Today</h2>
                    <p className="text-xl text-secondary mb-8 font-medium max-w-3xl mx-auto">
                        Join 250+ enterprise labels scaling faster, cleaner, and smarter with GTracker.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link to="/all-products" className="btn btn-primary">Order Now</Link>
                        <Link to="/contact" className="btn btn-primary">Connect with GTracker</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;