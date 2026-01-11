import React from 'react';
import { CiCircleInfo, CiUser } from 'react-icons/ci';
import { FiDownload } from 'react-icons/fi';
import { Link } from 'react-router';
import { GoDatabase, GoShareAndroid, GoShieldCheck } from "react-icons/go";
import { LuChartNoAxesCombined, LuCookie, LuUserSearch } from "react-icons/lu";
import { FaAddressCard } from 'react-icons/fa6';
import { IoMdCloudDone } from 'react-icons/io';
import { BsKey } from 'react-icons/bs';
import { MdLockOutline, MdOutlineStorage, MdOutlineVisibilityOff } from 'react-icons/md';

const PrivacyPolicy = () => {
    return (
        <div className="bg-white dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased">

            <main className="max-w-7xl mx-auto px-6 py-8">
                {/* Breadcrumbs */}
                <div className="flex flex-wrap gap-2 mb-6">
                    <Link className="text-slate-500 dark:text-[#ab9db9] text-sm font-medium hover:text-primary" to="/">Legal</Link>
                    <span className="text-slate-400 dark:text-[#ab9db9] text-sm font-medium">/</span>
                    <span className="text-slate-900 dark:text-white text-sm font-medium">Privacy Policy</span>
                </div>

                {/* Page Heading */}
                <div className="flex flex-wrap justify-between items-end gap-6 mb-12 border-b border-slate-200 dark:border-slate-800 pb-8">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-slate-900 dark:text-white text-5xl font-black leading-tight tracking-tight">Privacy Policy</h1>
                        <p className="text-slate-500 dark:text-[#ab9db9] text-lg">Last updated: May 24, 2024</p>
                    </div>
                    <button className="flex items-center gap-2 cursor-pointer rounded-lg h-11 px-6 bg-slate-200 dark:bg-[#302839] text-slate-900 dark:text-white text-sm font-bold transition-all hover:opacity-90">
                        <span className="material-symbols-outlined text-xl"><FiDownload /></span>
                        <span>Download PDF</span>
                    </button>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sticky Sidebar Navigation */}
                    <aside className="lg:w-72 flex-shrink-0">
                        <div className="sticky top-24 flex flex-col gap-6">
                            <div className="flex flex-col">
                                <h3 className="text-slate-900 dark:text-white text-base font-bold">Table of Contents</h3>
                                <p className="text-slate-500 dark:text-[#ab9db9] text-xs">Quickly jump to a section</p>
                            </div>
                            <nav className="flex flex-col gap-1">
                                <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/20 border-l-4 border-primary transition-all text-primary" href="#intro">
                                    <span className="material-symbols-outlined text-xl"><CiCircleInfo /></span>
                                    <span className="text-sm font-semibold">1. Introduction</span>
                                </a>
                                <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-[#ab9db9] hover:bg-slate-100 dark:hover:bg-slate-800 transition-all" href="#data-collection">
                                    <span className="material-symbols-outlined text-xl"><GoDatabase /></span>
                                    <span className="text-sm font-medium">2. Data Collection</span>
                                </a>
                                <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-[#ab9db9] hover:bg-slate-100 dark:hover:bg-slate-800 transition-all" href="#cookies">
                                    <span className="material-symbols-outlined text-xl"><LuCookie /></span>
                                    <span className="text-sm font-medium">3. Cookies Policy</span>
                                </a>
                                <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-[#ab9db9] hover:bg-slate-100 dark:hover:bg-slate-800 transition-all" href="#third-party">
                                    <span className="material-symbols-outlined text-xl"><GoShareAndroid /></span>
                                    <span className="text-sm font-medium">4. Third-Party Sharing</span>
                                </a>
                                <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-[#ab9db9] hover:bg-slate-100 dark:hover:bg-slate-800 transition-all" href="#security">
                                    <span className="material-symbols-outlined text-xl"><GoShieldCheck /></span>
                                    <span className="text-sm font-medium">5. Data Security</span>
                                </a>
                                <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-[#ab9db9] hover:bg-slate-100 dark:hover:bg-slate-800 transition-all" href="#user-rights">
                                    <span className="material-symbols-outlined text-xl"><CiUser /></span>
                                    <span className="text-sm font-medium">6. User Rights</span>
                                </a>
                            </nav>
                            <div className="mt-8 p-4 bg-primary/10 rounded-xl border border-primary/20">
                                <h4 className="text-primary font-bold text-sm mb-2">Need help?</h4>
                                <p className="text-xs text-slate-500 dark:text-[#ab9db9] leading-relaxed">If you have any questions about our privacy practices, contact our compliance team.</p>
                                <a className="text-primary text-xs font-bold mt-2 inline-block hover:underline" href="mailto:privacy@garmentstracker.com">privacy@garmentstracker.com</a>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content Area */}
                    <article className="flex-1 max-w-[800px] space-y-12">
                        {/* 1. Introduction */}
                        <section className="scroll-mt-24" id="intro">
                            <h2 className="text-slate-900 dark:text-white text-3xl font-bold mb-6 flex items-center gap-3">
                                <span className="text-primary">1.</span> Introduction
                            </h2>
                            <div className="space-y-4 text-slate-600 dark:text-[#ab9db9] leading-relaxed text-lg">
                                <p>Welcome to the <strong>GTracker</strong>. We are committed to protecting your personal data and your right to privacy. This policy explains how we collect, use, and protect your information when you use our order and production tracking system.</p>
                                <p>Our system is designed to streamline the garment manufacturing process, and to do so effectively, we must process certain information related to manufacturing partners, order details, and administrative users.</p>
                            </div>
                        </section>

                        {/* 2. Data Collection */}
                        <section className="scroll-mt-24" id="data-collection">
                            <h2 className="text-slate-900 dark:text-white text-3xl font-bold mb-6 flex items-center gap-3">
                                <span className="text-primary">2.</span> Data Collection
                            </h2>
                            <div className="space-y-6">
                                <div className="p-6 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                                    <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-4 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary"><LuUserSearch /></span> Personal Data
                                    </h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-primary mt-0.5 text-sm">circle</span>
                                            <span>Account details (Name, business email, and encrypted password).</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-primary mt-0.5 text-sm">circle</span>
                                            <span>Shipping and delivery addresses for wholesale garment orders.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-primary mt-0.5 text-sm">circle</span>
                                            <span>Contact information for production managers and supply chain partners.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-6 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                                    <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-4 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary"><LuChartNoAxesCombined /></span> Usage Data
                                    </h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-primary mt-0.5 text-sm">circle</span>
                                            <span>Log data including IP addresses, browser types, and timestamp of logins.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-primary mt-0.5 text-sm">circle</span>
                                            <span>Audit trails of production status changes (e.g., from &quot;Cutting&quot; to &quot;Sewing&quot;).</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-primary mt-0.5 text-sm">circle</span>
                                            <span>Device information used to access the tracker dashboard.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* 3. Cookies Policy */}
                        <section className="scroll-mt-24" id="cookies">
                            <h2 className="text-slate-900 dark:text-white text-3xl font-bold mb-6 flex items-center gap-3">
                                <span className="text-primary">3.</span> Cookies Policy
                            </h2>
                            <div className="text-slate-600 dark:text-[#ab9db9] leading-relaxed text-lg space-y-4">
                                <p>We use cookies and similar tracking technologies (like local storage) to maintain your session and remember your dashboard preferences. This allows you to stay logged in and keep your customized production views active.</p>
                                <p className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary italic">Note: Disabling cookies may prevent certain features of the production tracker, such as real-time status updates, from functioning correctly.</p>
                            </div>
                        </section>

                        {/* 4. Third-Party Sharing */}
                        <section className="scroll-mt-24" id="third-party">
                            <h2 className="text-slate-900 dark:text-white text-3xl font-bold mb-6 flex items-center gap-3">
                                <span className="text-primary">4.</span> Third-Party Sharing
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-6 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-primary/50 transition-all group">
                                    <div className="size-12 bg-indigo-600/10 rounded-lg flex items-center justify-center text-indigo-500 mb-4 group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-3xl"><FaAddressCard /></span>
                                    </div>
                                    <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-2">Stripe</h3>
                                    <p className="text-sm text-slate-500 dark:text-[#ab9db9]">We use Stripe for secure billing and payment processing of production orders. We do not store credit card details on our servers.</p>
                                </div>
                                <div className="p-6 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-primary/50 transition-all group">
                                    <div className="size-12 bg-orange-600/10 rounded-lg flex items-center justify-center text-orange-500 mb-4 group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-3xl"><IoMdCloudDone /></span>
                                    </div>
                                    <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-2">Firebase</h3>
                                    <p className="text-sm text-slate-500 dark:text-[#ab9db9]">Our database and real-time syncing are powered by Google Firebase. Data is stored in secure, encrypted cloud environments.</p>
                                </div>
                            </div>
                        </section>

                        {/* 5. Data Security */}
                        <section className="scroll-mt-24" id="security">
                            <h2 className="text-slate-900 dark:text-white text-3xl font-bold mb-6 flex items-center gap-3">
                                <span className="text-primary">5.</span> Data Security
                            </h2>
                            <div className="space-y-4 text-slate-600 dark:text-[#ab9db9] leading-relaxed text-lg">
                                <p>We implement industry-standard security measures to protect your garment production data. This includes:</p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                    <li className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                                        <span className="material-symbols-outlined text-primary"><MdLockOutline /></span>
                                        <span className="text-sm font-medium">SSL/TLS Encryption</span>
                                    </li>
                                    <li className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                                        <span className="material-symbols-outlined text-primary"><BsKey /></span>
                                        <span className="text-sm font-medium">Multi-Factor Authentication</span>
                                    </li>
                                    <li className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                                        <span className="material-symbols-outlined text-primary"><MdOutlineStorage /></span>
                                        <span className="text-sm font-medium">Regular Data Backups</span>
                                    </li>
                                    <li className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                                        <span className="material-symbols-outlined text-primary"><MdOutlineVisibilityOff /></span>
                                        <span className="text-sm font-medium">Internal Access Audits</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* 6. User Rights */}
                        <section className="scroll-mt-24" id="user-rights">
                            <h2 className="text-slate-900 dark:text-white text-3xl font-bold mb-6 flex items-center gap-3">
                                <span className="text-primary">6.</span> User Rights
                            </h2>
                            <div className="space-y-4 text-slate-600 dark:text-[#ab9db9] leading-relaxed text-lg">
                                <p>You have certain rights regarding your personal information, including the right to access, correct, or delete the data we hold about you. For the GTracker, this specifically includes:</p>
                                <div className="flex flex-col gap-3 mt-4">
                                    <div className="p-4 border border-l-4 border-primary/30 dark:border-primary/50 rounded-r-lg">
                                        <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1 uppercase tracking-wider">Access & Portability</h4>
                                        <p className="text-sm">Request a copy of your production history and account data in a structured format.</p>
                                    </div>
                                    <div className="p-4 border border-l-4 border-primary/30 dark:border-primary/50 rounded-r-lg">
                                        <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1 uppercase tracking-wider">Rectification</h4>
                                        <p className="text-sm">Correct inaccurate or incomplete information regarding your business profile or orders.</p>
                                    </div>
                                    <div className="p-4 border border-l-4 border-primary/30 dark:border-primary/50 rounded-r-lg">
                                        <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1 uppercase tracking-wider">Deletion (&quot;Right to be Forgotten&quot;)</h4>
                                        <p className="text-sm">Request the permanent removal of your account and personal identifiers from our tracking system.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </article>
                </div>
            </main>
        </div>
    );
};

export default PrivacyPolicy;