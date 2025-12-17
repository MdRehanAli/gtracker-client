import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaTrash, FaUserCheck } from 'react-icons/fa6';
import { IoPersonRemoveOutline } from 'react-icons/io5';
import Swal from 'sweetalert2';

const ManageManagers = () => {

    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users', 'pending'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const updateManagerStatus = (user, status) => {
        const updateInfo = { status: status, email: user.email };
        axiosSecure.patch(`/users/${user._id}`, updateInfo)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch();

                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Manager status is set to ${status}.`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const handleApproval = user => {
        updateManagerStatus(user, 'approved')
    }

    const handleRejection = user => {
        updateManagerStatus(user, 'rejected')
    }

    return (
        <div>
            <h1>Manager</h1>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead className='text-center'>
                        <tr>
                            <th>NO.</th>
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
                                <td>{user.displayName}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    <button onClick={()=> handleApproval(user)} className='btn '>
                                        <FaUserCheck />
                                    </button>
                                    <button onClick={()=> handleRejection(user)} className='btn mx-2'>
                                        <IoPersonRemoveOutline />
                                    </button>
                                    <button className='btn '>
                                        <FaTrash></FaTrash>
                                    </button>
                                </td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageManagers;