import React from 'react';
import logo from '../../../assets/logo.png'
import { FaFacebook, FaGithub, FaSquareXTwitter, FaXTwitter } from 'react-icons/fa6';
import footer from '../../../assets/Footer.png';

const Footer = () => {
    return (
        <div className='bg-cover bg-no-repeat mt-20' style={{ backgroundImage: `url(${footer})` }}>
            <footer className="footer footer-horizontal footer-center p-10 bg-[#000000c7] text-white">
                <aside>
                    <img className='mx-auto w-1/4 mb-5' src={logo} alt="Logo" />
                    <p className="text-2xl font-bold">
                        GTracker Industries Ltd.
                    </p>
                    <p className='font-bold'>Providing reliable services since 2025</p>
                </aside>
                <nav>
                    <div className="grid grid-flow-col gap-5 text-4xl">
                        <a>
                            <FaXTwitter />
                        </a>
                        <a>
                            <FaGithub />
                        </a>
                        <a>
                            <FaFacebook></FaFacebook>
                        </a>
                    </div>
                </nav>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </footer>
        </div>
    );
};

export default Footer;