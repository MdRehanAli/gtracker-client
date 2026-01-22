import React from 'react';

const Join = () => {
    return (
        <section className="my-20 bg-accent mx-auto max-w-7xl w-11/12 rounded-xl">
            <div className="">
                <div className="bg-linear-to-r from-primary/30 to-accent p-5 md:p-10 rounded-xl border border-primary/50 flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="lg:w-1/2">
                        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-primary md:text-left text-center">Stay Ahead of the Curve</h3>
                        <p className="text-secondary font-medium">Monthly reports on textile innovation, logistics updates, and factory-floor data trends.</p>
                    </div>
                    <form className="flex md:flex-row flex-col w-full lg:max-w-md gap-4">
                        <input
                            className="w-full bg-accent border border-primary/50 rounded-lg px-6 py-4 focus:border-primary/50 text-primary placeholder-primary/50"
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