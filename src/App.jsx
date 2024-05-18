import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GamaBoard";
import Log from "./components/Log";

//helper function
const deriveActivePlayer = (gameTurns) => {
  let curPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") curPlayer = "O";
  return curPlayer;
};

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  //derive currentPlayer out of the turns
  const activePlayer = deriveActivePlayer(gameTurns);

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
            symbol="Y"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
