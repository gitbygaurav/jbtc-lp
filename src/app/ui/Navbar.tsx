"use client";

import { useState } from "react";

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
          <a href="#" className="text-white transition-colors">
            Home
          </a>
          <a href="#" className="text-white transition-colors">
            About
          </a>
          <a href="#" className="text-white transition-colors">
            Services
          </a>
          <a href="#" className="text-white transition-colors">
            Contact
          </a>
        </div>

        {/* Desktop Connect Wallet Button */}
        <button className="hidden md:block bg-white text-black px-4 py-2 rounded-xl hover:bg-gray-100 hover:text-black transition-colors">
          Connect Wallet
        </button>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center space-x-3">
          <button className="block md:hidden bg-white text-black px-4 py-2 rounded-xl hover:bg-gray-100 hover:text-black transition-colors">
            Connect Wallet
          </button>
          <button
            className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1.5"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-full bg-[#2D87F1] text-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between p-4">
          <img src="/navbar/logo.png" alt="logo" />
          <button
            onClick={toggleMenu}
            className="w-8 h-8 flex items-center justify-center"
            aria-label="Close menu"
          >
            <img
              loading="lazy"
              src="/navbar/x-circle-mobile.png"
              alt="cross-icon"
            />
          </button>
        </div>

        {/* Mobile Menu Items */}
        <div className="w-full flex flex-col items-center justify-between px-8 py-4 space-y-4">
          <a
            href="#"
            className="text-white hover:text-gray-700 text-[36px] text-center font-elza-bold-condensed py-2 transition-colors uppercase"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-700 text-[36px] text-center font-elza-bold-condensed py-2 transition-colors uppercase"
            onClick={toggleMenu}
          >
            DASHBOARD
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-700 text-[36px] text-center font-elza-bold-condensed py-2 transition-colors uppercase"
            onClick={toggleMenu}
          >
            BUY JBTC
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-700 text-[36px] text-center font-elza-bold-condensed py-2 transition-colors uppercase"
            onClick={toggleMenu}
          >
            WHITEPAPER
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-700 text-[36px] text-center font-elza-bold-condensed py-2 transition-colors uppercase"
            onClick={toggleMenu}
          >
            Contact
          </a>

          {/* Mobile Connect Wallet Button */}
          <button
            className="w-full flex gap-2 items-center justify-center bg-white text-[#1C1C1C] font-satoshi-medium px-6 py-2 rounded-xl mt-8 hover:bg-gray-100 hover:text-[#1C1C1C] transition-colors"
            onClick={toggleMenu}
          >
            <img loading="lazy" src="/navbar/Wallet.png" alt="wallet-icon" />
            <span>Connect Wallet</span>
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
  );
};

export default Navbar;
