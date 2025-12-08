import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../../hooks/useAuth';

const SocialLogin = () => {
    const { googleSignIn } = useAuth();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
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