import React from 'react';
import { Link } from 'react-router-dom';
import Button from "./Button";

const UserCard = ({ id, name, email, company, isFavorite, onToggleFavorite }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{name}</h3>
        <p className="text-gray-600 dark:text-gray-400">{email}</p>
        <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">{company}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <Link to={`/users/${id}`} className="text-blue-500 hover:underline text-sm font-medium">
          View Details
        </Link>
        <Button 
          variant={isFavorite ? 'danger' : 'secondary'} 
          onClick={onToggleFavorite}
        >
          {isFavorite ? '★ Remove' : '☆ Favorite'}
        </Button>
      </div>
    </div>
  );
};

export default UserCard;