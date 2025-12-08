import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { registerUser, updateUser } = useAuth()

    const handleRegister = (data) => {
        console.log("After Register Data: ", data);
        const profileImage = data.photo[0];

        registerUser(data.email, data.password)
            .then(result => {
                console.log(result.user);

                const formdata = new FormData();
                formdata.append('image', profileImage);

                const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`

                axios.post(image_API_URL, formdata)
                    .then(res => {

                        const usersProfile = {
                            displayName: data.name,
                            photoURL: res.data.data.url,
                        }

                        updateUser(usersProfile)
                            .then(() => {
                                console.log("User Profile Updated.")
                            })
                            .catch(error => {
                                console.log(error.message);
                            })
                    })

            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1>Welcome to GTracker!</h1>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <fieldset className="fieldset">

                        {/* Name Field  */}
                        <label className="label">Name</label>
                        <input type="text" {...register('name', { required: true, minLength: 3 })} className="input" placeholder="Name" />
                        {errors.name?.type === "required" && <p className='text-red-500'>Name is Required</p>}
                        {errors.name?.type === "minLength" && <p className='text-red-500'>Name must have at least 3 Character</p>}

                        {/* Email Field  */}
                        <label className="label">Email</label>
                        <input type="email" {...register('email', { required: true })} className="input" placeholder="Email" />
                        {errors.email?.type === "required" && <p className='text-red-500'>Email is Required</p>}

                        {/* Photo Field  */}
                        <label className="label">Photo</label>
                        <input type="file" {...register('photo', { required: true })} className="file-input" placeholder="Photo" />
                        {errors.photo?.type === "required" && <p className='text-red-500'>Photo is Required</p>}

                        {/* Role Field  */}
                        <label className="label">Role</label>
                        <select {...register('role', { required: true })} defaultValue="Pick a Role" className="select">
                            <option disabled={true}>Pick a Role</option>
                            <option value="buyer">Buyer</option>
                            <option value="manager">Manager</option>
                        </select>
                        {errors.role?.type === "required" && <p className='text-red-500'>Role is Required</p>}

                        {/* Password Field  */}
                        <label className="label">Password</label>
                        <input type="password" {...register('password', {
                            required: true, minLength: 6, pattern: /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/
                        })} className="input" placeholder="Password" />
                        {errors.password?.type === "required" && <p className='text-red-500'>Password is Required</p>}
                        {errors.password?.type === "minLength" && <p className='text-red-500'>Password must have at least 6 Character</p>}
                        {errors.password?.type === "pattern" && <p className='text-red-500'>Password must have at least an Uppercase and a Lowercase Character</p>}

                        <button className="btn btn-neutral mt-4">Register</button>
                    </fieldset>
                    <p>Already have an Account? Please <Link to='/login' className='font-bold underline text-red-500'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;