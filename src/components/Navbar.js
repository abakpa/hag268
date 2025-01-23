import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import logo from '../images/hag268logo.jpg';

function Navbar() {
  const location = useLocation();
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 0); // Set fixed state when scrolled down
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="absolute w-full z-50">
      {/* Transparent Top Row */}
      <div className="bg-transparent text-white py-2 px-4">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          {/* Left Caption */}
          <p className="text-sm font-light">Welcome to HAG268, your trusted roofing solutions provider!</p>

          {/* Contact Info */}
          <div className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <FaPhoneAlt />
              <span className="text-sm">+123 456 789</span>
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
          <h1 className="h-20 w-20">
          <img
              src={logo}
              alt="About Us"
              className="rounded-lg shadow-lg w-full"
            />
          
            </h1>

          {/* Navigation Links */}
          <ul className="flex space-x-6">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Products', path: '/products' },
              { name: 'Contact', path: '/contact' },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`relative text-lg font-medium tracking-wide transition-colors duration-300 ${
                    location.pathname === link.path
                      ? 'text-blue-950'
                      : 'text-blue-950 hover:text-yellow-300'
                  }`}
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
