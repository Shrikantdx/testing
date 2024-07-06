import React from 'react';
import dash from "../images/dash.png";

export default function DashView() {
    return (
        <div className='flex flex-row m-8  text-white bg-purple-400 rounded-xl'>

            <div className='flex flex-col ml-10'>
                <h1 className='mb-10  opacity-70 mt-5'>March 18, 2024</h1>
                <h1 className='text-2xl font-serif  mt-8'>Welcome back, Sunayana!</h1>
                <h1 className='mb-0 opacity-70'>Always stay updated in your student portal</h1>
            </div>
            <img className='object-cover ml-auto w-60 h-100 mr-8' src={dash} alt='dashboard' />

        </div>
    );
}
