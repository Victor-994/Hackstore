import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"; 
import { Toaster } from 'react-hot-toast'; // Import Toaster


import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Comment from "./pages/Comment";
import SubmitFlag from "./pages/SubmitFlag";
import Scoreboard from "./pages/Scoreboard";
import CTFInfo from "./pages/CTFInfo";
import React from "react";

import Profile from "./pages/Profile"; // New Profile page
import KingOfTheHill from "./pages/KingOfTheHill"; // New King of the Hill page

function App() {
  return (
    <AuthProvider>
      <Router>
        {/* Toaster component for notifications */}
        <Toaster
          position="top-right"
          toastOptions={{
            className: '',
            style: {
              margin: '10px',
              background: '#333',
              color: '#fff',
              border: '1px solid #555',
            },
          }}
        />
        <div className="bg-gray-800 text-white min-h-screen font-sans">
          <Navbar />
          <main className="container mx-auto px-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/comment" element={<Comment />} />
              <Route path="/submit-flag" element={<SubmitFlag />} />
              <Route path="/scoreboard" element={<Scoreboard />} />
              <Route path="/ctf-info" element={<CTFInfo />} />

              {/* --- NEW ROUTES --- */}
              <Route path="/profile" element={<Profile />} />
              <Route path="/king-of-the-hill" element={<KingOfTheHill />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
