import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import twitterIcon from '../image 1.png';

export default function Home() {
    const location = useLocation();
    const navigate = useNavigate();



    return (
        <div className=' m-8 '>
            <div>


                <div className='flex  '>
                    <div className=' py-40'>

                        <h1 className="text-red-400 text-6xl space-y-8 " style={{ textShadow: '0px 4px 6.3px rgba(0, 0, 0, 0.25)' }} >Unlock Your</h1>
                        <h1 className='text-6xl py-3 text-purple-500 text-shadow-md' style={{ textShadow: '0px 4px 6.3px rgba(0, 0, 0, 0.25)' }}> Future</h1>
                        <h1 className='text-gray-500'>Expert College Counseling Services</h1>

                    </div>
                    <div>
                        {/* <img
                            src="https://plus.unsplash.com/premium_photo-1681490490493-935cd8a8f422?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJvb2slMjByZWFkaW5nJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"
                            alt="key"
                            className=" ml-auto	  w-full px-4 py-5 rounded-4xl "
                        /> */}
                        <img
                            src={twitterIcon}
                            alt="Twitter"
                            className="absolute bottom-0 right-0 w-100 h-80 px-8 py-8 rounded-full pr-60"
                        />

                    </div>

                </div>

            </div>
            <div className=" opacity-2 fixed top-20 left-8 bottom-40 blur-2xl
            flex items-start justify-start rounded-full bg-gradient-to-br bg-pink-500 overflow-hidden shadow-lg" style={{ height: '100px', width: '100px' }}>


            </div>
            {/* <div className="fixed  bottom-0 blur-md left-0 flex items-start justify-start rounded-full bg-gradient-to-br bg-blue-500 overflow-hidden shadow-lg" style={{ height: '200px', width: '200px' }}>

            </div> */}

            <div className="fixed left-0 bottom-0 blur-xl  flex items-end justify-end rounded-full bg-gradient-to-br bg-blue-500 overflow-hidden shadow-lg" style={{ height: '100px', width: '100px' }}>

            </div>
            <div className="blur-2xl fixed top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 flex items-start justify-start rounded-full bg-gradient-to-br bg-purple-400 overflow-hidden shadow-lg" style={{ height: '100px', width: '100px', left: '33%' }}>
                {/* Content */}
            </div>


            <div>

                <div className="fixed left-0 bottom-0 blur-3xl  flex items-end justify-end rounded-full bg-gradient-to-br bg-blue-600 overflow-hidden shadow-lg" style={{ height: '100px', width: '100px' }}>

                </div>

            </div>

            <div>

                <div className="fixed right-1/4 bottom-10 top-36 right-6 border-l-white-900 blur-2xl  flex items-end justify-end rounded-full bg-gradient-to-br bg-yellow-300 overflow-hidden shadow-lg" style={{ height: '200px', width: '200px' }}>

                </div>

            </div>

        </div>

    );
}
