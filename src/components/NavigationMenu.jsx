import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NavigationMenu = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);
    const [showServices, setShowServices] = useState(false);

    const handleNavigation = (path) => {
        setActiveLink(path);
        if (path !== "/services") { // Check if the clicked path is not services
            setShowServices(false); // Close the services dropdown
        }
        navigate(path);
    };

    const toggleServices = () => {
        setShowServices(!showServices);
    };

    return (
        <div className='sticky top-0 bg-white py-2 z-50'>
            <div className="mx-10 flex items-center justify-between">
                <div className="inline-block text-center p-2 font-sans rounded-lg h-10 bg-purple-700 text-white">
                    <div className='flex space-x-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-6 h-6 stroke-current text-white-50">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                        </svg>


                        <span className="font-sans ">EduCounseling</span></div>

                </div>
                <ul className="flex space-x-10">
                    <li className={`cursor-pointer hover:text-orange-600 ${activeLink === "/" ? ' font-bold border-b-2 border-blue-900' : ''} text-blue-900  text-base font-normal leading-5 tracking-normal text-left`} onClick={() => handleNavigation("/")}>Home</li>
                    <li className={`cursor-pointer hover:text-orange-600 ${activeLink === "/about" ? ' font-bold border-b-2 border-blue-900' : ''} text-blue-900  text-base font-normal leading-5 tracking-normal text-left`} onClick={() => handleNavigation("/about")}>About Us</li>
                    <li className={`relative ${showServices ? 'dropdown-open' : ''}`}>
                        <span className="cursor-pointer hover:text-orange-600 text-blue-900 font-sans text-base font-normal leading-5 tracking-normal text-left" onClick={toggleServices}>Our Services</span>
                        {showServices && (
                            <div className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg w-64 z-50">
                                <ul className="divide-y divide-gray-200">
                                    <li className="p-4 cursor-pointer hover:bg-gray-100 transition-colors duration-300" onClick={() => handleNavigation("/career")}>
                                        <span className="flex items-center">
                                            Career Guidance
                                        </span>
                                    </li>
                                    <li className="p-4 cursor-pointer hover:bg-gray-100 transition-colors duration-300" onClick={() => handleNavigation("/service2")}>
                                        <span className="flex items-center">
                                            Personality Development
                                        </span>
                                    </li>

                                    <li className="p-4 cursor-pointer hover:bg-gray-100 transition-colors duration-300" onClick={() => handleNavigation("/service1")}>
                                        <span className="flex items-center">
                                            Job search
                                        </span>
                                    </li>
                                    <li className="p-4 cursor-pointer hover:bg-gray-100 transition-colors duration-300" onClick={() => handleNavigation("/service1")}>
                                        <span className="flex items-center">
                                            Recruiter
                                        </span>
                                    </li>
                                    <li className="p-4 cursor-pointer hover:bg-gray-100 transition-colors duration-300" onClick={() => handleNavigation("/service1")}>
                                        <span className="flex items-center">
                                            Academic Courses
                                        </span>
                                    </li>
                                    <li className="p-4 cursor-pointer hover:bg-gray-100 transition-colors duration-300" onClick={() => handleNavigation("/service1")}>
                                        <span className="flex items-center">
                                            Admission Council
                                        </span>
                                    </li>
                                    <li className="p-4 cursor-pointer hover:bg-gray-100 transition-colors duration-300" onClick={() => handleNavigation("/service1")}>
                                        <span className="flex items-center">
                                            Technical Courses
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li className={`cursor-pointer inline-block py-2 px-4 bg-purple-600 text-white font-inter text-base font-normal leading-5 tracking-normal text-left rounded-md transition duration-300 ease-in-out ${activeLink === "/contact" ? ' font-bold border-b-2 border-blue-900' : 'hover:bg-purple-700'}`} onClick={() => handleNavigation("/contact")}>Login/Registration</li>
                </ul>
            </div>
        </div>
    );
}

export default NavigationMenu;
