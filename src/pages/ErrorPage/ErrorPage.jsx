import React from 'react';
import { Link } from 'react-router';
import ErrorImage from '../../assets/ErrorImage.png'

const ErrorPage = () => {
    return (
        <div className='flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20 md:p-20'>
            <img src={ErrorImage} alt="Error Page" />
            <div className='text-center md:text-left'>
                <h1 className='text-primary text-7xl md:text-9xl font-bold mb-5'>404</h1>
                <h4 className='text-primary/50 text-2xl md:text-4xl font-bold'>Page not found</h4>
                <div className='my-5 text-secondary'>
                    <p>We couldn't find the page you were looking for.</p>
                    <p>It may have been moved or just doesn't exist.</p>
                </div>
                <Link to='/' className='btn btn-primary'>Go Back home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;