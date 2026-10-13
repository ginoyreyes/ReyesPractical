import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-center mt-20">
      <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">Page Not Found</p>
      <Link to="/" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;