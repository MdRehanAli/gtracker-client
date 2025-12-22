import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { Helmet } from 'react-helmet-async';

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signInUser } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false)
    const handleShowPassword = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    }

    const handleLogin = (data) => {
        console.log("After LogIn Data: ", data);
        signInUser(data.email, data.password)
            .then(result => {
                console.log(result.user);

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });

                navigate(location?.state || '/')
            })
            .catch(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Invalid Email & Password",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }

    return (
        <div className="card w-full max-w-sm mx-auto my-20 shrink-0 shadow-2xl">
            <Helmet>
                <title>GTracker | Login</title>
            </Helmet>
            <div className="card-body bg-base-100">
                <h1 className='text-center text-2xl font-bold text-secondary mb-3'>Welcome to GTracker!</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <fieldset className="fieldset">
                        {/* Email Field  */}
                        <label className="label">Email</label>
                        <input type="email" {...register('email', { required: true })} className="input" placeholder="Email" />
                        {errors.email?.type === "required" && <p className='text-red-500'>Email is Required</p>}

                        {/* Password Field  */}
                        <label className="label">Password</label>
                        <div className='flex items-center relative'>
                            <input type={showPassword ? "text" : "password"} {...register('password', {
                                required: true, minLength: 6
                            })} className="input" placeholder="Password" />
                            <button onClick={handleShowPassword} className='absolute top-2 right-7 text-xl text-primary'>{showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</button>
                        </div>

                        {errors.password?.type === "required" && <p className='text-red-500'>Password is Required</p>}
                        {errors.password?.type === "minLength" && <p className='text-red-500'>Password must have at least 6 Character</p>}

                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                    <p className='my-2 text-center'>New to GTracker? Please <Link to='/register' state={location.state} className='font-bold underline text-red-500'>Register</Link></p>
                </form>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;