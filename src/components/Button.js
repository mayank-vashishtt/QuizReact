import React from 'react';

const Button = ({ onClick, children, className }) => (
  <button onClick={onClick} className={`button ${className}`}>
    {children}
  </button>
);

export default Button;
