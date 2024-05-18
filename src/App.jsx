import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GamaBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./components/winning-combinations";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

//helper function
const deriveActivePlayer = (gameTurns) => {
  let curPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") curPlayer = "O";
  return curPlayer;
};

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [hasWinner, setHasWinner] = useState(false) ; redundant state

  //derive currentPlayer out of the turns
  const activePlayer = deriveActivePlayer(gameTurns);

  //transform turns into a gameBoard
  //derived state
  let gameBoard = initialGameBoard;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  let winner = null;

  for (const combination of WINNING_COMBINATIONS) {
    //extract possible winning combination
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      //there is a winner

      winner = firstSquareSymbol;
    } else {
    }
  }

  const handleSelectSquare = (rowIndex, colIndex) => {
    //NOTE: avoid intersecting states, + update objects immutably
    setGameTurns((prevTurns) => {
      let curActivePlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        // { square: { row: rowIndex, col: colIndex }, player: activePlayer }, avoid this, activePlayer s a state, avoid intersecting states
        {
          square: { row: rowIndex, col: colIndex },
          player: curActivePlayer, //fixed
        },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  };
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        {winner && <p>You won, {winner}</p>}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
