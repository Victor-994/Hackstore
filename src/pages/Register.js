import { useState } from "react";
import { registerUser } from "../api";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast'; // Use toast

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage("");
    const toastId = toast.loading('Registering...'); // Loading indicator

    try {
        const res = await registerUser(username, password);
        if (res.error) {
            setMessage(res.error);
            toast.error(res.error, { id: toastId });
        } else {
            setMessage(res.message);
            toast.success(res.message || 'Registration Successful!', { id: toastId });
            // --- UPDATED (JWT) ---
            // Auto-login the user with the new token
            if (res.token) {
                login({ username: res.username, token: res.token });
                navigate("/"); // Redirect to home after successful registration and login
            } else {
                 // If no token, maybe just show message and stay here or navigate to login
                 navigate("/login");
            }
            // REMOVED alert for flag on registration
        }
    } catch(error) {
        setMessage("An error occurred during registration.");
        toast.error("An error occurred during registration.", { id: toastId });
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-gray-900 rounded-lg shadow-lg mt-10">
      <h1 className="text-2xl font-bold mb-4 text-green-400">Register</h1>
      <form onSubmit={handleRegister} className="flex flex-col gap-4">
        <input className="border bg-gray-800 text-white p-2 rounded" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input className="border bg-gray-800 text-white p-2 rounded" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className="bg-green-600 text-white p-2 rounded hover:bg-green-700">Register</button>
      </form>
      {/* Display messages using standard text, toast provides main feedback */}
      {message && <p className={`mt-4 ${message.includes('failed') || message.includes('taken') ? 'text-red-500' : 'text-green-500'}`}>{message}</p>}
    </div>
  );
}