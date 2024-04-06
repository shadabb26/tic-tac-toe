import { calculateWinner } from "./calculateWinner";
import { isBoardFull } from "./calculateWinner";

export function minimax(board, depth, isMaximizing) {
    const winner = calculateWinner(board);
  
    if (winner === 'X') {
      return 10 - depth;
    }
    if (winner === 'O') {
      return depth - 10;
    }
    if (isBoardFull(board)) {
      return 0;
    }
  
    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === null) {
          board[i] = 'X';
          bestScore = Math.max(bestScore, minimax(board, depth + 1, false));
          board[i] = null;
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === null) {
          board[i] = 'O';
          bestScore = Math.min(bestScore, minimax(board, depth + 1, true));
          board[i] = null;
        }
      }
      return bestScore;
    }
  }
  