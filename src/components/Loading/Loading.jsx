import React from 'react';
import { ScaleLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <ScaleLoader size={60} color={'#dadada'} />
        </div>
    );
};

export default Loading;