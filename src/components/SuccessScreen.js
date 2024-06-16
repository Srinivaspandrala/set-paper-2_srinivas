import React from 'react';

const SuccessScreen = ({ score, time, userName }) => {
  return (
    <div className="success-screen">
      <h1>Congratulations, {userName}!</h1>
      <p>Your final score is: {score}</p>
      <p>You took: {time} seconds</p>
      <button onClick={() => window.location.reload()}>Play Again</button>
    </div>
  );
};

export default SuccessScreen;
