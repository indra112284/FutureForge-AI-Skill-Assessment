import React, { useState } from "react";
import "../App.css";

function Profile() {
  const [name, setName] = useState("");
  const [education, setEducation] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);

  const skillsList = [
    "Python", "Java", "C Language", "C++",
    "JavaScript", "HTML & CSS", "Machine Learning",
    "Data Science", "React", "SQL",
    "Cloud Computing", "Cyber Security"
  ];

  const toggleSkill = (skill) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const handleSave = (e) => {
  e.preventDefault();

  const profileData = {
    name,
    education,
    skills: selectedSkills,
  };

  localStorage.setItem("profileData", JSON.stringify(profileData));

  alert("Profile Saved ✅");
  window.location.href = "/dashboard"; // ✅ goes to dashboard
};


  return (
    <div className="profile-container">
      <div className="profile-card">
        <h1>Create Your Profile</h1>
        <p className="profile-subtitle">Tell us about yourself</p>

        <form onSubmit={handleSave}>
          <label>Full Name</label>
          <input type="text" onChange={(e) => setName(e.target.value)} required />

          <label>Education</label>
          <input type="text" onChange={(e) => setEducation(e.target.value)} required />

          <label>Select Your Skills / Interests</label>

          <div className="skills-grid">
            {skillsList.map((skill) => (
              <div
                key={skill}
                className={`skill-box ${selectedSkills.includes(skill) ? "selected-skill" : ""}`}
                onClick={() => toggleSkill(skill)}
              >
                {skill}
              </div>
            ))}
          </div>

          <button className="login-btn save-profile-btn">Save Profile</button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
