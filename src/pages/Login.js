import { useState } from "react";
import { loginUser } from "../api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await loginUser(username, password);
    if (res.token) {
      alert(res.message);
      localStorage.setItem("username", username);
      navigate("/");
    } else {
      setMessage(res.error || "Login failed");
    }
  };

  return (
    <div className="max-w-md mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input className="border text-black p-2 rounded" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        {/* <input className="border text-black p-2 rounded" type="text" placeholder="Email" value={email} onChange={(e) => setUsername(e.target.value)} /> */}
        <input className="border text-black p-2 rounded" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="bg-green-500 text-white p-2 rounded hover:bg-green-700">Login</button>
      </form>
      {message && <p className="mt-4 text-red-500">{message}</p>}
    </div>
  );
}
