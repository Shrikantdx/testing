// StudentProfile.jsx

import React from 'react';

const DashProfile = () => {
    return (
        <div className="flex-grow p-4">
            <h1 className="text-2xl font-bold mb-4">Student Profile</h1>
            <div className="bg-white shadow-md rounded-lg p-4">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                    <p className="text-lg font-semibold">John Doe</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                    <p className="text-lg font-semibold">john.doe@example.com</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone:</label>
                    <p className="text-lg font-semibold">123-456-7890</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address:</label>
                    <p className="text-lg font-semibold">123 Street, City, State, Zip</p>
                </div>
            </div>
        </div>
    );
};

export default DashProfile;
