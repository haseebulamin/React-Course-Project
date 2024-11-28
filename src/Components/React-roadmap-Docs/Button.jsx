import React from "react";

const Button = ({ 
  children,  // The content inside the button
  onClick,   // Callback for the button click
  style,     // Custom styles for the button
  disabled,  // Disable button functionality
  className  // Custom class names for styling
}) => {
  return (
    <button 
      onClick={onClick} 
      style={style} 
      disabled={disabled} 
      className={`btn ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
