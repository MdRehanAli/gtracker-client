import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Footer from '../pages/Shared/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='max-w-7xl mx-auto w-11/12'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default RootLayout;