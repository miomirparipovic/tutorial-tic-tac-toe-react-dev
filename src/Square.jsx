export default function Square({ value, onSquareClick, winColor = "" }) {
  return (
    <button className={`square ${winColor}`} onClick={onSquareClick}>
      {value}
    </button>
  );
}
