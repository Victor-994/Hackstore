import React, { createContext, useState, useContext, useEffect, useMemo } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Load user from localStorage on initial app load
    const storedUsername = localStorage.getItem("username");
    const storedToken = localStorage.getItem("token");
    if (storedUsername && storedToken) {
      setUser({ username: storedUsername, token: storedToken });
    }

    // Listen for storage changes (e.g., if user logs in/out in another tab)
    const onStorage = () => {
      const u = localStorage.getItem("username");
      const t = localStorage.getItem("token");
      setUser(u && t ? { username: u, token: t } : null);
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const login = ({ username, token }) => {
    localStorage.setItem("username", username);
    localStorage.setItem("token", token);
    setUser({ username, token });
  };

  const logout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    setUser(null);
  };

  const isAuthenticated = !!user?.token;
  
  // Expose the full user object (username + token)
  const value = useMemo(() => ({ user, isAuthenticated, login, logout }), [user, isAuthenticated]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);