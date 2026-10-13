import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <div className="text-center p-10 text-red-500 font-bold text-xl">
      {message || "Something went wrong."}
    </div>
  );
};

export default ErrorMessage;