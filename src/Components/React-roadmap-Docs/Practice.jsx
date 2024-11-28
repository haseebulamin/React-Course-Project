import React, { useState } from 'react';
import Button from './Button';

export default function Practice() {
  const [tech, setTech] = useState("");

  const flow = () => {
    const messages = ["3", "2", "1", "Register", "Now!", "For", "TegaThon"];
    let index = 0;

    const intervalId = setInterval(() => {
      setTech(messages[index]);
      index++;

      if (index === messages.length) {
        clearInterval(intervalId);
      }
    }, 500);
  };

  return (
    <div>
      <h1>{tech}</h1>
      <button onClick={flow}>Start?</button>
      <Button 
        onClick={flow} 
        style={{ backgroundColor: "blue", color: "white" }} 
        className="custom-class"
      >Click Me</Button>
    </div>
  );
}
