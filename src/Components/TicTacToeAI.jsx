import React, { useState, useEffect } from 'react';
import Board from './Board'; // Assuming Board component is in the same directory
import GameOver from './GameOver'; // Assuming GameOver component is in the same directory
import GameState from './GameState'; // Assuming GameState enum is in the same directory
import Reset from './Reset'; // Assuming Reset component is in the same directory
import { calculateWinner, isBoardFull } from '../utils/calculateWinner'; // Adjust path based on directory structure
import { minimax } from '../utils/minimax'; // Adjust path based on directory structure

const PLAYER_X = 'X';
const PLAYER_O = 'O';

function TicTacToeAI() {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
  const [strikeClass, setStrikeClass] = useState(null);
  const [gameState, setGameState] = useState(GameState.inProgress);

  useEffect(()=>{
    document.title = 'Single player'
  },[])
  const handleTileClick = (index) => {
    if (gameState !== GameState.inProgress || tiles[index] !== null) {
      return;
    }

    const newTiles = [...tiles];
    newTiles[index] = playerTurn;
    setTiles(newTiles);

    const winner = calculateWinner(newTiles);
    if (winner) {
      setStrikeClass(getStrikeClassForWinnerLine(newTiles));
      setGameState(playerTurn === PLAYER_X ? GameState.playerXWins : GameState.playerOWins);
    } else if (isBoardFull(newTiles)) {
      setGameState(GameState.draw);
    } else {
      setPlayerTurn(playerTurn === PLAYER_X ? PLAYER_O : PLAYER_X);
    }
  };

  const handleReset = () => {
    setTiles(Array(9).fill(null));
    setPlayerTurn(PLAYER_X);
    setStrikeClass(null);
    setGameState(GameState.inProgress);
  };

  const getStrikeClassForWinnerLine = (currentTiles) => {
    const { winner, line } = calculateWinner(currentTiles);
  
    if (winner && line) {
      switch (true) {
        case line.every((index) => [0, 1, 2].includes(index)):
          return 'strike-row-1';
        case line.every((index) => [3, 4, 5].includes(index)):
          return 'strike-row-2';
        case line.every((index) => [6, 7, 8].includes(index)):
          return 'strike-row-3';
        case line.every((index) => [0, 3, 6].includes(index)):
          return 'strike-column-1';
        case line.every((index) => [1, 4, 7].includes(index)):
          return 'strike-column-2';;
        case line.every((index) => [2, 5, 8].includes(index)):
          return 'strike-column-3';;
        case line.every((index) => [0, 4, 8].includes(index)):
          return 'strike-diagonal-1';
        case line.every((index) => [2, 4, 6].includes(index)):
          return 'strike-diagonal-2';
        default:
          return null;
      }
    }
  
    return null;
  };
  const aiMove = () => {
    if (playerTurn === PLAYER_O && gameState === GameState.inProgress) {
      const bestMove = getBestMove(tiles);
      const newTiles = [...tiles];
      newTiles[bestMove] = PLAYER_O;
      setTiles(newTiles);

      const winner = calculateWinner(newTiles);
      if (winner) {
        setStrikeClass(getStrikeClassForWinnerLine(newTiles));
        setGameState(GameState.playerOWins);
      } else if (isBoardFull(newTiles)) {
        setGameState(GameState.draw);
      } else {
        setPlayerTurn(PLAYER_X);
      }
    }
  };

  const getBestMove = (currentTiles) => {
    let bestScore = -Infinity;
    let bestMove = null;

    for (let i = 0; i < currentTiles.length; i++) {
      if (currentTiles[i] === null) {
        currentTiles[i] = PLAYER_O;
        const score = minimax(currentTiles, 0, false);
        currentTiles[i] = null;

        if (score > bestScore) {
          bestScore = score;
          bestMove = i;
        }
      }
    }

    return bestMove;
  };

  useEffect(() => {
    // Make AI move when it's the AI's turn
    aiMove();
  }, [playerTurn]); // Trigger AI move when player turn changes to PLAYER_O

  return (
    <div className="tic-tac-toe">
    <div >
      <h1>Tic Tac Toe</h1>
      <Board
        tiles={tiles}
        onTileClick={handleTileClick}
        playerTurn={playerTurn}
        strikeClass={strikeClass}
      />
      <GameOver gameState={gameState} />
      <Reset gameState={gameState} onReset={handleReset} />
    </div>
    </div>
  );
}

export default TicTacToeAI;
