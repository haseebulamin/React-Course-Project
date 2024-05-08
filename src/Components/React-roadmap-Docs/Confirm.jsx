import React, { useState } from 'react';

export default function Confirm() {
  const [confirmation, setConfirmation] = useState(false);

  const handleClick = () => {
    const result = window.confirm("Press a button!");
    setConfirmation(result);
  }

  return (
    <div>
      <button onClick={handleClick}>Click</button>
      {confirmation && <p>You pressed the button!</p>}
    </div>
  );
}
