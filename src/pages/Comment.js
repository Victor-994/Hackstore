import { useState } from "react";
import { postComment } from "../api";

export default function Comment() {
  const [comment, setComment] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await postComment(comment);
    setResponse(res);
  };

  return (
    <div className="max-w-md mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Leave a Comment</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <textarea className="border p-2 rounded text-black" placeholder="Your comment here" value={comment} onChange={(e) => setComment(e.target.value)} />
        <button type="submit" className="bg-green-600 text-white p-2 rounded hover:bg-green-700">Submit Comment</button>
      </form>
      {response && (
        <div className="mt-4 p-4 border rounded bg-gray-100 text-black" dangerouslySetInnerHTML={{ __html: response }} />
      )}
    </div>
  );
}
