// src/components/QuestionCard.js

import React from 'react';
import './QuestionCard.css'; // Ensure you have appropriate styles

const QuestionCard = ({ question, options, answer, selectedOptions, isAnswered, onOptionClick }) => {
  return (
    <div className="question-card">
      <h3 className="question">{question}</h3>
      <div className="options">
        {options.map((option, index) => {
          let optionClass = 'option';
          
          // Determine the class for each option based on its state
          if (selectedOptions.includes(option)) {
            optionClass += ' selected';
          }

          if (isAnswered) {
            if (Array.isArray(answer) && answer.includes(option)) {
              optionClass += ' correct';
            } else if (option === answer) {
              optionClass += ' correct';
            } else if (selectedOptions.includes(option) && !answer.includes(option)) {
              optionClass += ' incorrect';
            }
          }

          return (
            <button
              key={index}
              className={optionClass}
              onClick={() => onOptionClick(option)}
              disabled={isAnswered}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionCard;
