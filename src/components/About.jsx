import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaInstagram, FaExternalLinkAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import image5 from '../images/5.jpg';
import images6 from '../images/6.jpg';
import images7 from '../images/7.jpg';
import images8 from '../images/8.jpg';
import images9 from '../images/9.jpg';
import images10 from '../images/10.jpg';
import images11 from '../images/11.jpg';

const About = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const numberOfImages = 2; // Set this to the total number of images you have
    const slideInterval = 7000; // Slide interval in milliseconds
    const slideSpeed = 70; // Slide speed in pixels per interval

    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex((prevSlideIndex) => (prevSlideIndex + 1) % numberOfImages);
        }, slideInterval);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-white  flex flex-col justify-between">

            <div className="grid grid-cols-1 gap-8 p-0 relative overflow-hidden" style={{ overflowX: 'hidden' }}>
                {/* <div className="flex space-x-6 p-3" style={{ transform: `translateX(-${slideIndex * 100}%)`, transition: `transform ${slideSpeed}s linear` }}>
                    <img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww" alt="Random" className=" transform hover:scale-x-50  hover:translate-x-4 hover:translate-y-3 transition duration-3000 w-full h-auto animate-right-to-left " />
                    <img src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww" alt="Random" className="hover:scale-x-50 duration-40 transition-all w-full h-auto animate-right-to-left" />
                    <img src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D" alt="Random" className="w-full h-auto animate-right-to-left transition-all hover:scale-75 translate-x-3" />
                    <img src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D" alt="Random" className="w-full h-auto animate-right-to-left hover:skew-x-12" />
                    <img src="https://www.digital4design.com/wp-content/uploads/2022/12/Web-Development-service.png" />
                    <img src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D" alt="Random" className="w-full h-auto animate-right-to-left" />
                    <img src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D" alt="Random" className="w-full h-auto animate-right-to-left  hover:scale-75 " />
                </div> */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h3 className="text-center text-3xl font-bold text-gray-800 mb-4 ">About Us</h3>
                    <p className="text-gray-600">Bhangale Software is an innovative IT company specializing in cutting-edge
                        product development and comprehensive services tailored to meet diverse
                        technological needs. While primarily focused on creating pioneering software
                        solutions, we also offer a range of client-centric services, ensuring seamless
                        integration and optimal utilization of our groundbreaking products. Our
                        commitment lies in delivering excellence through our products and leveraging our
                        expertise to provide top-tier services that exceed expectations.</p>
                    <h3 className="text-center text-3xl font-bold text-gray-800 mb-4 ">Vision</h3>
                    <p className="text-gray-600">Empowering industries through innovation and expertise, our vision is to pioneer
                        cutting-edge solutions that revolutionize diverse sectors. We aim to be the driving
                        force behind transformative technological advancements, crafting innovative
                        products that redefine standards and propel businesses towards unparalleled
                        success. Alongside our product innovation, we aspire to be the trusted partner for
                        businesses seeking to expand and thrive in the digital landscape, offering a
                        comprehensive suite of IT services tailored to fuel their growth and prosperity.</p>
                    <h3 className="text-center text-3xl font-bold text-gray-800 mb-4 ">IT Services</h3>
                    <div className="flex w-full h-60 space-x-6 p-3 space-y-3 hover:-translate-y-1 transform hover:scale-50" style={{ transform: `translateX(-${slideIndex * 100}%)`, transition: `transform ${slideSpeed}s linear` }}>
                        <img className='w-full h-full object-cover transition-transform duration-300 transform hover:scale-110' src={image5} />
                        <img className='w-full h-full object-cover transition-transform duration-300 transform hover:scale-110' src={images6} />
                        <img className='w-full h-full object-cover transition-transform duration-300 transform hover:scale-110' src={images7} />
                        <img className='w-full h-full object-cover transition-transform duration-300 transform hover:scale-110' src={images8} />
                        <img className='w-full h-full object-cover transition-transform duration-300 transform hover:scale-110' src={images9} />
                        <img className='w-full h-full object-cover transition-transform duration-300 transform hover:scale-110' src={images10} />
                        <img className='w-full h-full object-cover transition-transform duration-300 transform hover:scale-110' src={images11} />
                    </div>



                </div>
            </div>

        </div>
    );
}

export default About;
