import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ favoriteCount, darkMode, toggleDarkMode }) => {
  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive 
        ? 'bg-blue-500 text-white' 
        : 'text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700'
    }`;

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md p-4 mb-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/users" className={navLinkClass}>Users</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-gray-700 dark:text-gray-300 font-bold">
            Favorites: {favoriteCount}
          </span>
          <button 
            onClick={toggleDarkMode} 
            className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md text-sm font-medium"
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;