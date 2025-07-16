import React, { useEffect, useState } from 'react';
import { getKingOfTheHill, captureKingOfTheHill } from '../api';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

export default function KingOfTheHill() {
  const [kingData, setKingData] = useState(null);
  const [answer, setAnswer] = useState('');
  const { user } = useAuth();

  const fetchKingData = async () => {
    try {
      const data = await getKingOfTheHill();
      setKingData(data);
    } catch (error) {
      console.error("Failed to fetch King of the Hill data:", error);
    }
  };

  useEffect(() => {
    fetchKingData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      toast.error("You must be logged in to capture the hill.");
      return;
    }
    if (!answer) {
      toast.error("You must provide an answer.");
      return;
    }

    const toastId = toast.loading('Attempting to capture the hill...');
    try {
      const res = await captureKingOfTheHill(user.username, answer);
      if (res.error) {
        toast.error(res.error, { id: toastId });
      } else {
        toast.success(res.message, { id: toastId });
        setAnswer('');
        fetchKingData(); // Refresh data after successful capture
      }
    } catch (err) {
      toast.error("An unexpected error occurred.", { id: toastId });
    }
  };

  if (!kingData) {
    return <div className="text-center mt-10">Loading the Hill...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto text-center mt-10">
      <h1 className="text-5xl font-bold text-yellow-400 mb-4">👑 King of the Hill 👑</h1>
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
        <p className="text-lg text-gray-400">Current King:</p>
        <p className="text-4xl font-bold my-2 text-white">{kingData.currentKing}</p>
        <p className="text-sm text-gray-500">
          Crowned on: {new Date(kingData.capturedAt).toLocaleString()}
        </p>

        <div className="my-8 border-t border-b border-gray-700 py-6">
          <h2 className="text-xl font-semibold text-green-400">Capture the Hill!</h2>
          <p className="text-gray-300 mt-2">{kingData.challenge}</p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4 max-w-sm mx-auto">
            <input
              className="border p-2 rounded bg-gray-800 border-gray-700 focus:ring-2 focus:ring-green-500 outline-none"
              type="text"
              placeholder="Your answer to the challenge"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
            <button type="submit" className="bg-yellow-600 text-white p-2 rounded hover:bg-yellow-700 font-bold">
              Take the Crown
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
