import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
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

                // Create user in the database 
                const userInfo = {
                    email: result.user.email,
                    displayName: result.user.displayName,
                    photoURL: result.user.photoURL,
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
            .catch(error => {
                toast.error(error.message);
            })
    }

    return (
        <div>
            <p className='text-center'>Or Login With</p>
            <button onClick={handleGoogleSignIn} className='btn w-full'><FcGoogle className='text-2xl'></FcGoogle> Login with Google</button>
        </div>
    );
};

export default SocialLogin;