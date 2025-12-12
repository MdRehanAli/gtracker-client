import React from 'react';
import { MdOutlinePermContactCalendar } from "react-icons/md";

const Contact = () => {
    return (
        <div className='max-w-7xl mx-auto w-11/12 my-20'>
            <div className='text-center'>
                <div className='flex justify-center text-7xl mb-5'><MdOutlinePermContactCalendar className='p-4 bg-gray-300 rounded-3xl' /></div>
                <h1 class='text-3xl md:text-5xl font-bold'>Get in Touch With Us</h1>
                <p class='mt-3 mb-12 md:w-2/3 mx-auto'>Have questions, need support, or want to collaborate? Our team is here to assist you with quick and reliable help, reach out anytime.</p>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Contact;