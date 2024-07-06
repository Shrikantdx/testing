import React from 'react';

const Error = () => {

    return (
        <div className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <img className="mx-auto h-48 w-auto" src={`https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXJyb3IlMjA0MDR8ZW58MHx8MHx8fDA%3D`} alt="Error" />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Oops! Something went wrong.</h2>
                </div>
            </div>
        </div>
    );
};

export default Error;
