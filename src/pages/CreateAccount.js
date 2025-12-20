import React, { useState } from "react";
import "../App.css";

function CreateAccount() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    alert("Account Created ✅ Now Login");
  };

  return (
    <div className="main-login-container">
      <div className="login-card">
        <h1>Create Account</h1>
        <p className="subtitle">Join FutureForge AI</p>

        <form onSubmit={handleSignup}>
          <label>Choose Username</label>
          <input type="text" onChange={(e) => setUsername(e.target.value)} required />

          <label>Create Password</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} required />

          <button className="login-btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
