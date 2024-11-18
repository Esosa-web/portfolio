import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('/');
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update active item based on current route
  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/10 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <Link to="/" className="relative group">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-blue-500 to-green-400 
                           bg-clip-text text-transparent animate-gradient-x">
              {'<Esosa.dev />'}
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-500 
                           transition-all group-hover:w-full"></span>
          </Link>

          {/* Navigation Items */}
          <ul className="flex space-x-8">
            {[
              { path: '/', label: 'Home' },
              { path: '/about', label: 'About' },
              { path: '/projects', label: 'Projects' },
              { path: '/contact', label: 'Contact' }
            ].map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`relative py-2 px-1 text-lg transition-colors duration-300
                    ${activeItem === path ? 'text-purple-400' : 'text-white hover:text-purple-400'}`}
                >
                  {label}
                  {activeItem === path && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 top-full block h-0.5 w-full bg-purple-400"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;