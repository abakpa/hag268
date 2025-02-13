import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaClock, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../images/hag268logo.jpg';

function Navbar() {
  const location = useLocation();
  const [isFixed, setIsFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 0); // Set fixed state when scrolled down
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="absolute w-full z-50">
      {/* Transparent Top Row */}
      <div className="bg-transparent text-white py-2 px-4">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          {/* Left Caption */}
          <p className="text-sm font-light">Welcome to HAG268, your trusted roofing solutions provider!</p>

          {/* Contact Info */}
          <div className="hidden md:flex space-x-4">
            <div className="flex items-center space-x-2">
              <FaPhoneAlt />
              <span className="text-sm">+234 8169525150</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope />
              <span className="text-sm">info@hag268.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaClock />
              <span className="text-sm">Mon - Fri: 8 AM - 5 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Colored Second Row */}
      <nav
        className={`${
          isFixed
            ? 'fixed top-0 w-full bg-opacity-70 bg-amber-500 backdrop-blur-md'
            : 'relative bg-amber-500'
        } text-white py-4 shadow-md transition-all duration-300`}
      >
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <Link to='/'>
          <div className="h-16 w-16">
            <img src={logo} alt="HAG268 Logo" className="rounded-lg shadow-lg w-full" />
          </div>
          </Link>
          {/* Hamburger Menu for Small Screens */}
          <button
            className="md:hidden text-white text-2xl focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Navigation Links */}
          <ul
            className={`absolute md:relative top-full left-0 w-full md:w-auto bg-amber-500 md:bg-transparent flex-col md:flex-row md:flex md:space-x-6 px-4 py-4 md:p-0 transition-all duration-300 ${
              isMenuOpen ? 'flex' : 'hidden'
            }`}
          >
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Products', path: '/products' },
              { name: 'Contact', path: '/contact' },
            ].map((link) => (
              <li key={link.name} className="text-center md:text-left py-2 md:py-0">
                <Link
                  to={link.path}
                  className={`relative text-lg font-medium tracking-wide block transition-colors duration-300 ${
                    location.pathname === link.path
                      ? 'text-blue-950'
                      : 'text-blue-950 hover:text-yellow-300'
                  }`}
                  onClick={() => setIsMenuOpen(false)} // Close menu when a link is clicked
                >
                  {link.name}
                  {/* Active Indicator */}
                  {location.pathname === link.path && (
                    <span className="absolute bottom-[-6px] left-0 w-full h-[2px] bg-yellow-400"></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
