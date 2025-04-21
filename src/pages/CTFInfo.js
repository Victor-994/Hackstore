import React from 'react';

export default function CTFInfo() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-white">CTF Competition Info</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">🕹️ What is this?</h2>
        <p>
          This is a Capture The Flag (CTF) cybersecurity competition designed to test your ability to find and exploit vulnerabilities in a tech store web application. Each discovered vulnerability rewards you with a flag and points.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">🎯 How to Participate</h2>
        <ol className="list-decimal pl-6">
          <li>Register or Login on the app.</li>
          <li>Explore different sections of the site, including login, comment forms, etc.</li>
          <li>Exploit known vulnerabilities to discover flags CTF.</li>
          <li>The flags looks like this format "'CTF(example_flag_here)'".</li>
          <li>Submit each flag through the “Submit Flag” page.</li>
        </ol>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">🏆 Scoring & Ranking</h2>
        <ul className="list-disc pl-6">
          <li>Each valid flag is worth <strong>100 points</strong>.</li>
          <li>Your total score increases as you submit more valid flags.</li>
          <li>Ranking is based on total score. In case of ties, the player with the <strong>earliest first submission</strong> ranks higher.</li>
          <li>Top 3 players will be picked based on this scoring system.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">💡 Hint</h2>
        <p>
          There might be a hidden admin endpoint that reveals interesting data. Try inspecting headers or exploring less-obvious parts of the backend. Look for a secret key like <code>x-admin-key</code>... 👀
        </p>
        <p>Once you find that secret endpoint, find a header 'x-admin-key' and 'x-username' put the value for the headers to get the flag.</p>
        <p>The value for 'x-username' is your user name and for the x-admin-key solve the riddle below:</p>
        <p><i>I am the bedrock, though rarely seen.
          I whisper commands, yet hold no machine.
          I set the boundaries, then stand outside.
          A digital deity, where all must abide.

          What am I?</i></p>
          <br></br>
          <p>Also you can use postman to check endpoints to</p>
      </section>
    </div>
  );
}
