import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function RequireAuth({ children }) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to. This allows us to send them back after login.
    // Use state to pass the intended destination.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children; // If authenticated, render the child component (e.g., SubmitFlag)
}