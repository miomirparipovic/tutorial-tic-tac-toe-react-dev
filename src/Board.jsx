import Square from "./Square";
import { O_PLAYER, X_PLAYER } from "./constants";
import { calculateWinner } from "./helpers";

export default function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? X_PLAYER : O_PLAYER;

    onPlay(nextSquares);
  }

  function colorWinSquare(square) {
    return winner[1].includes(square) ? "win-square" : "";
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner[0];
  } else if (!squares.some((el) => !el)) {
    status = "Draw!";
  } else {
    status = "Next player: " + (xIsNext ? X_PLAYER : O_PLAYER);
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square
          value={squares[0]}
          onSquareClick={() => handleClick(0)}
          winColor={winner && colorWinSquare(0)}
        />
        <Square
          value={squares[1]}
          onSquareClick={() => handleClick(1)}
          winColor={winner && colorWinSquare(1)}
        />
        <Square
          value={squares[2]}
          onSquareClick={() => handleClick(2)}
          winColor={winner && colorWinSquare(2)}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[3]}
          onSquareClick={() => handleClick(3)}
          winColor={winner && colorWinSquare(3)}
        />
        <Square
          value={squares[4]}
          onSquareClick={() => handleClick(4)}
          winColor={winner && colorWinSquare(4)}
        />
        <Square
          value={squares[5]}
          onSquareClick={() => handleClick(5)}
          winColor={winner && colorWinSquare(5)}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[6]}
          onSquareClick={() => handleClick(6)}
          winColor={winner && colorWinSquare(6)}
        />
        <Square
          value={squares[7]}
          onSquareClick={() => handleClick(7)}
          winColor={winner && colorWinSquare(7)}
        />
        <Square
          value={squares[8]}
          onSquareClick={() => handleClick(8)}
          winColor={winner && colorWinSquare(8)}
        />
      </div>
    </>
  );
}
