import { useState } from "react";
import { submitFlag } from "../api";
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

export default function SubmitFlag() {
  const [flag, setFlag] = useState("");
  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      toast.error("You must be logged in to submit a flag.");
      return;
    }
    
    const toastId = toast.loading('Submitting flag...');

    try {
        const res = await submitFlag(user.username, flag);
        if (res.error) {
            toast.error(res.error, { id: toastId });
        } else {
            toast.success(res.message, { id: toastId, duration: 5000 });
            setFlag(""); // Clear input on success
        }
    } catch (error) {
        toast.error("An unexpected error occurred.", { id: toastId });
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gray-900 text-white p-6 rounded-lg shadow-lg mt-10">
      <h1 className="text-2xl font-bold mb-4 text-green-400">Submit Flag</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="border p-2 rounded bg-gray-800 border-gray-700 focus:ring-2 focus:ring-green-500 outline-none"
          type="text"
          placeholder="Enter flag here: CTF{...}"
          value={flag}
          onChange={(e) => setFlag(e.target.value)}
        />
        <button type="submit" className="bg-green-700 text-white p-2 rounded hover:bg-green-800">
          Submit Flag
        </button>
      </form>
    </div>
  );
}
