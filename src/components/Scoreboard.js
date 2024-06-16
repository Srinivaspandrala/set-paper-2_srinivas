// src/components/Scoreboard.js

import React from 'react';

const Scoreboard = ({ score, time, userName }) => {
  return (
    <div className="scoreboard">
      <div>Score: {score}</div>
      <div>Time: {time}s</div>
      <div>Player: {userName}</div>
    </div>
  );
};

export default Scoreboard;
