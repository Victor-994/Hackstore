import { useState } from "react";
import { submitFlag } from "../api";
// import { useAuth } from '../context/AuthContext'; // No longer needed directly
import toast from 'react-hot-toast';

export default function SubmitFlag() {
  const [flag, setFlag] = useState("");
  // const { user } = useAuth(); // We don't need the user object here anymore

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // The App.js <RequireAuth> component (if used) or route protection
    // already handles ensuring the user is logged in.
    // The token is automatically sent by the api function.

    if (!flag) {
        toast.error("Please enter a flag.");
        return;
    }

    const toastId = toast.loading('Submitting flag...');

    try {
        // --- THIS IS THE FIX ---
        // We only pass the 'flag' string.
        // The API automatically gets the username from the JWT token.
        const res = await submitFlag(flag);

        if (res.error) {
            toast.error(res.error, { id: toastId });
        } else {
            toast.success(res.message, { id: toastId, duration: 5000 });
            setFlag(""); // Clear input on success
        }
    } catch (error) {
        // Handle potential network errors or errors thrown from api.js
        console.error("Submit flag error:", error);
        toast.error(error.message || "An unexpected error occurred.", { id: toastId });
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
          required // Make input required
        />
        <button type="submit" className="bg-green-700 text-white p-2 rounded hover:bg-green-800">
          Submit Flag
        </button>
      </form>
    </div>
  );
}