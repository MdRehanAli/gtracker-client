import React from 'react';
import logo from '../../../assets/logo.png'
import { FaFacebook, FaGithub, FaSquareXTwitter, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center p-10">
            <aside>
                <img className='mx-auto w-1/4' src={logo} alt="Logo" />
                <p className="font-bold">
                    GTracker Industries Ltd.
                    <br />
                    Providing reliable services since 2025
                </p>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
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
        </footer>
    );
};

export default Footer;