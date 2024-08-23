import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './ThemeContext'; // Add this line

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider> {/* Wrap the App component */}
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
