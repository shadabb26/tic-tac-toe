import { calculateWinner } from './../utils/calculateWinner';

const getStrikeClassForWinnerLine = (currentTiles) => {
  const winLines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  const winner = calculateWinner(currentTiles);
  if (winner) {
    const winningLine = winLines.find((line) => {
      const [a, b, c] = line;
      return currentTiles[a] === winner && currentTiles[b] === winner && currentTiles[c] === winner;
    });

    if (winningLine) {
      return `strike-${currentTiles[winningLine[0]]}`;
    }
  }

  return null;
};

export default getStrikeClassForWinnerLine;
