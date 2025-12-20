import React, { useState, useEffect } from "react";
import quizData from "../data/quizData";
import "../App.css";

function Quiz() {
  const currentSkill = localStorage.getItem("currentSkill")?.trim().toLowerCase();

  // Load previous level else start from easy
  const savedProgress = JSON.parse(localStorage.getItem("skillProgress")) || {};
  const [level, setLevel] = useState(savedProgress[currentSkill] || "easy");

  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  // Random 15 questions
  const getRandom = (arr) => [...arr].sort(() => Math.random() - 0.5).slice(0, 15);

  useEffect(() => {
    const full = quizData[currentSkill]?.[level] || [];
    setQuestions(getRandom(full));
  }, [currentSkill, level]);

  if (questions.length === 0) {
    return (
      <h2 style={{ color: "white", textAlign: "center", marginTop: "50px" }}>
        ❌ Questions not found for {currentSkill?.toUpperCase()} - {level}
      </h2>
    );
  }

  const current = questions[index];

  const checkAnswer = (selected) => {
    if (selected === current.answer) setScore(score + 1);

    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      const finalScore = (selected === current.answer ? score + 1 : score);
      const percent = (finalScore / questions.length) * 100;

      let newLevel = level;
      if (percent >= 70) newLevel = "hard";
      else if (percent >= 40) newLevel = "medium";
      else newLevel = "easy";

      const updated = { ...savedProgress, [currentSkill]: newLevel };
      localStorage.setItem("skillProgress", JSON.stringify(updated));

      alert(
        `✅ Quiz Completed!
Skill: ${currentSkill.toUpperCase()}
Level Now: ${newLevel.toUpperCase()}
Score: ${finalScore}/${questions.length}`
      );

      window.location.href = "/dashboard";
    }
  };

  return (
    <div className="quiz-container">
      <h2>{currentSkill.toUpperCase()} Quiz ({level.toUpperCase()})</h2>
      <h3>{index + 1}. {current.question}</h3>

      <div className="quiz-options-box">
        {current.options.map((op, i) => (
          <button key={i} className="quiz-option" onClick={() => checkAnswer(op)}>
            {op}
          </button>
        ))}
      </div>

      <p>Score: {score}</p>
      <p>{index + 1}/{questions.length}</p>
    </div>
  );
}

export default Quiz;
