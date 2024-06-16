import React, { useState } from 'react';

const WelcomeScreen = ({ setName }) => {
  const [name, setNameInput] = useState('');

  const handleSubmit = () => {
    localStorage.setItem('userName', name);
    setName(name);
  };

  return (
    <div className="welcome-screen">
      <h1>Welcome to the Mahjong Game</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setNameInput(e.target.value)}
      />
      <button className='btn btn-primary' onClick={handleSubmit}>Start Game</button>
    </div>
  );
};

export default WelcomeScreen;
