// src/pages/Summary.js

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Summary.css'; // Ensure you have appropriate styles
import { useTheme } from '../ThemeContext'; // Import useTheme hook

const Summary = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme } = useTheme(); // Get theme from useTheme hook
  const { score, total, quizName } = location.state || {};

  const handleRetakeQuiz = () => {
    navigate('/');
  };

  if (score === undefined || total === undefined) {
    navigate('/');
    return null;
  }

  const percentage = ((score / total) * 100).toFixed(2);

  return (
    <div className="summary-container">
      <h2 style={{
          color: theme === 'light' ? '#333' : '#333',
        }}>{quizName} Quiz Results</h2>
      <p style={{
          color: theme === 'light' ? '#333' : '#333',
        }}> 
        You scored {score} out of {total}
      </p>
      <p style={{
          color: theme === 'light' ? '#333' : '#333',
        }}>Your percentage: {percentage}%</p>
      <button className="retake-button" onClick={handleRetakeQuiz}>
        Take Another Quiz
      </button>
    </div>
  );
};

export default Summary;
