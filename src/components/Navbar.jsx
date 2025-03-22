// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home, LayoutDashboard, Info, Mail, UserCircle, LogIn, LogOut, Sun, Moon
} from 'lucide-react';

const user = {
  name: 'Muhammad Yameen', // Replace with dynamic user data later
  profileImage: '',   // Leave empty to simulate fallback
};

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const navLinkClasses = (path) =>
    `flex items-center gap-1 px-3 py-2 rounded-md hover:bg-orange-200 hover:text-orange-900 transition ${
      location.pathname === path ? 'bg-orange-500 text-white font-semibold' : ''
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-gray-100 dark:bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <LayoutDashboard className="w-6 h-6 text-orange-500" />
          <span className="text-xl font-bold text-orange-400">$martDashBoard</span>
        </div>

        {/* Nav Links */}
        <div className="flex items-center gap-6">
          <Link to="/" className={navLinkClasses('/')}>
            <Home size={18} /> Home
          </Link>
          <Link to="/about" className={navLinkClasses('/about')}>
            <Info size={18} /> About Us
          </Link>
          <Link to="/contact" className={navLinkClasses('/contact')}>
            <Mail size={18} /> Contact
          </Link>

          {/* Settings Toggle */}
          <button onClick={toggleTheme} className="hover:scale-105 transition">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button onClick={toggleDropdown} className="focus:outline-none">
              {user.profileImage ? (
                <img src={user.profileImage} alt="Profile" className="w-8 h-8 rounded-full object-cover" />
              ) : (
                <div className="w-8 h-8 bg-orange-400 text-white rounded-full flex items-center justify-center font-semibold">
                  {getInitials(user.name)}
                </div>
              )}
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden z-50">
                <button className="w-full px-4 py-2 hover:bg-orange-100 dark:hover:bg-gray-600 flex items-center gap-2">
                  <LogIn size={16} /> Login
                </button>
                <button className="w-full px-4 py-2 hover:bg-orange-100 dark:hover:bg-gray-600 flex items-center gap-2">
                  <LogOut size={16} /> Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
