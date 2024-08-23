// src/components/ProgressBar.js

import React from 'react';
import './ProgressBar.css'; // Ensure you have appropriate styles

const ProgressBar = ({ current, total }) => {
  const progressPercentage = (current / total) * 100;

  return (
    <div className="progress-bar">
      <div className="progress-fill" style={{ width: `${progressPercentage}%` }}></div>
      <span className="progress-text">
        Question {current} of {total}
      </span>
    </div>
  );
};

export default ProgressBar;
