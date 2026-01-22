import React from 'react';

const Join = () => {
    return (
        <section className="my-20 py-24 bg-accent mx-auto max-w-7xl w-11/12 rounded-xl">
            <div className=" px-8">
                <div className="bg-linear-to-r from-primary/30 to-accent p-12 rounded-xl border border-primary/20 flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="lg:w-1/2">
                        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Stay Ahead of the Curve</h3>
                        <p className="text-secondary font-medium">Monthly reports on textile innovation, logistics updates, and factory-floor data trends.</p>
                    </div>
                    <form className="flex w-full lg:max-w-md gap-4">
                        <input
                            className="w-full bg-accent border border-primary rounded-lg px-6 py-4 focus:border-primary text-primary placeholder-primary/50"
                            placeholder="work@company.com"
                            type="email"
                        />
                        <button className="bg-primary text-white font-bold px-10 py-4 rounded-lg shadow-lg shadow-primary/25 hover:opacity-80 hover:shadow-primary/40 transition-all whitespace-nowrap">Join With US</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Join;