// src/utils/calculateWinner.js

export function calculateWinner(tiles) {
  const winLines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  for (const line of winLines) {
    const [a, b, c] = line;
    if (tiles[a] && tiles[a] === tiles[b] && tiles[a] === tiles[c]) {
      return { winner: tiles[a], line: line }; // Return object with winner and winning line indices
    }
  }

  return null; // No winner yet
}

export function isBoardFull(tiles) {
  return tiles.every(tile => tile !== null);
}

  