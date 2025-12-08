import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/Shared/Navbar/Navbar';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='max-w-7xl mx-auto w-11/12'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default RootLayout;