import React from 'react';
import { FaFacebook, FaGithub, FaSquareXTwitter, FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div>

            <footer className="bg-bg-dark py-24 mx-auto max-w-7xl w-11/12">
                <div className="">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-16 text-center md:text-left">
                        <div className="col-span-1 md:col-span-2 space-y-8">
                            <div className="flex justify-center md:justify-start gap-2">
                                <p className="text-2xl font-black">GTracker</p>
                            </div>
                            <p className="text-zinc-500 md:max-w-sm leading-relaxed text-lg">
                                The intelligence layer for modern textile manufacturing. Empowering production managers with precision data since 2018.
                            </p>
                            <div className="flex gap-4">
                                <nav className='flex justify-center md:justify-start w-full'>
                                    <div className="grid grid-flow-col gap-5 text-4xl ">
                                        <a className='hover:text-white transition-colors'>
                                            <FaXTwitter />
                                        </a>
                                        <a className='hover:text-white transition-colors'>
                                            <FaGithub />
                                        </a>
                                        <a className='hover:text-white transition-colors'>
                                            <FaFacebook></FaFacebook>
                                        </a>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-8">Products</h4>
                            <ul className="space-y-4 text-base font-semibold text-zinc-500">
                                <li><Link className="hover:text-white transition-colors" to="all-products">All Products</Link></li>
                                <li><Link className="hover:text-white transition-colors" to="/dashboard">Dashboard</Link></li>
                                {/* <li><Link className="hover:text-white transition-colors" to="#">Quality Assurance</Link></li>
                                <li><Link className="hover:text-white transition-colors" to="#">Digital Twin</Link></li> */}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-8">Company</h4>
                            <ul className="space-y-4 text-base font-semibold text-zinc-500">
                                <li><Link className="hover:text-white transition-colors" to="/about-us">About US</Link></li>
                                <li><Link className="hover:text-white transition-colors" to="/contact">Contact</Link></li>
                                <li><Link className="hover:text-white transition-colors" to="/policy">Privacy Policy</Link></li>
                                <li><Link className="hover:text-white transition-colors" to="/terms">Terms & Conditions</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-24 border-t border-zinc-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-sm text-zinc-600 font-medium">Copyright © {new Date().getFullYear()} - All right reserved.</p>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-5 text-sm text-zinc-600 font-bold uppercase tracking-widest">
                            <Link className="hover:text-primary transition-colors" to="/policy">Privacy Policy</Link>
                            <Link className="hover:text-primary transition-colors" to="/terms">Terms & Conditions</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>


    );
};

export default Footer;