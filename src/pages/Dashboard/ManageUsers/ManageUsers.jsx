import React, { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaUserShield } from 'react-icons/fa6';
import { FiShieldOff } from 'react-icons/fi';
import Swal from 'sweetalert2';
import { FaUserCog } from 'react-icons/fa';

const ManageUsers = () => {
    const [searchText, setSearchText] = useState('')

    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users', searchText],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users?searchText=${searchText}`);
            return res.data;
        }
    })

    const handleMakeAdmin = (user) => {
        const roleInfo = { role: 'admin' }

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make Admin!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/${user._id}/role`, roleInfo)
                    .then(res => {
                        if (res.data.modifiedCount) {
                            refetch();
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: `${user.displayName} marked as an Admin.`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    });
            }
        })
    }


    const handleRemoveAdmin = (user) => {
        const roleInfo = { role: 'user' }

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Remove Admin!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/${user._id}/role`, roleInfo)
                    .then(res => {
                        if (res.data.modifiedCount) {
                            refetch();
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: `${user.displayName} removed from admin.`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    });
            }
        })
    }

    return (
        <div className='mx-auto md:h-full my-20'>
            <div className=' shadow-xl  rounded-xl py-10 p-5 md:p-10 w-11/12 mx-auto border'>
                <div className='flex justify-center text-7xl'><FaUserCog className='p-4 rounded-xl' /></div>
                <h1 className='text-3xl md:text-5xl font-bold text-center my-5'>Manage users</h1>
                <div className='flex justify-center'>
                    <label className="input w-full md:w-1/2 h-14 mb-8">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input onChange={(e) => setSearchText(e.target.value)} type="search" className="grow" placeholder="Search Users" />
                    </label>
                </div>

                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead className='text-center'>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>

                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td className='w-fit'>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="rounded-xl h-12 w-12">
                                                    <img
                                                        src={user.photoURL}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{user.displayName}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        {user.role === 'admin' ?
                                            <button onClick={() => handleRemoveAdmin(user)} className='btn'>
                                                <FiShieldOff></FiShieldOff>
                                            </button>
                                            :
                                            <button onClick={() => handleMakeAdmin(user)} className='btn'>
                                                <FaUserShield></FaUserShield>
                                            </button>
                                        }
                                    </td>

                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;