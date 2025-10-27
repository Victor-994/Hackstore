import React, { Suspense, lazy } from "react"; // Import Suspense and lazy
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from 'react-hot-toast';
import Navbar from "./components/Navbar";
import RequireAuth from "./components/RequireAuth"; // Import RequireAuth

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Comment = lazy(() => import("./pages/Comment"));
const SubmitFlag = lazy(() => import("./pages/SubmitFlag"));
const Scoreboard = lazy(() => import("./pages/Scoreboard"));
const CTFInfo = lazy(() => import("./pages/CTFInfo"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const Profile = lazy(() => import("./pages/Profile"));
// REMOVED: const KingOfTheHill = lazy(() => import("./pages/KingOfTheHill"));

function App() {
  return (
    <AuthProvider>
      <Router>
        <Toaster
          position="top-right"
          toastOptions={{
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
          <main className="container mx-auto px-4 py-8"> {/* Added padding */}
            {/* Suspense fallback for lazy loading */}
            <Suspense fallback={<div className="text-center py-12">Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/comment" element={<Comment />} /> {/* Public comment page */}
                <Route path="/scoreboard" element={<Scoreboard />} /> {/* Public scoreboard */}
                <Route path="/ctf-info" element={<CTFInfo />} />
                <Route path="/products/:id" element={<ProductPage />} />

                {/* --- Protected Routes --- */}
                <Route
                  path="/submit-flag"
                  element={
                    <RequireAuth>
                      <SubmitFlag />
                    </RequireAuth>
                  }
                />
                 <Route
                  path="/profile"
                  element={
                    <RequireAuth>
                      <Profile />
                    </RequireAuth>
                  }
                />
                {/* REMOVED King of the Hill Route */}

                {/* Optional: Add a 404 Not Found route */}
                <Route path="*" element={<div className="text-center py-12">Page Not Found</div>} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;