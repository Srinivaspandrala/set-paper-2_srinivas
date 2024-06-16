import React, { useState, useEffect } from 'react';
import Tile from './Tile';
import './GameBoard.css';

const GameBoard = ({ userName, onGameOver }) => {
  const [tiles, setTiles] = useState(generateTiles());
  const [firstTile, setFirstTile] = useState(null);
  const [secondTile, setSecondTile] = useState(null);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setTime((prevTime) => prevTime + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleTileClick = (index) => {
    if (firstTile === null) {
      setFirstTile(index);
    } else if (secondTile === null) {
      setSecondTile(index);
      checkMatch(index);
    }
  };

  const checkMatch = (index) => {
    if (tiles[firstTile] === tiles[index]) {
      setScore(score + 1);
      if (score + 1 === tiles.length / 2) {
        onGameOver(score + 1, time);
      }
      setFirstTile(null);
      setSecondTile(null);
    } else {
      setTimeout(() => {
        setScore(score - 1);
        setFirstTile(null);
        setSecondTile(null);
      }, 1000);
    }
  };

  return (
    <div className="game-board-container">
      <h1>Mahjong Game</h1>
      <div className="game-header">
        <div className="score">Score: {score}</div>
        <div className="welcome">Welcome {userName} 👋👏</div>
        <div className="time">Time: {time}</div>
      </div>
      <div className="game-board">
        {tiles.map((tile, index) => (
          <Tile
            key={index}
            index={index}
            value={tile}
            isRevealed={index === firstTile || index === secondTile}
            onClick={handleTileClick}
          />
        ))}
      </div>
    </div>
  );
};

const generateTiles = () => {
  const tiles = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D']; // example set of tiles
  return tiles.sort(() => Math.random() - 0.5);
};

export default GameBoard;
