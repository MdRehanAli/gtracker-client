import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const SocialLogin = () => {
    const { googleSignIn } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Google Login Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });

                navigate(location?.state || '/')
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