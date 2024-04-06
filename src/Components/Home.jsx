import { Link } from "react-router-dom";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    document.title = "TicTacToe";
  }, []);
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-md-6">
          <header className="text-center mb-4">
            <h1 className="display-3">TicTacToe</h1>
            <p className="lead">A classic game players.</p>
          </header>
          <div className="d-grid">
            <Link
              to={"/tic-tac-toe-ai"}
              className="btn btn-outline-dark btn-lg btn-block"
            >
              Single Player
            </Link>
            <div className="my-2"></div>
            <Link
              to={"/tic-tac-toe"}
              className="btn btn-outline-dark btn-lg btn-block"
            >
              Multi Player
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
}
