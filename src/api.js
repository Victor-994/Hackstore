const API_URL = "https://hack-backend-lcsb.onrender.com/";

// http://localhost:5000

// https://hack-backend-lcsb.onrender.com/


export const fetchProducts = async () => {
  const res = await fetch(`${API_URL}/products`);
  return res.json();
};

export const loginUser = async (username, password) => {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  return res.json();
};

export const registerUser = async (username, password) => {
  const res = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
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

export const submitFlag = async (username, flag) => {
  const res = await fetch(`${API_URL}/submit-flag`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, flag }),
  });
  return res.json();
};

export const getScoreboard = async () => {
    const res = await fetch(`${API_URL}/scoreboard`);
    return res.json();
};


// --- NEW API FUNCTIONS for ENHANCED FEATURES ---

/**
 * Fetches a user's detailed profile, including score and captured flags.
 * Used for the Profile page.
 * @param {string} username - The user's username.
 */
export const getUserProfile = async (username) => {
    const res = await fetch(`${API_URL}/api/profile/${username}`);
    if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Failed to fetch profile');
    }
    return res.json();
};

/**
 * Fetches the latest events for the live activity feed.
 * Used on the Home page.
 */
export const getActivityFeed = async () => {
    const res = await fetch(`${API_URL}/api/activity-feed`);
    return res.json();
};

/**
 * Gets the current status of the King of the Hill challenge.
 * Used on the King of the Hill page.
 */
export const getKingOfTheHill = async () => {
    const res = await fetch(`${API_URL}/api/king-of-the-hill`);
    return res.json();
};

/**
 * Submits an attempt to capture the King of the Hill.
 * Used on the King of the Hill page.
 * @param {string} username - The username of the player attempting the capture.
 * @param {string} answer - The player's answer to the challenge.
 */
export const captureKingOfTheHill = async (username, answer) => {
    const res = await fetch(`${API_URL}/api/king-of-the-hill/capture`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, answer }),
    });
    return res.json();
};
