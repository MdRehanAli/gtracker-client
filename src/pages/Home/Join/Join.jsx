import React from 'react';

const Join = () => {
    return (
        <section className="my-20 py-24 bg-slate-50 dark:bg-slate-800 mx-auto max-w-7xl w-11/12 rounded-xl">
            <div className=" px-8">
                <div className="bg-gradient-to-r from-primary/30 to-accent dark:to-accent p-12 rounded-xl border border-primary/20 flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="lg:w-1/2">
                        <h3 className="text-3xl font-black mb-4 text-white">Stay Ahead of the Curve</h3>
                        <p className="text-slate-200 font-medium">Monthly reports on textile innovation, logistics updates, and factory-floor data trends.</p>
                    </div>
                    <form className="flex w-full lg:max-w-md gap-4">
                        <input
                            className="w-full bg-accent border border-white/10 rounded-xl px-6 py-4 focus:border-primary focus:ring-primary text-white placeholder-slate-400"
                            placeholder="work@company.com"
                            type="email"
                        />
                        <button className="bg-primary text-white font-black px-10 py-4 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all whitespace-nowrap">Join Intel</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Join;