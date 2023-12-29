import { WIN_COMBINATIONS } from "./constants";

export function calculateWinner(squares) {
  for (let i = 0; i < WIN_COMBINATIONS.length; i++) {
    const [a, b, c] = WIN_COMBINATIONS[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}
