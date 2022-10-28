import React from 'react';
import { useRouteError } from 'react-router-dom';

const Errorpage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div className='bg-secondary min-vh-100 d-flex flex-column justify-content-center align-items-center'>
            <h1 className='fw-bold text-4xl'>Oops ! </h1>
            <h1>{error.status}</h1>
            <h1 className='fw-bold display-1'>Page {error.statusText}</h1>
        </div>
    );
};

export default Errorpage;