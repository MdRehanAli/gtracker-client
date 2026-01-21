import React from 'react';
import { IoIosArrowDown } from "react-icons/io";

const FAQ = () => {
    return (
        <section className="my-20 rounded-xl py-24 bg-slate-50 dark:bg-slate-800 max-w-7xl mx-auto w-11/12">
            <div className="mx-auto max-w-3xl px-8">
                <h2 className="text-4xl font-black text-center mb-16 text-accent">Intelligence FAQ</h2>
                <div className="space-y-4">
                    <details className="group bg-accent rounded-xl border border-primary p-6 open:border-primary/50 transition-all cursor-pointer">
                        <summary className="flex items-center justify-between text-lg font-bold text-accent list-none">
                            How is production data secured?
                            <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-primary"><IoIosArrowDown /></span>
                        </summary>
                        <p className="mt-4 text-secondary leading-relaxed">All telemetry data is encrypted at the edge before being stored on a distributed blockchain ledger, ensuring immutable audit trails for every garment produced.</p>
                    </details>
                    <details className="group bg-accent rounded-xl border border-primary p-6 open:border-primary/50 transition-all cursor-pointer">
                        <summary className="flex items-center justify-between text-lg font-bold text-accent list-none">
                            Can you integrate with legacy ERP systems?
                            <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-primary"><IoIosArrowDown /></span>
                        </summary>
                        <p className="mt-4 text-secondary leading-relaxed">Yes, we provide pre-built connectors for SAP, Oracle NetSuite, and Microsoft Dynamics, plus a comprehensive RESTful API for custom enterprise builds.</p>
                    </details>
                    <details className="group bg-accent rounded-xl border border-primary p-6 open:border-primary/50 transition-all cursor-pointer">
                        <summary className="flex items-center justify-between text-lg font-bold text-accent list-none">
                            What are your minimum order quantities?
                            <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-primary"><IoIosArrowDown /></span>
                        </summary>
                        <p className="mt-4 text-secondary leading-relaxed">While MOQs vary by fabric type, our smart-lines allow for agility, starting as low as 50 units for premium capsule collections.</p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default FAQ;