import React from 'react';
import './Tile.css';

const Tile = ({ index, value, isRevealed, onClick }) => {
  return (
    <div className="tile" onClick={() => onClick(index)}>
      {isRevealed ? (
        <img src="data:image/png;base64,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" alt={value} />
      ) : (
        'X'
      )}
    </div>
  );
};

export default Tile;
