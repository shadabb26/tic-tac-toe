import { Link } from "react-router-dom";
import { useEffect } from "react";
export default function Home() {
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
              Single Player
            </Link>
            <div className="my-2"></div>
            <Link
              to={"/tic-tac-toe"}
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
              Multi Player
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
}
