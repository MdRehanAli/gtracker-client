import React from 'react';
import { FaQuestion } from 'react-icons/fa6';
import { IoIosArrowDown } from "react-icons/io";

const FAQ = () => {
    return (
        <section className="my-20 rounded-xl bg-accent max-w-7xl mx-auto w-11/12">
            <div className="lg:p-20 md:p-10 p-5 py-10">
                <div className="mb-12 text-center">
                    <div className='flex justify-center items-center gap-2 mb-5'>
                        <div className='flex justify-center text-primary animate-[bounce_2s_linear_infinite] hover:[animation-play-state:paused]'>
                            <FaQuestion className='text-3xl md:text-4xl font-extrabold' />
                        </div>
                        <h2 className='text-3xl md:text-4xl font-bold text-primary'>
                            Intelligence FAQ
                        </h2>
                    </div>
                    <p className="text-secondary mt-3 text-lg">
                        Frequently asked questions covering our intelligent systems and workflows.
                    </p>
                </div>
                <div className="space-y-4">
                    <details className="group bg-accent rounded-xl border border-primary/50 open:border-primary/50 transition-all cursor-pointer">
                        <summary className="flex p-6 items-center justify-between text-lg font-bold text-primary list-none">
                            How is production data secured?
                            <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-primary"><IoIosArrowDown /></span>
                        </summary>
                        <p className="pb-6 px-6 text-secondary leading-relaxed">All telemetry data is encrypted at the edge before being stored on a distributed blockchain ledger, ensuring immutable audit trails for every garment produced.</p>
                    </details>
                    <details className="group bg-accent rounded-xl border border-primary/50 open:border-primary/50 transition-all cursor-pointer">
                        <summary className="flex p-6 items-center justify-between text-lg font-bold text-primary list-none">
                            Can you integrate with legacy ERP systems?
                            <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-primary"><IoIosArrowDown /></span>
                        </summary>
                        <p className="pb-6 px-6 text-secondary leading-relaxed">Yes, we provide pre-built connectors for SAP, Oracle NetSuite, and Microsoft Dynamics, plus a comprehensive RESTful API for custom enterprise builds.</p>
                    </details>
                    <details className="group bg-accent rounded-xl border border-primary/50 open:border-primary/50 transition-all cursor-pointer">
                        <summary className="flex p-6 items-center justify-between text-lg font-bold text-primary list-none">
                            What are your minimum order quantities?
                            <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-primary"><IoIosArrowDown /></span>
                        </summary>
                        <p className="pb-6 px-6 text-secondary leading-relaxed">While MOQs vary by fabric type, our smart-lines allow for agility, starting as low as 50 units for premium capsule collections.</p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default FAQ;