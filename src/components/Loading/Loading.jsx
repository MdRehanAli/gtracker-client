import React from 'react';
import { ScaleLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <ScaleLoader size={60} color={'#7C3AED'} />
        </div>
    );
};

export default Loading;