import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Profile from "./pages/Profile";
import CreateAccount from "./pages/CreateAccount";
import Dashboard from "./pages/Dashboard";
import Quiz from "./pages/Quiz";
import "./App.css";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() === "" || password.trim() === "") {
      alert("Please enter both fields");
      return;
    }
    navigate("/profile");
  };

  return (
    <div className="main-login-container">
      <div className="login-card">
        <h1>Welcome to FutureForge AI</h1>
        <p className="subtitle">Skill Assessment Platform</p>

        <form onSubmit={handleLogin}>
          <label>Username</label>
          <input type="text" onChange={(e) => setUsername(e.target.value)} />

          <label>Password</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} />

          <button className="login-btn">Login</button>
        </form>

        <p className="footer">
          Don’t have an account?{" "}
          <span className="create-link" onClick={() => navigate("/create-account")}>
            Create Account
          </span>
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/quiz" element={<Quiz />} />
    </Routes>
  );
}
