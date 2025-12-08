import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLogin = (data) => {
        console.log("After LogIn Data: ", data);
    }

    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1>Welcome to GTracker!</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <fieldset className="fieldset">
                        {/* Email Field  */}
                        <label className="label">Email</label>
                        <input type="email" {...register('email', { required: true })} className="input" placeholder="Email" />
                        {errors.email?.type === "required" && <p className='text-red-500'>Email is Required</p>}

                        {/* Password Field  */}
                        <label className="label">Password</label>
                        <input type="password" {...register('password', {
                            required: true, minLength: 6
                        })} className="input" placeholder="Password" />
                        {errors.password?.type === "required" && <p className='text-red-500'>Password is Required</p>}
                        {errors.password?.type === "minLength" && <p className='text-red-500'>Password must have at least 6 Character</p>}

                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                    <p>New to GTracker? Please <Link to='/register' className='font-bold underline text-red-500'>Register</Link></p>
                </form>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;