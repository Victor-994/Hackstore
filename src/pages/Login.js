import { useState } from "react";
import { loginUser } from "../api";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await loginUser(username, password);
      if (res.token) {
        alert(`Login Successful! Flag: ${res.flag}`); // Using alert for CTF flag
        login({ username }); // Update auth context
        navigate("/");
      } else {
        setMessage(res.error || "Login failed");
      }
    } catch (error) {
      setMessage("An error occurred during login.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-gray-900 rounded-lg shadow-lg mt-10">
      <h1 className="text-2xl font-bold mb-4 text-green-400">Login</h1>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input className="border bg-gray-800 text-white p-2 rounded" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input className="border bg-gray-800 text-white p-2 rounded" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="bg-green-600 text-white p-2 rounded hover:bg-green-700">Login</button>
      </form>
      {message && <p className="mt-4 text-red-500">{message}</p>}
    </div>
  );
}