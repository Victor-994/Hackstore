const API_URL = "https://hack-backend-lcsb.onrender.com";

// http://localhost:5000

// https://hack-backend-lcsb.onrender.com


// --- NEW (Suggestion 2 - JWT) ---
// Helper function to get the auth token from localStorage
const getAuthToken = () => {
  return localStorage.getItem("token");
};

// Helper function to create authenticated headers
const getAuthHeaders = () => ({
  "Content-Type": "application/json",
  "Authorization": `Bearer ${getAuthToken()}`,
});

// --- Public Endpoints ---

export const fetchProducts = async () => {
  const res = await fetch(`${API_URL}/products`);
  return res.json();
};

export const getProductById = async (id) => {
  const res = await fetch(`${API_URL}/api/products/${id}`);
  if (!res.ok) throw new Error("Product not found");
  return res.json();
};

export const postComment = async (comment) => {
  const res = await fetch(`${API_URL}/comment`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ comment }),
  });
  return res.text();
};

export const getScoreboard = async () => {
  // Scoreboard is public
  const res = await fetch(`${API_URL}/scoreboard`);
  return res.json();
};

export const getActivityFeed = async () => {
  // Activity feed is public
  const res = await fetch(`${API_URL}/api/activity-feed`);
  return res.json();
};

// REMOVED getKingOfTheHill

// --- Auth Endpoints (Return token) ---

export const loginUser = async (username, password) => {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  return res.json(); // Returns { message, token, username } or { error }
};

export const registerUser = async (username, password) => {
  const res = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  return res.json(); // Returns { message, token, username } or { error }
};


// --- Authenticated Endpoints (Require token) ---

export const submitFlag = async (flag) => {
  // Use authenticated headers
  const res = await fetch(`${API_URL}/submit-flag`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify({ flag }), // Username comes from token on backend
  });
  return res.json();
};

export const getUserProfile = async (username) => {
  // This endpoint remains public for the IDOR challenge
  const res = await fetch(`${API_URL}/api/profile/${username}`);
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error || "Failed to fetch profile");
  }
  return res.json();
};

// REMOVED captureKingOfTheHill

// --- NEW (Suggestion 2 - JWT Challenge Endpoint) ---
export const getAdminCheck = async () => {
  const res = await fetch(`${API_URL}/api/admin-check`, {
    method: "GET",
    headers: getAuthHeaders(), // Requires a valid (potentially forged) token
  });
  // Check if response is OK before parsing JSON
  if (!res.ok) {
     const errorData = await res.json().catch(() => ({ error: `Admin check failed with status: ${res.status}` }));
     throw new Error(errorData.error || "Failed to perform admin check");
  }
  return res.json(); // Returns { message, flag } or { error }
};