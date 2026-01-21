import React from 'react';
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { BiLogoGmail } from 'react-icons/bi';
import { FaLocationDot } from 'react-icons/fa6';
import { IoCall } from 'react-icons/io5';
import { MdOutlineMarkUnreadChatAlt } from 'react-icons/md';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';

const Contact = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const handleMessage = (data) => {
        console.log(data);

        Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Message has been send",
            showConfirmButton: false,
            timer: 1500
        });

        reset()
    }

    return (
        <section className='max-w-7xl mx-auto w-11/12 my-20'>
            <Helmet>
                <title>GTracker | Contact</title>
            </Helmet>
            <div>
                <div className='text-center'>
                    <div className='flex justify-center text-7xl mb-5'><MdOutlinePermContactCalendar className='p-4 bg-gray-300 rounded-xl' /></div>
                    <h1 className='text-3xl md:text-5xl font-bold'>Get in Touch With Us</h1>
                    <p className='mt-3 mb-12 md:w-2/3 mx-auto'>Have questions, need support, or want to collaborate? Our team is here to assist you with quick and reliable help, reach out anytime.</p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center gap-16'>
                <div className=''>
                    <h1 className='text-3xl md:text-5xl font-bold mb-8 md:mb-14 text-center'>Contact US</h1>
                    <div className="flex justify-center items-center gap-5 mx-auto w-11/12">
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                            <div className='flex items-center gap-2'>
                                <div className='bg-gray-300 w-fit p-3 rounded-full'>
                                    <BiLogoGmail className='text-4xl' />
                                </div>
                                <div className='flex gap-2 flex-col pl-4'>
                                    <h2 className='font-bold text-xl'>Email</h2>
                                    <p className='text-gray-400'>To reach out us send mail</p>
                                    <p className='text-gray-500 font-bold'>gtracker24@gmail.com</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div className='bg-gray-300 w-fit p-3 rounded-full'>
                                    <MdOutlineMarkUnreadChatAlt className='text-4xl' />
                                </div>
                                <div className='flex gap-2 flex-col pl-4'>
                                    <h2 className='font-bold text-xl'>Live chat</h2>
                                    <p className='text-gray-400'>We are very friendly here to help.</p>
                                    <p className='text-gray-500 font-bold'>Start new chat</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div className='bg-gray-300 w-fit p-3 rounded-full'>
                                    <FaLocationDot className='text-4xl' />
                                </div>
                                <div className='flex gap-2 flex-col pl-4'>
                                    <h2 className='font-bold text-xl'>Address</h2>
                                    <p className='text-gray-400'>We are currently staying in</p>
                                    <p className='text-gray-500 font-bold'>Dhaka, Bangladesh</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div className='bg-gray-300 w-fit p-3 rounded-full'>
                                    <IoCall className='text-4xl' />
                                </div>
                                <div className='flex gap-2 flex-col pl-4'>
                                    <h2 className='font-bold text-xl'>Phone</h2>
                                    <p className='text-gray-400'>Call us for order/booking.</p>
                                    <p className='text-gray-500 font-bold'>01854-465273</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/2'>

                    <div className=' bg-gray-300 p-8 md:px-12 md:py-12 rounded-xl'>
                        <form onSubmit={handleSubmit(handleMessage)}>
                            <fieldset className="fieldset">
                                <label className="text-black label mt-4">Name</label>
                                <div className='flex justify-between items-center gap-5'>
                                    <div>
                                        <input type="text" {...register('firstName', { required: true })} className="input w-full" placeholder="First Name" />
                                        {errors.firstName?.type === "required" && <p className='text-red-500'>First Name is Required</p>}
                                    </div>
                                    <div>
                                        <input type="text" {...register('lastName', { required: true })} className="input w-full" placeholder="Last Name" />
                                        {errors.lastName?.type === "required" && <p className='text-red-500'>Last Name is Required</p>}
                                    </div>
                                </div>

                                <label className="text-black label mt-2">Email</label>
                                <input type="email" {...register('email', { required: true })} className="input w-full" placeholder="Email" />
                                {errors.email?.type === "required" && <p className='text-red-500'>Email is Required</p>}

                                <label className="text-black label mt-2">Message</label>
                                <textarea rows={5} cols={20} className="w-full bg-white rounded-sm p-2 text-xl" {...register('message', { required: true })}></textarea>
                                {errors.message?.type === "required" && <p className='text-red-500'>Message is Required</p>}

                                <button className="btn btn-primary w-full mt-3">Send Message</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;