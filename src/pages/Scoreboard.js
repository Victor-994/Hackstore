// import { useEffect, useState } from "react";
// import { getScoreboard } from "../api";

// export default function Scoreboard() {
//   const [scores, setScores] = useState([]);

//   useEffect(() => {
//     const fetchScores = async () => {
//       const res = await getScoreboard();
//       if (res.userScores) {
//         const sorted = Object.entries(res.userScores).sort((a, b) => {
//           if (b[1].score === a[1].score) {
//             return new Date(a[1].firstSubmission) - new Date(b[1].firstSubmission);
//           }
//           return b[1].score - a[1].score;
//         });
//         setScores(sorted);
//       }
//     };
//     fetchScores();
//   }, []);

//   return (
//     <div className="max-w-2xl mx-auto p-8">
//       <h1 className="text-3xl font-bold mb-6">CTF Scoreboard</h1>
//       <ul className="space-y-4">
//         {scores.map(([username, { score, firstSubmission }], index) => (
//           <li key={username} className="p-4 border rounded bg-gray-50">
//             <p className="text-lg font-semibold">{index + 1}. {username}</p>
//             <p>Score: {score}</p>
//             <p>First Submission: {new Date(firstSubmission).toLocaleString()}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Scoreboard = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const response = await axios.get('http://localhost:5000/scoreboard');
        setScores(response.data);
      } catch (error) {
        console.error('Failed to fetch scoreboard:', error);
      }
    };
    fetchScores();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">🏆 Scoreboard</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto justify-center border border-gray-300">
          <thead className="bg-green-850">
            <tr>
              <th className="px-4 py-2 border">Rank</th>
              <th className="px-4 py-2 border">Username</th>
              <th className="px-4 py-2 border">Score</th>
              <th className="px-4 py-2 border">First Flag Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((entry, index) => (
              <tr key={entry.username}>
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">{entry.username}</td>
                <td className="px-4 py-2 border">{entry.score}</td>
                <td className="px-4 py-2 border">{new Date(entry.firstSubmission).toLocaleString()}</td>
              </tr>
            ))}
            {scores.length === 0 && (
              <tr>
                <td colSpan="4" className="px-4 py-2 text-center">No submissions yet</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Scoreboard;
