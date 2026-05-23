import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaEnvelope, FaChevronUp } from 'react-icons/fa';
import IconRingLogo from './IconRing';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToNavbar = (e) => {
    e.preventDefault();
    const navbarElement = document.getElementById('navbar');
    
    if (navbarElement) {
      navbarElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative overflow-hidden w-full bg-gray-50 font-sans text-gray-800 border-t border-gray-200 py-12 px-4 m-0 transition-colors duration-300">
      
      {/* Safe Scroll Arrow Button */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
        <button
          onClick={handleScrollToNavbar}
          aria-label="Scroll back to Navbar"
          className="p-3 mt-6 bg-gray-900 text-white rounded-full transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg flex items-center justify-center border border-gray-200 hover:bg-gray-800 group cursor-pointer"
        >
          <FaChevronUp className="text-sm transition-transform duration-300 group-hover:-translate-y-0.5" />
        </button>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col items-center justify-between gap-6 md:flex-row mt-4">
        
        {/* Left Side: Brand Logo + Name Layout */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center text-xl font-black uppercase tracking-[0.25em]">
            
           <IconRingLogo/>

            {/* Brand Word Mark */}
            <span className="text-blue-600">Anika</span>
            <span className="text-gray-900 ml-2">Datta Bithi</span>
            
          </div>
          <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mt-1">
            Frontend Web Developer
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-4">
          <a 
            href="https://www.linkedin.com/in/anika-datta-bithi-63a18a284/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-3 bg-gray-900 text-white rounded-lg transition-transform hover:scale-110 active:scale-95 shadow-sm flex items-center justify-center transform -skew-x-6 hover:bg-gray-800"
          >
            <FaLinkedinIn className="transform skew-x-6 text-sm" />
          </a>

          <a 
            href="mailto:anikadatta2000@gmail.com"
            aria-label="Email Address"
            className="p-3 bg-gray-900 text-white rounded-lg transition-transform hover:scale-110 active:scale-95 shadow-sm flex items-center justify-center transform -skew-x-6 hover:bg-gray-800"
          >
            <FaEnvelope className="transform skew-x-6 text-sm" />
          </a>
        </div>

        {/* Right Side: Copyright line */}
        <div className="text-center md:text-right">
          <p className="text-sm font-bold tracking-wide text-gray-900 uppercase">
           - by Anika Datta Bithi
          </p>
          <p className="text-[10px] tracking-widest text-gray-400 font-semibold uppercase mt-0.5">
             {}
          </p>
        </div>

      </div>
    </footer>
  );
}