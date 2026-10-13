import React from 'react';

const Button = ({ label, onClick, variant = 'primary', children }) => {
  const baseStyle = "px-4 py-2 rounded font-semibold transition-colors focus:outline-none";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    danger: "bg-red-600 text-white hover:bg-red-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]}`} onClick={onClick}>
      {label || children}
    </button>
  );
};

export default Button;