import { useState } from "react";
import { submitFlag } from "../api";

export default function SubmitFlag() {
  const [flag, setFlag] = useState("");
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);
  const [firstSubmission, setFirstSubmission] = useState("");
  const username = localStorage.getItem("username") || "anonymous";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await submitFlag(username, flag);
    if (res.score !== undefined) {
      setScore(res.score);
      setMessage(res.message);
      if (res.firstSubmission) {
        setFirstSubmission(res.firstSubmission);
      }
    } else {
      setMessage(res.error || "Submission failed.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white text-black p-6 rounded-lg shadow-lg mt-10">
      <h1 className="text-2xl font-bold mb-4">Submit Flag</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="border p-2 rounded"
          type="text"
          placeholder="Enter flag here"
          value={flag}
          onChange={(e) => setFlag(e.target.value)}
        />
        <button type="submit" className="bg-green-700 text-white p-2 rounded hover:bg-green-800">
          Submit Flag
        </button>
      </form>
      {message && (
        <div className="mt-4 p-4 border rounded bg-gray-100">
          <p>{message}</p>
          <p>Your Total Score: {score}</p>
          {firstSubmission && <p>First Submission Time: {firstSubmission}</p>}
        </div>
      )}
    </div>
  );
}
