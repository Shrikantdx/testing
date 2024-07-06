import React from 'react';
import { FaExternalLinkAlt, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="bg-purple-600 text-white py-4 px-6 flex justify-between items-center">
            <div>© 2024 Bhangle software opc ltd</div>
            <div className="flex items-center">
                <span className="mr-4">Disclaimer Privacy</span>
                <a href="https://bhangalesoftwares.co.in/#about" className="mr-4"><FaExternalLinkAlt /></a>
                <a href="https://www.instagram.com/ybites_official/"><FaInstagram /></a>
            </div>
        </div>
    );
}

export default Footer;
