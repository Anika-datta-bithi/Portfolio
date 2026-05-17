import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
// Pulling Link explicitly from the core react-router package
import { Link } from 'react-router'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Clean route paths mapped to match your page setup configuration parameters
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Education', path: '/education' }, 
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-screen z-[100] bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="w-full px-6 lg:px-12">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="z-[110]"
          >
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)}
              className="text-2xl font-black tracking-tighter bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent cursor-pointer no-underline"
            >
              PORTFOLIO
            </Link>
          </motion.div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={link.path}
                  className="text-gray-800 hover:text-blue-600 font-semibold text-sm uppercase tracking-widest transition-colors no-underline cursor-pointer"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center z-[110]">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className="text-gray-900 focus:outline-none cursor-pointer"
            >
              {isOpen ? <HiX size={32} /> : <HiMenuAlt3 size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Full-Screen Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 w-screen h-screen bg-white flex flex-col items-center justify-center z-[105]"
          >
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-bold text-gray-900 hover:text-blue-600 transition-colors no-underline cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;