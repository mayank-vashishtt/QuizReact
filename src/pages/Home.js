import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTheme } from '../ThemeContext';

const Home = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const quizzes = [
    { id: 1, name: 'General Knowledge', path: 'general-knowledge' },
    { id: 2, name: 'Science', path: 'science' },
    { id: 3, name: 'Mix-Quesiton', path: 'mix' },
    { id: 4, name: 'Math', path: 'math' },
    { id: 5, name: 'Geography', path: 'geography' },
    { id: 6, name: 'Sports', path: 'sports' },
    { id: 7, name: 'Movies', path: 'movies' },
    { id: 8, name: 'Music', path: 'music' },
    { id: 9, name: 'Technology', path: 'technology' },
    { id: 10, name: 'Literature', path: 'literature' },
    { id: 11, name: 'Art', path: 'art' },
    { id: 12, name: 'Politics', path: 'politics' },
    { id: 13, name: 'True/False Quiz', path: 'true-false' },
    { id: 14, name: 'Mixed Multiple Choice', path: 'mixed-multiple-choice' }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    draggable: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  const handleStartQuiz = (quizPath) => {
    navigate(`/quiz/${quizPath}`);
  };

  return (
    <div
      className="home-container"
      style={{
        background: theme === 'light' ? '#f0f4f8' : '#1c1e22',
        padding: '40px 20px',
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center',
      }}
    >
      <h1
        className="main-heading"
        style={{
          color: theme === 'light' ? '#333' : '#f0f2f5',
          fontFamily: 'Poppins, sans-serif',
          fontSize: '3rem',
          marginBottom: '2rem',
        }}
      >
        Quiz App
      </h1>
      <h2
        className="main-heading"
        style={{
          color: theme === 'light' ? '#333' : '#f0f2f5',
          fontFamily: 'Poppins, sans-serif',
          fontSize: '3rem',
          marginBottom: '2rem',
        }}
      >
        Every Quiz Unlocks Knowledge
      </h2>
      <Slider {...settings}>
        {quizzes.map((quiz) => (
          <div key={quiz.id} className="quiz-slide">
            <div
              className="quiz-item"
              style={{
                height: '400px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '30px',
                background: 'linear-gradient(135deg, #72edf2 10%, #5151e5 100%)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '15px',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                textAlign: 'center',
              }}
            >
              <h3
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1.75rem',
                  marginBottom: '20px',
                  letterSpacing: '0.5px',
                }}
              >
                {quiz.name}
              </h3>
              <button
                onClick={() => handleStartQuiz(quiz.path)}
                style={{
                  backgroundColor: '#ffffff',
                  color: '#333',
                  border: 'none',
                  padding: '15px 30px',
                  fontSize: '1rem',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease-in-out',
                  boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
                  fontFamily: 'Poppins, sans-serif',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.backgroundColor = '#333';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  e.currentTarget.style.color = '#333';
                }}
              >
                Start Quiz
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home;
