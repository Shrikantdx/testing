import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DashProfile from '../components/DashProfile';

export default function Dashboard() {
    const location = useLocation();
    const [tab, setTab] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(true); // State to track menu open/close

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const tabFromUrl = urlParams.get('tab');
        if (tabFromUrl) {
            setTab(tabFromUrl);
        }
    }, [location.search]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const logout = () => {
        // Perform logout logic here
        console.log('Logging out');
    };

    return (
        <div className='m-5 min-h-screen flex  '>
            {/* Dashboard menu */}
            <div className={`md:w-56 bg-purple-600 rounded-3xl text-white ${isMenuOpen ? '' : 'hidden'}`}>
                <div className='p-4 flex items-center hover:bg-pink-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                    </svg>
                    Dashboard
                </div>
                <ul>
                    <li className='p-4 hover:bg-gray-700 cursor-pointer' onClick={() => setTab('profile')}>Profile</li>
                    <li className='p-4 hover:bg-gray-700 cursor-pointer' onClick={() => setTab('posts')}>Posts</li>
                    <li className='p-4 hover:bg-gray-700 cursor-pointer' onClick={() => setTab('users')}>Users</li>
                    <li className='p-4 hover:bg-gray-700 cursor-pointer' onClick={() => setTab('comments')}>Comments</li>
                    <li className='p-4 hover:bg-gray-700 cursor-pointer' onClick={() => setTab('dash')}>Dashboard Comp</li>
                    <li className='bottom-0 p-4 hover:bg-gray-700 cursor-pointer' onClick={logout}>Logout</li>
                </ul>
            </div>
            {/* Dashboard content */}
            <div className='flex-grow'>
                <button onClick={toggleMenu} className='md:hidden bg-gray-800 text-white p-2'>Toggle Menu</button>
                {/* profile... */}
                {tab === 'profile' && <DashProfile />}
                {/* Add other tab components */}
            </div>
        </div>
    );
}
