import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router';

const SocialLogin = () => {
    const { googleSignIn } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                navigate(location?.state || '/')
            })
            .catch(error => {
                console.log(error.message);
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