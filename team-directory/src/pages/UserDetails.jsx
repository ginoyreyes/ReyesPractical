import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { users } from '../data/users';
import ErrorMessage from '../components/ErrorMessage';

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  // Req 11 & 12: useEffect to find user and update title
  useEffect(() => {
    const foundUser = users.find((u) => u.id === parseInt(id));
    setUser(foundUser);
    
    if (foundUser) {
      document.title = foundUser.name;
    } else {
      document.title = "User Not Found";
    }
  }, [id]);

  if (!user) {
    return (
      <div>
        <ErrorMessage message="User not found." />
        <div className="text-center mt-4">
          <Link to="/users" className="text-blue-500 hover:underline">Back to Users</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-2xl mt-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border dark:border-gray-700">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{user.name}</h2>
      <div className="space-y-3 text-gray-700 dark:text-gray-300">
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Company:</strong> {user.company}</p>
        <p><strong>Role:</strong> {user.role}</p>
      </div>
      <Link to="/users" className="inline-block mt-6 text-blue-500 hover:underline font-medium">
        &larr; Back to Users
      </Link>
    </div>
  );
};

export default UserDetails;