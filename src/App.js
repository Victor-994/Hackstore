import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Comment from "./pages/Comment";
import SubmitFlag from "./pages/SubmitFlag";
import Scoreboard from "./pages/Scoreboard";
import CTFInfo from "./pages/CTFInfo";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/comment" element={<Comment />} />
        <Route path="/submit-flag" element={<SubmitFlag />} />
        <Route path="/scoreboard" element={<Scoreboard />} />
        <Route path="/ctf-info" element={<CTFInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
