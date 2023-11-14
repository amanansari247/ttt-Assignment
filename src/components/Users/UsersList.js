
import React from 'react';
import { Link } from 'react-router-dom';

const UsersList = ({ users }) => {
  return (
    <div className="container mx-auto my-8 mt-24 mb-24">
      <h1 className="text-4xl font-bold mb-4 text-center">All <span className='text-yellow-400'> Stories</span></h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {users.map(user => (
          <li key={user.id} className="rounded-lg overflow-hidden shadow-lg userlist">
            <Link to={`/${user.id}`} className="block relative h-64">
              <img
                src={user.profileImage}
                alt={`Profile of ${user.name}`}
                className="w-full h-full object-cover"
              />
            </Link>
            <div className="p-4 bg-white">
              <p className="text-lg font-semibold mb-2">{user.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
