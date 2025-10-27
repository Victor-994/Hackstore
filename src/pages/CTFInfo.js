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
            {/* REMOVED King of the Hill Section */}
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
                <p className="italic mt-4">I am the bedrock, though rarely seen. I whisper commands, yet hold no machine. I set the boundaries, then stand outside. A digital deity, where all must abide. What am I? (Hint: The answer is 'superadmin')</p>
                <p className="text-sm mt-4 text-gray-400">Hint: You can use tools like Postman or curl to make a request with custom headers.</p>
            </div>
        </div>
        
        {/* --- UPDATED Vulnerability Hints --- */}
        <div className="bg-gray-800 p-4 rounded-md">
            <h3 className="font-bold text-lg text-green-400">Web Vulnerability Challenges</h3>
            <ul className="list-disc list-inside mt-2 space-y-2">
                <li><strong>NoSQL Injection:</strong> The product search at <code>/api/products/search</code> seems to take a complex query. Can you use it to find things that aren't published?</li>
                <li><strong>IDOR (Insecure Direct Object Reference):</strong> Our <code>admin-bot</code> automatically tests new flags. You can check its profile to see what it's been up to. Can you find its profile endpoint?</li>
                <li><strong>Broken Authentication (JWT):</strong> We've moved to a modern JWT system. Surely it's impenetrable. There's a <code>/api/admin-check</code> endpoint, but it's for admins only. What's the secret key?</li>
                <li><strong>Client-Side Recon:</strong> Not all secrets are in the backend. Have you checked all the client-side JavaScript files being served?</li>
                <li><strong>Cross-Site Scripting (XSS):</strong> There's a page where you can leave comments. Does it properly sanitize your input? Check the console too!</li>
                <li><strong>Insecure Deserialization:</strong> We use a cookie to store your user preferences at <code>/api/user-prefs</code>. It seems to be encoded... I wonder if it can be manipulated to run code on the server? The flag is at <code>/flag.txt</code> on the server (check server logs).</li>
            </ul>
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