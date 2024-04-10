import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TicTacToeAI from "./Components/TicTacToeAI";
import TicTacToe from "./Components/TicTacToe";
import Home from "./Components/Home";
import MiniMaxPage from "./Components/MiniMaxPage";

const router = new createBrowserRouter([
  {
    path: "/",
    element: <MiniMaxPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/tic-tac-toe-ai",
    element: <TicTacToeAI />,
  },
  {
    path: "/tic-tac-toe",
    element: <TicTacToe />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
