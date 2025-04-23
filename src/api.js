const API_URL = "https://hack-backend-lcsb.onrender.com";

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

export const generateToken = async () => {
  const res = await fetch(`${API_URL}/generate-token`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  return res.json();
};

export const submitFlag = async (username, flag) => {
  const res = await fetch(`${API_URL}/submit-flag`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, flag }),
  });
  return res.json();
};

// export const getScoreboard = async 

// export async function getScoreboard() {
//   const res = await fetch(`${API_URL}/secret-admin`, {
//     method: "GET",
//     headers: { "x-admin-key": "supersecretadmin" }
//   });
//   return await res.json();
// }
