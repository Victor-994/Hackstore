import React from 'react';

export default function CTFInfo() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-900 rounded-lg shadow-lg my-10">
      <h1 className="text-3xl font-bold mb-4 text-green-400">🕵️‍♂️ Welcome to the Hacktales Beginner CTF Challenge!</h1>

      <div className="space-y-8 text-gray-300">
        <div>
          <h2 className="text-xl font-semibold mt-6 mb-2 text-green-300">🎯 Objective</h2>
          <p>Your mission is simple: <strong>find and capture as many flags as you can</strong> by exploring and exploiting the vulnerable eCommerce website we've built just for this challenge.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mt-6 mb-2 text-green-300">🏆 How to Win</h2>
          <p>The <strong>top 3 participants</strong> with the <strong>highest score</strong> will be declared the winners. If multiple players have the same score, the <strong>fastest completion time</strong> (based on your first flag submission) will break the tie.</p>
        </div>
        
        {/* --- NEW SECTION: HTTP Header Challenge --- */}
        <div>
            <h2 className="text-xl font-semibold mt-6 mb-2 text-green-300">🔎 The Inspector's Challenge</h2>
            <p>Not all secrets are in the page source. Some are hidden in the conversation between your browser and our server. </p>
            <div className="mt-2 p-3 bg-gray-800 border-l-4 border-green-500">
                <p className="font-semibold">Hint: Open your browser's Developer Tools, go to the "Network" tab, and visit the <strong className="text-yellow-400">Scoreboard</strong> page. Inspect the request and look at the <strong className="text-yellow-400">Response Headers</strong> for a hidden flag.</p>
            </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mt-8 mb-4 text-yellow-400 border-b border-yellow-500 pb-2">Special Competitive Features</h2>
          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded-md">
                <h3 className="font-bold text-lg text-red-500">🩸 First Blood Bonus</h3>
                <p>The very first player to submit a unique flag gets an extra <strong className="text-white">50 point bonus!</strong> Speed is key.</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-md">
                <h3 className="font-bold text-lg text-yellow-500">👑 King of the Hill</h3>
                <p>A special, ongoing challenge where only one person can hold the crown. To capture the hill, solve the riddle below and submit the answer on the "King of the Hill" page.</p>
                <div className="mt-2 p-3 bg-gray-700 border-l-4 border-yellow-500">
                    <p className="font-semibold">Current Challenge Riddle:</p>
                    <p className="italic mt-2">I have keys, but open no doors. I have a space, but no room. You can enter, but can't go outside. What am I?</p>
                </div>
            </div>
          </div>
        </div>

        <div>
            <h2 className="text-xl font-semibold mt-6 mb-2 text-green-300">🕵️‍♀️ Hidden Admin Challenge</h2>
            <p>There’s another hidden path in the shadows of the backend. To access it, you must make a GET request to the <strong>/secret-admin</strong> endpoint.</p>
            <div className="mt-2 p-3 bg-gray-800 border-l-4 border-green-500">
                <p className="font-semibold">To get the flag, you must include two custom headers in your request:</p>
                <ul className="list-disc list-inside ml-4 mt-2 font-mono">
                    <li><code className="text-yellow-400">x-username</code>: Set this to your registered username.</li>
                    <li><code className="text-yellow-400">x-admin-key</code>: The value for this key is the answer to the riddle below.</li>
                </ul>
                <p className="italic mt-4">I am the bedrock, though rarely seen. I whisper commands, yet hold no machine. I set the boundaries, then stand outside. A digital deity, where all must abide. What am I?</p>
                <p className="text-sm mt-4 text-gray-400">Hint: You can use tools like Postman or curl to make a request with custom headers.</p>
            </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mt-6 mb-2 text-red-400">🚫 Rules of Engagement</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>No brute-forcing or spamming endpoints. Play fair.</li>
            <li>No sharing of flags or spoilers publicly.</li>
            <li>Don’t attack the competition infrastructure — stick to the intentionally vulnerable website.</li>
          </ul>
        </div>
        
        <p className="text-center font-bold text-2xl mt-8 text-green-400">Good luck, and happy hacking! 🔍💻</p>
      </div>
    </div>
  );
}
