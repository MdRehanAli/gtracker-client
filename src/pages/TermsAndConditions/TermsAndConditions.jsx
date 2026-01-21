import React from 'react';
import { BiBlock } from 'react-icons/bi';
import { FaAddressCard, FaArrowRight, FaRegCopyright, FaRegUser } from 'react-icons/fa6';
import { GrUserSettings } from 'react-icons/gr';
import { IoPersonOutline, IoPrintOutline } from 'react-icons/io5';
import { MdOutlineDescription, MdOutlineGavel, MdOutlineInventory2, MdOutlinePayments } from 'react-icons/md';
import { Link } from 'react-router';

const TermsAndConditions = () => {
    return (
        <div className="bg-white dark:bg-background-dark text-accent font-display selection:bg-primary/30">
            
            <main className="max-w-7xl w-11/12 mx-auto px-4 md:px-10 py-10 flex gap-10">
                {/* SideNavBar Component (Table of Contents) */}
                <aside className="hidden lg:flex w-72 flex-col shrink-0 sticky top-24 h-fit">
                    <div className="flex flex-col gap-4 p-6 bg-slate-100 dark:bg-[#1f1a26] rounded-xl border border-slate-200 dark:border-[#302839]">
                        <div className="flex flex-col mb-2">
                            <h1 className="text-accent text-lg font-bold leading-normal">Table of Contents</h1>
                            <p className="text-slate-600 dark:text-[#ab9db9] text-sm font-normal leading-normal">Quick navigation</p>
                        </div>
                        <nav className="flex flex-col gap-1">
                            <a className="flex items-center gap-3 px-3 py-2 rounded-xl bg-primary/20 text-primary border border-primary/30 group" href="#section-1">
                                <span className="material-symbols-outlined text-primary text-[20px]"><MdOutlineDescription /></span>
                                <p className="text-sm font-medium">1. Acceptance of Terms</p>
                            </a>
                            <a className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-200 dark:hover:bg-[#302839] text-slate-600 dark:text-white/70 hover:text-accent dark:hover:text-white transition-all" href="#section-2">
                                <span className="material-symbols-outlined text-[20px]"><IoPersonOutline /></span>
                                <p className="text-sm font-medium">2. User Accounts</p>
                            </a>
                            <a className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-200 dark:hover:bg-[#302839] text-slate-600 dark:text-white/70 hover:text-accent dark:hover:text-white transition-all" href="#section-3">
                                <span className="material-symbols-outlined text-[20px]"><MdOutlineInventory2 /></span>
                                <p className="text-sm font-medium">3. Product & Orders</p>
                            </a>
                            <a className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-200 dark:hover:bg-[#302839] text-slate-600 dark:text-white/70 hover:text-accent dark:hover:text-white transition-all" href="#section-4">
                                <span className="material-symbols-outlined text-[20px]"><MdOutlinePayments /></span>
                                <p className="text-sm font-medium">4. Payment Terms</p>
                            </a>
                            <a className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-200 dark:hover:bg-[#302839] text-slate-600 dark:text-white/70 hover:text-accent dark:hover:text-white transition-all" href="#section-5">
                                <span className="material-symbols-outlined text-[20px]"><FaRegCopyright /></span>
                                <p className="text-sm font-medium">5. Intellectual Property</p>
                            </a>
                            <a className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-200 dark:hover:bg-[#302839] text-slate-600 dark:text-white/70 hover:text-accent dark:hover:text-white transition-all" href="#section-6">
                                <span className="material-symbols-outlined text-[20px]"><BiBlock /></span>
                                <p className="text-sm font-medium">6. Termination</p>
                            </a>
                            <a className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-200 dark:hover:bg-[#302839] text-slate-600 dark:text-white/70 hover:text-accent dark:hover:text-white transition-all" href="#section-7">
                                <span className="material-symbols-outlined text-[20px]"><MdOutlineGavel /></span>
                                <p className="text-sm font-medium">7. Liability</p>
                            </a>
                        </nav>
                    </div>
                    <div className="mt-6 p-6 bg-primary/10 rounded-xl border border-primary/20">
                        <p className="text-accent text-sm font-semibold mb-2">Need help?</p>
                        <p className="text-slate-600 dark:text-[#ab9db9] text-xs leading-relaxed mb-4">For any legal inquiries regarding our tracking system, please contact our support team.</p>
                        <Link to="/contact" className="text-primary text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all">
                            CONTACT SUPPORT <span className="material-symbols-outlined text-sm"><FaArrowRight /></span>
                        </Link>
                    </div>
                </aside>

                {/* Content Area */}
                <div className="flex-1 flex flex-col gap-6">
                    {/* PageHeading Component */}
                    <div className="flex flex-col gap-3 p-4 bg-slate-100 dark:bg-[#1f1a26] rounded-xl border border-slate-200 dark:border-[#302839]">
                        <div className="flex flex-wrap justify-between items-end gap-3">
                            <div className="flex flex-col gap-2">
                                <h1 className="text-accent text-4xl font-black leading-tight tracking-[-0.033em]">Terms & Conditions</h1>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                                    <p className="text-slate-600 dark:text-[#ab9db9] text-sm font-medium">Last Updated: October 2023</p>
                                </div>
                            </div>
                            <button className="flex items-center gap-2 px-4 py-2 bg-slate-200 dark:bg-[#302839] hover:bg-slate-300 dark:hover:bg-[#40354d] text-accent text-sm font-medium rounded-xl transition-colors">
                                <span className="material-symbols-outlined text-[18px]"><IoPrintOutline /></span>
                                Print PDF
                            </button>
                        </div>
                    </div>

                    <div className="bg-slate-100 dark:bg-[#1f1a26] border border-slate-200 dark:border-[#302839] rounded-xl p-6 md:p-10 space-y-10 shadow-xl shadow-black/20">
                        {/* Section 1 */}
                        <section className="scroll-mt-28" id="section-1">
                            <div className="flex items-center gap-4 mb-4 border-l-4 border-primary pl-4">
                                <h2 className="text-accent tracking-tight text-2xl font-bold leading-tight">1. Acceptance of Terms</h2>
                            </div>
                            <p className="text-slate-700 dark:text-[#d1c9d8] text-base font-normal leading-relaxed">
                                By accessing and using the <span className="text-accent font-semibold">Garment Order & Production Tracker System</span>, you agree to be bound by these legal terms. These terms constitute a legally binding agreement between you (the user) and the system administrator.
                            </p>
                            <p className="text-slate-700 dark:text-[#d1c9d8] text-base font-normal leading-relaxed mt-4">
                                Unauthorized use of this platform or failure to adhere to the guidelines set herein may result in immediate suspension of account privileges and potential legal action as governed by international commercial laws.
                            </p>
                        </section>

                        <hr className="border-slate-300 dark:border-[#302839]" />

                        {/* Section 2 */}
                        <section className="scroll-mt-28" id="section-2">
                            <div className="flex items-center gap-4 mb-4 border-l-4 border-primary pl-4">
                                <h2 className="text-accent tracking-tight text-2xl font-bold leading-tight">2. User Accounts</h2>
                            </div>
                            <p className="text-slate-700 dark:text-[#d1c9d8] text-base font-normal leading-relaxed mb-6">
                                Access to the system is restricted to verified personnel categorized into two primary roles:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="p-5 rounded-xl bg-slate-200 dark:bg-[#302839]/50 border border-slate-300 dark:border-[#40354d]">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="material-symbols-outlined text-primary"><GrUserSettings /></span>
                                        <h3 className="text-accent font-bold">Managers</h3>
                                    </div>
                                    <p className="text-sm text-slate-600 dark:text-[#ab9db9] leading-relaxed">Authorized to oversee production cycles, update inventory levels, manage supplier relationships, and generate system-wide reports.</p>
                                </div>
                                <div className="p-5 rounded-xl bg-slate-200 dark:bg-[#302839]/50 border border-slate-300 dark:border-[#40354d]">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="material-symbols-outlined text-primary"><FaRegUser /></span>
                                        <h3 className="text-accent font-bold">Buyers</h3>
                                    </div>
                                    <p className="text-sm text-slate-600 dark:text-[#ab9db9] leading-relaxed">Authorized to place purchase orders, track shipment status, and manage procurement profiles for organizational needs.</p>
                                </div>
                            </div>
                        </section>

                        <hr className="border-slate-300 dark:border-[#302839]" />

                        {/* Section 3 */}
                        <section className="scroll-mt-28" id="section-3">
                            <div className="flex items-center gap-4 mb-4 border-l-4 border-primary pl-4">
                                <h2 className="text-accent tracking-tight text-2xl font-bold leading-tight">3. Product Listings & Orders</h2>
                            </div>
                            <p className="text-slate-700 dark:text-[#d1c9d8] text-base font-normal leading-relaxed">
                                All garments listed within the system are subject to availability. The GarmentTracker system provides real-time updates on production phases (Cutting, Sewing, QC, Finishing). However, "estimated delivery dates" are projections and do not constitute a fixed contractual deadline unless specified in a separate service-level agreement (SLA).
                            </p>
                            <ul className="mt-4 space-y-3">
                                <li className="flex gap-3 text-sm text-slate-700 dark:text-[#d1c9d8]">
                                    <span className="text-primary font-bold">•</span>
                                    <span>Orders once confirmed cannot be modified if the production state has passed the "Cutting" phase.</span>
                                </li>
                                <li className="flex gap-3 text-sm text-slate-700 dark:text-[#d1c9d8]">
                                    <span className="text-primary font-bold">•</span>
                                    <span>System discrepancy in inventory counts must be reported within 24 hours of discovery.</span>
                                </li>
                            </ul>
                        </section>

                        <hr className="border-slate-300 dark:border-[#302839]" />

                        {/* Section 4 */}
                        <section className="scroll-mt-28" id="section-4">
                            <div className="flex items-center gap-4 mb-4 border-l-4 border-primary pl-4">
                                <h2 className="text-accent tracking-tight text-2xl font-bold leading-tight">4. Payment Terms</h2>
                            </div>
                            <div className="bg-primary/5 border border-primary/20 p-6 rounded-xl mb-6">
                                <p className="text-slate-700 dark:text-[#d1c9d8] text-base font-normal leading-relaxed">
                                    Payment for bulk orders and subscription services must be settled via one of our authorized payment gateways:
                                </p>
                                <div className="mt-4 flex flex-wrap gap-4">
                                    <div className="flex items-center gap-3 bg-white dark:bg-[#141118] px-4 py-3 rounded-xl border border-slate-300 dark:border-[#302839]">
                                        <span className="material-symbols-outlined text-primary"><FaAddressCard /></span>
                                        <span className="font-bold text-accent">PayFast</span>
                                    </div>
                                    <div className="flex items-center gap-3 bg-white dark:bg-[#141118] px-4 py-3 rounded-xl border border-slate-300 dark:border-[#302839]">
                                        <span className="material-symbols-outlined text-primary"><MdOutlinePayments /></span>
                                        <span className="font-bold text-accent">Cash on Delivery (COD)</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm text-slate-600 dark:text-[#ab9db9]">
                                Note: Cash on Delivery is only available for pre-approved corporate buyers with a verified transaction history exceeding $5,000 USD. All PayFast transactions are encrypted and processed securely.
                            </p>
                        </section>

                        <hr className="border-slate-300 dark:border-[#302839]" />

                        {/* Section 5 */}
                        <section className="scroll-mt-28" id="section-5">
                            <div className="flex items-center gap-4 mb-4 border-l-4 border-primary pl-4">
                                <h2 className="text-accent tracking-tight text-2xl font-bold leading-tight">5. Intellectual Property</h2>
                            </div>
                            <p className="text-slate-700 dark:text-[#d1c9d8] text-base font-normal leading-relaxed">
                                The design patterns, proprietary tracking algorithms, UI/UX components, and the "GarmentTracker" brand name are the exclusive intellectual property of the service provider. Reproduction, reverse engineering, or scraping of system data for external commercial use is strictly prohibited.
                            </p>
                        </section>

                        <hr className="border-slate-300 dark:border-[#302839]" />

                        {/* Section 6 */}
                        <section className="scroll-mt-28" id="section-6">
                            <div className="flex items-center gap-4 mb-4 border-l-4 border-primary pl-4">
                                <h2 className="text-accent tracking-tight text-2xl font-bold leading-tight">6. Termination</h2>
                            </div>
                            <p className="text-slate-700 dark:text-[#d1c9d8] text-base font-normal leading-relaxed">
                                We reserve the right to terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.
                            </p>
                        </section>

                        <hr className="border-slate-300 dark:border-[#302839]" />

                        {/* Section 7 */}
                        <section className="scroll-mt-28" id="section-7">
                            <div className="flex items-center gap-4 mb-4 border-l-4 border-primary pl-4">
                                <h2 className="text-accent tracking-tight text-2xl font-bold leading-tight">7. Limitation of Liability</h2>
                            </div>
                            <p className="text-slate-700 dark:text-[#d1c9d8] text-base font-normal leading-relaxed italic border-l-2 border-slate-400 dark:border-[#40354d] pl-6 py-2">
                                "In no event shall the GarmentTracker administrators, nor its directors, employees, or partners, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service."
                            </p>
                        </section>
                    </div>

                    {/* Action Footer */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 bg-primary rounded-xl mt-4">
                        <div className="flex flex-col gap-1">
                            <h3 className="text-white text-xl font-bold">Ready to proceed?</h3>
                            <p className="text-white/80 text-sm">By clicking 'Accept', you confirm you have read and understood these terms.</p>
                        </div>
                        <div className="flex gap-4 w-full sm:w-auto">
                            <button className="flex-1 sm:flex-none px-8 py-3 bg-white text-primary font-bold rounded-xl hover:bg-white/90 transition-all shadow-lg shadow-black/20">
                                I Accept Terms
                            </button>
                            <button className="flex-1 sm:flex-none px-8 py-3 bg-primary/20 text-white border border-white/30 font-bold rounded-xl hover:bg-primary/30 transition-all">
                                Decline
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default TermsAndConditions;