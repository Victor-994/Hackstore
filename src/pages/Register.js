import { useState } from "react";
import { registerUser } from "../api";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
        const res = await registerUser(username, password);
        if (res.error) {
            setMessage(res.error);
        } else {
            setMessage(res.message);
            if (res.flag) alert(`Registration Successful! Flag: ${res.flag}`);
            login({ username }); // Log the user in upon successful registration
            navigate("/");
        }
    } catch(error) {
        setMessage("An error occurred during registration.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-gray-900 rounded-lg shadow-lg mt-10">
      <h1 className="text-2xl font-bold mb-4 text-green-400">Register</h1>
      <form onSubmit={handleRegister} className="flex flex-col gap-4">
        <input className="border bg-gray-800 text-white p-2 rounded" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input className="border bg-gray-800 text-white p-2 rounded" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="bg-green-600 text-white p-2 rounded hover:bg-green-700">Register</button>
      </form>
      {message && <p className={`mt-4 ${message.includes('failed') || message.includes('taken') ? 'text-red-500' : 'text-green-500'}`}>{message}</p>}
    </div>
  );
}
