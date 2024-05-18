const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
  //transform turns into a gameBoard
  //derived state
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);

  //   const handleSelectSquare = (rowIndex, colIndex) => {
  //     setGameBoard((prevBoard) => {
  //       //replace one filed with x or o

  //       //NOTE: this is not recommended
  //       //   prevBoard[rowIndex][colIndex] = playerSymbol;
  //       //   return prevBoard;

  //       const updatedBoard = [...prevBoard.map((innerArray) => [...innerArray])];
  //       updatedBoard[rowIndex][colIndex] = activePlayer;
  //       return updatedBoard;
  //     });

  //     onSelectSquare();
  //   };
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
