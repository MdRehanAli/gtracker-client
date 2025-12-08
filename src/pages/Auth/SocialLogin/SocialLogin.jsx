import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {

    const handleGoogleSignIn = () => {

    }

    return (
        <div>
            <p className='text-center'>Or Login With</p>
            <button onClick={handleGoogleSignIn} className='btn w-full'><FcGoogle className='text-2xl'></FcGoogle> Login with Google</button>
        </div>
    );
};

export default SocialLogin;