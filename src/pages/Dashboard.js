import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const profile = JSON.parse(localStorage.getItem("profileData"));
  const navigate = useNavigate();

  return (
    <div className="dash-wrapper">

      {/* Header */}
      <header className="dash-header">
        <h2>FutureForge AI</h2>
        <button
          className="logout-btn"
          onClick={() => {
            localStorage.clear();
            navigate("/");
          }}
        >
          Logout
        </button>
      </header>

      {/* Welcome Section */}
      <div className="dash-content">
        <div className="welcome-section">
          <h1>Welcome, {profile?.name} 👋</h1>
          <p>{profile?.education}</p>
        </div>

        {/* Skills Section */}
        <div className="section-box">
          <h3>Your Skills / Interests</h3>
          <div className="skill-grid-big">
            {profile?.skills?.map((skill, index) => (
              <div className="skill-chip" key={index}>
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Quiz Section */}
        <div className="section-box">
          <h3>Start Skill Assessment</h3>
          <p>Select a skill to begin quiz</p>

          <div className="start-grid">
            {profile?.skills?.map((skill, index) => (
  <div
    className="start-card"
    key={index}
    onClick={() => {
      const key = skill.toLowerCase().includes("html") ? "html" : skill.toLowerCase();
      localStorage.setItem("currentSkill", key);
      window.location.href = "/quiz";
    }}
  >
    <h4>{skill}</h4>
  </div>
))}

          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
