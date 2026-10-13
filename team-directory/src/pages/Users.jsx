import React, { useState, useEffect } from 'react';

import { users as initialUsers } from '../data/users'; 
import UserCard from '../components/UserCard';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

const Users = ({ favorites, toggleFavorite }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setUsers(initialUsers);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  
  useEffect(() => {
    document.title = `Users (${users.length})`;
  }, [users]);

 
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">All Users</h2>
      
      {/* Req 8: Search Input */}
      <input
        type="text"
        placeholder="Search by name..."
        className="w-full p-3 mb-6 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {loading ? (
        <Loader />
      ) : filteredUsers.length === 0 ? (
        <ErrorMessage message="No users found." />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map((user) => (
            <UserCard
              key={user.id}
              {...user}
              isFavorite={favorites.includes(user.id)}
              onToggleFavorite={() => toggleFavorite(user.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Users;