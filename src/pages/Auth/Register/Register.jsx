import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { Helmet } from 'react-helmet-async';

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { registerUser, updateUser } = useAuth()

    const location = useLocation();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();

    const [showPassword, setShowPassword] = useState(false)
    const handleShowPassword = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    }

    const handleRegister = (data) => {
        const profileImage = data.photo[0];

        registerUser(data.email, data.password)
            .then(() => {

                const formdata = new FormData();
                formdata.append('image', profileImage);

                const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`

                axios.post(image_API_URL, formdata)
                    .then(res => {

                        const photoURL = res.data.data.url;

                        // Create user in the database 
                        const userInfo = {
                            email: data.email,
                            displayName: data.name,
                            photoURL: photoURL,
                            role: data.role
                        }
                        axiosSecure.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log("User created in the database.")
                                }
                            })

                        const usersProfile = {
                            displayName: data.name,
                            photoURL: photoURL,
                        }

                        updateUser(usersProfile)
                            .then(() => {
                                // console.log("User Profile Updated.");

                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "Login Successfully",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                navigate(location?.state || "/")
                            })
                            .catch(error => {
                                toast.error(error.message);
                            })
                    })

            })
            .catch(error => {
                toast.error(error.message);
            })
    }

    return (
        <div className="border border-primary/20 hover:border-primary rounded-xl w-full max-w-sm mx-auto my-20 shrink-0 shadow-2xl text-primary">
            <Helmet>
                <title>GTracker | Registration</title>
            </Helmet>
            <div className="card-body p-8">
                <h1 className='text-center text-2xl font-bold text-primary mb-3'>Register to GTracker!</h1>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <fieldset className="fieldset">

                        {/* Name Field  */}
                        <label className="label">Name</label>
                        <input type="text" {...register('name', { required: true, minLength: 3 })} className="input w-full border border-primary outline-primary" placeholder="Name" />
                        {errors.name?.type === "required" && <p className='text-red-500'>Name is Required</p>}
                        {errors.name?.type === "minLength" && <p className='text-red-500'>Name must have at least 3 Character</p>}

                        {/* Email Field  */}
                        <label className="label">Email</label>
                        <input type="email" {...register('email', { required: true })} className="input w-full border border-primary outline-primary" placeholder="Email" />
                        {errors.email?.type === "required" && <p className='text-red-500'>Email is Required</p>}

                        {/* Photo Field  */}
                        <label className="label">Photo</label>
                        <input type="file" {...register('photo', { required: true })} className="file-input w-full border border-primary outline-primary text-primary" placeholder="Photo" />
                        {errors.photo?.type === "required" && <p className='text-red-500'>Photo is Required</p>}

                        {/* Role Field  */}
                        <label className="label">Role</label>
                        <select {...register('role', { required: true })} defaultValue="user" className="select w-full border border-primary outline-primary">
                            <option disabled={true}>user</option>
                            <option value="manager">Manager</option>
                        </select>
                        {errors.role?.type === "required" && <p className='text-red-500'>Role is Required</p>}

                        {/* Password Field  */}
                        <label className="label">Password</label>
                        <div className='flex items-center relative'>
                            <input type={showPassword ? "text" : "password"} {...register('password', {
                                required: true, minLength: 6, pattern: /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/
                            })} className="input w-full  border border-primary outline-primary" placeholder="Password" />
                            <button onClick={handleShowPassword} className='absolute top-2 right-4 text-xl text-primary'>{showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</button>
                        </div>

                        {errors.password?.type === "required" && <p className='text-red-500'>Password is Required</p>}
                        {errors.password?.type === "minLength" && <p className='text-red-500'>Password must have at least 6 Character</p>}
                        {errors.password?.type === "pattern" && <p className='text-red-500'>Password must have at least an Uppercase and a Lowercase Character</p>}

                        <button className="btn btn-primary mt-4">Register</button>
                    </fieldset>
                    <p className='mt-2 text-center'>Already have an Account? Please <Link to='/login' state={location.state} className='font-bold underline text-red-500'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;