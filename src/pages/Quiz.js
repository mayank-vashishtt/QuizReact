// src/pages/Quiz.js

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import quizzes from '../data/quizzes.json';
import QuestionCard from '../components/QuestionCard';
import ProgressBar from '../components/ProgressBar';
import './Quiz.css'; // Ensure you have appropriate styles
import { useTheme } from '../ThemeContext'; // Import useTheme hook

const Quiz = () => {
  const { path } = useParams();
  const navigate = useNavigate();
  const { theme } = useTheme(); // Get theme from useTheme hook
  const [quiz, setQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    const foundQuiz = quizzes.find((q) => q.path === path);
    if (foundQuiz) {
      setQuiz(foundQuiz);
    } else {
      // Redirect to home if quiz not found
      navigate('/');
    }
  }, [path, navigate]);

  if (!quiz) {
    return <div>Loading...</div>;
  }

  const currentQuestion = quiz.questions[currentQuestionIndex];

  const handleOptionClick = (option) => {
    if (!isAnswered) {
      setSelectedOptions((prev) => {
        if (currentQuestion.answer instanceof Array) {
          if (prev.includes(option)) {
            return prev.filter((opt) => opt !== option);
          } else {
            return [...prev, option];
          }
        } else {
          return [option];
        }
      });
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < quiz.questions.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setIsAnswered(false);
      setSelectedOptions([]);
    } else {
      navigate('/summary', { state: { score, total: quiz.questions.length, quizName: quiz.name } });
    }
  };

  const handleSubmitAnswer = () => {
    setIsAnswered(true);
    if (Array.isArray(currentQuestion.answer)) {
      const correctAnswers = currentQuestion.answer;
      const allCorrect = correctAnswers.every((answer) =>
        selectedOptions.includes(answer)
      );
      const noExtraSelections = selectedOptions.length === correctAnswers.length;

      if (allCorrect && noExtraSelections) {
        setScore((prevScore) => prevScore + 1);
      }
    } else {
      if (selectedOptions[0] === currentQuestion.answer) {
        setScore((prevScore) => prevScore + 1);
      }
    }
  };

  return (
    <div className="quiz-container">
      <h2 style={{ color: theme === 'light' ? '#333' : '#333' }}>
        {quiz.name} Quiz
      </h2>
      <ProgressBar current={currentQuestionIndex + 1} total={quiz.questions.length} />
      <QuestionCard
        question={currentQuestion.question}
        options={currentQuestion.options}
        answer={currentQuestion.answer}
        selectedOptions={selectedOptions}
        isAnswered={isAnswered}
        onOptionClick={handleOptionClick}
      />
      {isAnswered ? (
        <button className="next-button" onClick={handleNextQuestion}>
          {currentQuestionIndex + 1 === quiz.questions.length ? 'View Results' : 'Next Question'}
        </button>
      ) : (
        <button
        className="submit-button"
        onClick={handleSubmitAnswer}
        style={{
          backgroundColor: '#007bff',
          color: '#fff',
          padding: '12px 24px',
          fontSize: '1.2rem',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          marginTop: '20px',
          boxShadow: '0px 4px 15px rgba(0, 123, 255, 0.2)',
          transition: 'background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#0056b3';
          e.target.style.transform = 'translateY(-3px)';
          e.target.style.boxShadow = '0px 8px 20px rgba(0, 123, 255, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#007bff';
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0px 4px 15px rgba(0, 123, 255, 0.2)';
        }}
        onMouseDown={(e) => {
          e.target.style.backgroundColor = '#003d82';
          e.target.style.transform = 'translateY(1px)';
          e.target.style.boxShadow = '0px 2px 10px rgba(0, 123, 255, 0.2)';
        }}
        onMouseUp={(e) => {
          e.target.style.backgroundColor = '#0056b3';
          e.target.style.transform = 'translateY(-3px)';
          e.target.style.boxShadow = '0px 8px 20px rgba(0, 123, 255, 0.3)';
        }}
      >
        Submit Answer
      </button>
      
      )}
    </div>
  );
};

export default Quiz;
