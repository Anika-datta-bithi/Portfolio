import React from 'react';
import { FaLinkedinIn, FaEnvelope, FaChevronUp } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToNavbar = (e) => {
    e.preventDefault(); // Stops Chrome from just adding #navbar to the URL box
    
    // Looks for the element with id="navbar"
    const navbarElement = document.getElementById('navbar');
    
    if (navbarElement) {
      // Direct command telling Chrome to scroll smoothly right to the element
      navbarElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // Backup safety plan: if it can't find the ID, scroll to the absolute top of the screen
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative w-full bg-gray-50 font-sans text-gray-800 border-t border-gray-200 py-12 px-4 m-0 transition-colors duration-300">
      
      {/* Safe Scroll Arrow Button */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
        <button
          onClick={handleScrollToNavbar}
          aria-label="Scroll back to Navbar"
          className="p-3 bg-gray-900 text-white rounded-full transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg flex items-center justify-center border border-gray-200 hover:bg-gray-800 group cursor-pointer"
        >
          <FaChevronUp className="text-sm transition-transform duration-300 group-hover:-translate-y-0.5" />
        </button>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col items-center justify-between gap-6 md:flex-row mt-4">
        
        {/* Left Side: Brand Name / Initials */}
        <div className="flex flex-col items-center md:items-start">
          <span className="text-xl font-black uppercase tracking-[0.25em] text-gray-900">
            Anika Datta Bithi
          </span>
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
            &copy; {currentYear} by Anika Datta Bithi
          </p>
          <p className="text-[10px] tracking-widest text-gray-400 font-semibold uppercase mt-0.5">
            All Rights Reserved
          </p>
        </div>

      </div>
    </footer>
  );
}