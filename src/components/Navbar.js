import React from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom"; // Use NavLink for active styling
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast'; // Import toast for logout message

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully"); // Feedback on logout
    navigate('/'); // Redirect to home after logout
  };

  // Helper for NavLink active class
  const getNavLinkClass = ({ isActive }) =>
    isActive ? "text-green-300 underline" : "hover:text-gray-300";

  return (
    <nav className="bg-[#0C5B11] text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Hacker's Delight</Link>
        <div className="space-x-4 flex items-center">
          <NavLink to="/" className={getNavLinkClass}>Home</NavLink>
          <NavLink to="/scoreboard" className={getNavLinkClass}>Scoreboard</NavLink>
          {/* REMOVED King of the Hill Link */}
          {user ? (
            <>
              {/* Display username */}
              <span className="text-sm text-gray-200 mr-1">Hi, <span className="font-semibold">{user.username}</span></span>
              <NavLink to="/profile" className={getNavLinkClass}>Profile</NavLink>
              <NavLink to="/submit-flag" className={getNavLinkClass}>Submit Flag</NavLink>
              <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded">Logout</button>
            </>
          ) : (
            <>
              <NavLink to="/login" className={getNavLinkClass}>Login</NavLink>
              <NavLink to="/register" className={getNavLinkClass}>Register</NavLink>
            </>
          )}
          <NavLink to="/ctf-info" className={getNavLinkClass}>CTF Info</NavLink>
        </div>
      </div>
    </nav>
  );
}