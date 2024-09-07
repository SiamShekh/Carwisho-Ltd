import React from 'react';
import Icon from '../template/Icon';
import { Link } from 'react-router-dom';

const ErrorElement = () => {
    return (
        <div className='min-h-screen relative flex justify-center items-center flex-col gap-5'>
            <div className="absolute left-[50%] -translate-x-[50%] top-0 w-fit flex items-center gap-3 font-mono text-2xl mx-auto pt-10  ">
                <Icon /> Carwashio
            </div>
            
            <p className='text-5xl'>🥲</p>
            <p className='text-3xl text-blue-700 font-bold font-mono mt-3'>Ooups, page not found</p>

            <Link to={'/'} className='uppercase bg-blue-500 px-6 py-2 rounded-full mt-5 font-bold'>Back to homepage</Link>
        </div>
    );
};

export default ErrorElement;