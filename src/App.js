import React, { useState, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import GameBoard from './components/GameBoard';
import SuccessScreen from './components/SuccessScreen';
import './App.css';

const App = () => {
  const [userName, setUserName] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  const handleGameOver = (finalScore, finalTime) => {
    setScore(finalScore);
    setTime(finalTime);
    setGameOver(true);
    localStorage.removeItem('userName'); // Clear local storage on game over
  };

  return (
    <div className="App">
      {gameOver ? (
        <SuccessScreen score={score} time={time} userName={userName} />
      ) : userName ? (
        <GameBoard userName={userName} onGameOver={handleGameOver} />
      ) : (
        <WelcomeScreen setName={setUserName} />
      )}
    </div>
  );
};

export default App;
