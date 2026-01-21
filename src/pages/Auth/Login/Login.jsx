import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash, FaRegUser } from 'react-icons/fa6';
import { Helmet } from 'react-helmet-async';
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { GrUserSettings } from 'react-icons/gr';

const Login = () => {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const { signInUser } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false)
    const handleShowPassword = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    }

    const demoCredentials = {
        admin: {
            email: "gtracker@gmail.com",
            password: "Gtracker"
        },
        manager: {
            email: "manager@gmail.com",
            password: "Manager"
        },
        user: {
            email: "user@gmail.com",
            password: "User123"
        }
    };

    const handleDemoLogin = (role) => {
        const credential = demoCredentials[role];

        // Auto fill form
        setValue("email", credential.email);
        setValue("password", credential.password);

        // Auto submit
        handleLogin(credential);
    };


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
                <h1 className='text-center text-2xl font-bold text-primary mb-3'>Welcome to GTracker!</h1>
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
                        <button className="btn btn-primary mt-4">Login</button>
                    </fieldset>
                    <p className='my-2 text-center'>New to GTracker? Please <Link to='/register' state={location.state} className='font-bold underline text-red-500'>Register</Link></p>
                </form>
                <SocialLogin></SocialLogin>
                <div>
                    <p className="text-primary text-[11px] font-bold mb-4 uppercase tracking-[0.25em] text-center opacity-60">Demo Quick Access</p>
                    {/* Fill Admin credentials  */}
                    <div className="grid grid-cols-3 gap-3">
                        <button onClick={() => handleDemoLogin("admin")} className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg border border-border-dark hover:border-primary/60 hover:bg-primary/10 transition-all group">
                            <div className='text-primary group-hover:scale-110 transition-transform text-2xl'><MdOutlineAdminPanelSettings className='' /></div>
                            <span className="text-slate-300 text-[10px] font-bold tracking-wider">ADMIN</span>
                        </button>

                        {/* Fill Manager Credential  */}
                        <button onClick={() => handleDemoLogin("manager")} className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg border border-border-dark hover:border-primary/60 hover:bg-primary/10 transition-all group">
                            <div className='text-primary group-hover:scale-110 transition-transform text-2xl'><GrUserSettings className='' /></div>
                            <span className="text-slate-300 text-[10px] font-bold tracking-wider">MANAGER</span>
                        </button>

                        {/* Fill User Credential  */}
                        <button onClick={() => handleDemoLogin("user")} className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg border border-border-dark hover:border-primary/60 hover:bg-primary/10 transition-all group">
                            <div className='text-primary group-hover:scale-110 transition-transform text-2xl'><FaRegUser className='' /></div>
                            <span className="text-slate-300 text-[10px] font-bold tracking-wider">USER</span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;