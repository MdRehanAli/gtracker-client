import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { MdOutlineEmail } from 'react-icons/md';

const MyProfile = () => {

    const { user, signOutUser } = useAuth();

    const handleLogOut = () => {
        signOutUser()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Log Out Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                toast.error(error.message);
            })
    }

    return (
        <div className='mx-auto my-20 bg-accent w-11/12 rounded-xl'>
            <div className=' shadow-xl bg-linear-to-r from-primary/30 to-accent rounded-xl py-10 p-5 md:p-20'>
                <div className="mb-12 text-center">
                    <div className='flex justify-center items-center gap-2'>
                        <div className='flex justify-center text-primary animate-[bounce_2s_linear_infinite] hover:animate-none '><FaUserCircle className='text-3xl md:text-4xl font-extrabold' /></div>
                        <h1 className='text-3xl md:text-4xl font-bold text-primary'>My Profile</h1>
                    </div>
                </div>

                <div>
                    <div className='flex flex-col justify-between items-center gap-10 my-10'>
                        <div className='p-5 shadow-2xl rounded-xl relative border border-primary/50'>
                            <img className='rounded-xl w-[300px] mx-auto' src={user?.photoURL} alt="Provide correct image url to view" />
                            <div className='flex flex-col justify-center items-center'>
                                <h1 className='text-center text-3xl lg:text-5xl font-bold text-green-950 mt-10'><span className='text-primary'>{user?.displayName}</span></h1>
                                <p className=' text-primary mt-5'><span className='font-bold text-2xl'><MdOutlineEmail className='inline mr-1'/> </span><span className='text-secondary'>{user?.email}</span></p>

                                <a onClick={handleLogOut} to='/' className="btn btn-primary mt-5">LogOut</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;