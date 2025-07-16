// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-[#0C5B11] text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Hacker's Delight</Link>
        <div className="space-x-4 flex items-center">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/scoreboard" className="hover:text-gray-300">Scoreboard</Link>
          <Link to="/king-of-the-hill" className="hover:text-gray-300">King of the Hill</Link>
          {user ? (
            <>
              <Link to="/profile" className="hover:text-gray-300">Profile</Link>
              <Link to="/submit-flag" className="hover:text-gray-300">Submit Flag</Link>
              <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-gray-300">Login</Link>
              <Link to="/register" className="hover:text-gray-300">Register</Link>
            </>
          )}
          <Link to="/ctf-info" className="hover:text-gray-300">CTF Info</Link>
        </div>
      </div>
    </nav>
  );
}
