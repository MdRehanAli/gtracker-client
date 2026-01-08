import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const SocialLogin = () => {
    const { googleSignIn } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const axiosSecure = useAxiosSecure();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                const newRole = 'user';

                // Create user in the database 
                const userInfo = {
                    email: result.user.email,
                    displayName: result.user.displayName,
                    photoURL: result.user.photoURL,
                    role: newRole
                }

                axiosSecure.post('/users', userInfo)
                    .then(res => {
                        console.log("User data has been stored: ", res.data);

                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Google Login Successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate(location?.state || '/')
                    })
            })
            .catch(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Failed Google Sign In",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }

    return (
        <div className=''>
            <p className='text-center mb-2'>Or Login With</p>
            <button onClick={handleGoogleSignIn} className='btn w-full'><FcGoogle className='text-2xl'></FcGoogle> Login with Google</button>
        </div>
    );
};

export default SocialLogin;