import React from 'react';
import { Link, NavLink } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import Toggle from '../../../components/Toggle/Toggle';
import './Navbar.css'

const Navbar = () => {

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

    const links = <>
        <li><NavLink to='/' className="rounded-2xl font-semibold px-4">Home</NavLink></li>
        <li><NavLink to='/all-products' className="rounded-2xl font-semibold px-4">All-Products</NavLink></li>
        <li><NavLink to='/about-us' className="rounded-2xl font-semibold px-4">About Us</NavLink></li>
        <li><NavLink to='/contact' className="rounded-2xl font-semibold px-4">Contact</NavLink></li>
        {
            user && <>
                <li><NavLink to='/dashboard' className="rounded-2xl font-semibold px-4">Dashboard</NavLink></li>
            </>
        }
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">GTracker</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex gap-2">
                <Toggle></Toggle>
                {
                    user ?
                        <div className="flex gap-2">
                            <div className="avatar avatar-online">
                                <div className="ring-green-500 w-12 rounded-full ring-4">
                                    <img src={user?.photoURL} alt={user?.displayName} />
                                </div>
                            </div>
                            <a onClick={handleLogOut} to='/' className="btn">LogOut</a>
                        </div>
                        :
                        <div className='flex gap-2'>
                            <Link to='/login' className="btn">Login</Link>
                            {/* <Link to='/register' className="btn">Register</Link> */}
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;