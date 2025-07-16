import React, { useEffect, useState } from 'react';
import { getScoreboard } from '../api';
import { useAuth } from '../context/AuthContext';

const Scoreboard = () => {
  const [scores, setScores] = useState([]);
  const { user } = useAuth(); // Get current user

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const response = await getScoreboard();
        setScores(response);
      } catch (error) {
        console.error('Failed to fetch scoreboard:', error);
      }
    };
    fetchScores();
  }, []);

  const getRankIcon = (index) => {
    if (index === 0) return '🥇';
    if (index === 1) return '🥈';
    if (index === 2) return '🥉';
    return index + 1;
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-green-400">🏆 Scoreboard 🏆</h2>
      <div className="overflow-x-auto bg-gray-900 rounded-lg shadow-lg">
        <table className="min-w-full table-auto text-left">
          <thead className="border-b border-green-700">
            <tr>
              <th className="px-6 py-3 text-lg">Rank</th>
              <th className="px-6 py-3 text-lg">Username</th>
              <th className="px-6 py-3 text-lg">Score</th>
              <th className="px-6 py-3 text-lg">First Flag Time</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((entry, index) => (
              <tr 
                key={entry.username} 
                className={`border-b border-gray-800 hover:bg-gray-800 ${user && user.username === entry.username ? 'bg-green-900 ring-2 ring-yellow-400' : ''}`}
              >
                <td className="px-6 py-4 text-xl font-bold">{getRankIcon(index)}</td>
                <td className="px-6 py-4">{entry.username}</td>
                <td className="px-6 py-4">{entry.score}</td>
                <td className="px-6 py-4 text-sm text-gray-400">{new Date(entry.firstSubmission).toLocaleString()}</td>
              </tr>
            ))}
            {scores.length === 0 && (
              <tr>
                <td colSpan="4" className="px-6 py-4 text-center text-gray-500">No submissions yet. Be the first!</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Scoreboard;
