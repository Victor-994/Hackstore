import React from 'react';

export default function CTFInfo() {
  return (
    
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">🕵️‍♂️ Welcome to the Hacktales Beginner CTF Challenge!</h1>

      <h2 className="text-xl font-semibold mt-6 mb-2">🎯 Objective</h2>
      <p>
        Your mission is simple: <strong>find and capture as many flags as you can</strong> by exploring and exploiting the vulnerable eCommerce website we've built just for this challenge.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">🏆 How to Win</h2>
      <p>
        The <strong>top 3 participants</strong> with the <strong>highest score</strong> will be declared the winners.
        If multiple players have the same score, the <strong>fastest completion time</strong> will break the tie.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">🛠️ How to Get Started</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Register / Sign In</strong> to track your flag submissions and progress.</li>
        <li><strong>Explore the Site</strong> like a regular user — but with a hacker’s mindset!</li>
        <li><strong>Find Vulnerabilities</strong>: look out for XSS, SQLi, auth flaws, and more.</li>
        <li><strong>Capture the Flag</strong>: Submit any flag you find to score points.</li>
        <li><strong>Check the Scoreboard</strong>: See how you stack up in real-time.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">📌 Tips for Success</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Take notes and stay organized.</li>
        <li>Use browser dev tools to investigate inputs and responses.</li>
        <li>Use the <strong>Hints</strong> page — it exists for a reason. 😉</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">🕵️‍♀️ Hidden Challenge Clue</h2>
      <p>
        There’s a hidden path somewhere in the shadows of the backend — a secret route for those curious enough to investigate beyond what’s visible.  
        <br />
        💡 <em>Clue:</em> “The real admin panel isn’t on the map — but the headers might show you the way.”
          <p>The value for 'x-username' is your user name and for the x-admin-key solve the riddle below:</p>
          <p><i>I am the bedrock, though rarely seen.
          I whisper commands, yet hold no machine.
          I set the boundaries, then stand outside.
          A digital deity, where all must abide.

          What am I?</i></p>
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">🚫 What Not to Do</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>No brute-forcing or spamming endpoints.</li>
        <li>No sharing of flags or spoilers publicly.</li>
        <li>Don’t attack the infrastructure — stick to what’s intentionally vulnerable.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">🧠 Final Words</h2>
      <p>
        By the end of the CTF, you’ll have real-world hacking experience under your belt.
        Learn, break stuff, and most importantly — have fun.
        <br />
        Good luck, and happy hacking! 🔍💻
      </p>

    </div>
  );
}
