// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Summary from './pages/Summary';
import { useTheme } from './ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Router>
      <div>
        <header style={{ padding: '10px', textAlign: 'right' }}>
          <button 
            onClick={toggleTheme}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: theme === 'light' ? '#333' : '#f0f2f5',
              fontSize: '1.5rem',
            }}
          >
            <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
          </button>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz/:path" element={<Quiz />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
