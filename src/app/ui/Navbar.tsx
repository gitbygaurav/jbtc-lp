'use client';

import { useState } from 'react';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="w-full bg-[#2D87F1] text-white">
            {/* Desktop Navbar */}
            <div className="max-w-[1440px] mx-auto flex items-center justify-between px-2 md:px-8 py-4 relative">
                <img loading="lazy" src="logo.png" alt="logo" className="h-4 md:h-8" />
                
                {/* Desktop Menu */}
                <div className="hidden md:flex items-center justify-center space-x-12 text-base font-bold">
                    <a href="#" className="text-white transition-colors">Home</a>
                    <a href="#" className="text-white transition-colors">About</a>
                    <a href="#" className="text-white transition-colors">Services</a>
                    <a href="#" className="text-white transition-colors">Contact</a>
                </div>

                {/* Desktop Connect Wallet Button */}
                <button className="hidden md:block bg-white text-black px-4 py-2 rounded-xl hover:bg-gray-800 transition-colors">
                    Connect Wallet
                </button>

                {/* Mobile Hamburger Button */}
                <button 
                    className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1.5"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Drawer Menu */}
            <div className={`md:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
                isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
                {/* Close Button */}
                <div className="flex justify-end p-4">
                    <button 
                        onClick={toggleMenu}
                        className="w-8 h-8 flex items-center justify-center"
                        aria-label="Close menu"
                    >
                        <span className="w-6 h-0.5 bg-black rotate-45 absolute"></span>
                        <span className="w-6 h-0.5 bg-black -rotate-45 absolute"></span>
                    </button>
                </div>

                {/* Mobile Menu Items */}
                <div className="flex flex-col px-8 py-4 space-y-6">
                    <a 
                        href="#" 
                        className="text-black hover:text-gray-700 text-lg py-2 border-b border-gray-100 transition-colors"
                        onClick={toggleMenu}
                    >
                        Home
                    </a>
                    <a 
                        href="#" 
                        className="text-black hover:text-gray-700 text-lg py-2 border-b border-gray-100 transition-colors"
                        onClick={toggleMenu}
                    >
                        About
                    </a>
                    <a 
                        href="#" 
                        className="text-black hover:text-gray-700 text-lg py-2 border-b border-gray-100 transition-colors"
                        onClick={toggleMenu}
                    >
                        Services
                    </a>
                    <a 
                        href="#" 
                        className="text-black hover:text-gray-700 text-lg py-2 border-b border-gray-100 transition-colors"
                        onClick={toggleMenu}
                    >
                        Contact
                    </a>
                    
                    {/* Mobile Connect Wallet Button */}
                    <button 
                        className="bg-black text-white px-6 py-3 rounded-xl mt-8 hover:bg-gray-800 transition-colors"
                        onClick={toggleMenu}
                    >
                        Connect Wallet
                    </button>
                </div>
            </div>

            {/* Overlay */}
            {isMenuOpen && (
                <div 
                    className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={toggleMenu}
                ></div>
            )}
        </nav>
    )
}

export default Navbar;