import React from "react";
import { Link } from "react-router-dom";
export default function MiniMax() {
  const linkStyle = {
    textDecoration: 'none',
    color: '#720e9e',
    backgroundColor: '#E6E6FA', 
    padding: '10px 20px',
    fontSize: '1.5rem',
    display: 'block',
    width: '100%',
    textAlign: 'center',
    transition: 'background-color 0.3s, color 0.3s', 
  };
  const hoverStyle = {
    backgroundColor: '#720e9e', // Background color on hover
    color: '#E6E6FA', // Text color on hover
  };
  return (
    <div className="container py-4 mt-5">
      <div className="text-center">
        <div className="space-y-2">
   <h1>Tic-Tac-Toe</h1>
          <h3 className="text-4xl font-bold tracking-tighter sm:text-6xl">
            Minimax Algorithm in Artificial Intelligence
          </h3>
          <p className="max-w-xl mx-auto text-gray-500 text-lg">
            Exploring the implementation and effectiveness of the Minimax
            algorithm in decision-making processes.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <div className="text-left">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">
            Introduction
          </h2>
          <p className="text-gray-500 mb-8">
            The Minimax algorithm is a fundamental concept in Artificial
            Intelligence (AI) that is widely used in decision-making processes,
            particularly in adversarial scenarios such as two-player games. The
            primary objective of the Minimax algorithm is to enable an AI agent
            to make optimal decisions by considering the potential moves of both
            the AI and its opponent, with the goal of maximizing the AI's
            advantage while minimizing the opponent's gains.
          </p>

          <h2 className="text-3xl font-bold tracking-tighter mb-4">
            Understanding the Minimax Algorithm
          </h2>
          <p className="text-gray-500 mb-8">
            The Minimax algorithm is based on the concept of{" "}
            <em>backtracking</em>, where the AI agent explores the possible
            moves and their consequences by simulating the game tree. The game
            tree represents all the possible moves and outcomes of a game,
            allowing the AI to analyze the consequences of each decision.
          </p>

          <h2 className="text-3xl font-bold tracking-tighter mb-4">
            Interactive Demonstration
          </h2>
          <p className="text-gray-500 mb-8">
            To provide users with an interactive demonstration of the Minimax
            algorithm in action, we have implemented a simple example of the
            algorithm applied to the game of Tic-Tac-Toe.
          </p>

          <h2 className="text-3xl font-bold tracking-tighter mb-4">
            Benefits and Limitations
          </h2>
          <p className="text-gray-500 mb-8">
            The Minimax algorithm offers several benefits in the context of AI
            decision-making, particularly in adversarial scenarios such as
            two-player games. By considering the potential moves of both the AI
            and its opponent, the algorithm enables the AI to make strategic
            decisions that maximize its chances of winning while anticipating
            and countering the opponent's moves.
          </p>

          <h2 className="text-3xl font-bold tracking-tighter mb-4">
            Conclusion
          </h2>
          <p className="text-gray-500 mb-8">
            The Minimax algorithm represents a foundational concept in AI and
            decision theory, providing a framework for AI agents to make
            strategic decisions in adversarial scenarios. While the algorithm's
            approach to evaluating the game tree and selecting optimal moves has
            proven effective in classic two-player games such as Chess and
            Checkers, its applications extend to various domains, including
            automated reasoning, resource allocation, and strategic planning.
          </p>
        </div>
        <div className="d-grid">
        <Link
        to="/home"
        className="btn btn-outline-dark btn-lg btn-block"
        style={linkStyle}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = hoverStyle.backgroundColor;
          e.target.style.color = hoverStyle.color;
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = linkStyle.backgroundColor;
          e.target.style.color = linkStyle.color;
        }}
      >
        Let's Play
      </Link>
        </div>
      </div>
    </div>
  );
}
