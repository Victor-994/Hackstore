import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#0C5B11] text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">CTF Challenge</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/login" className="hover:text-gray-300">Login</Link>
          <Link to="/register" className="hover:text-gray-300">Register</Link>
          <Link to="/comment" className="hover:text-gray-300">Comment</Link>
          <Link to="/submit-flag" className="hover:text-gray-300">Submit Flag</Link>
          <Link to="/scoreboard" className="hover:text-gray-300">Scoreboard</Link>
          <Link to="/ctf-info" className="text-white hover:underline">CTF Info</Link>
        </div>
      </div>
    </nav>
  );
}
