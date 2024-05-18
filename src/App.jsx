import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GamaBoard";
import Log from "./components/Log";
function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  const handleSelectSquare = (rowIndex, colIndex) => {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    //NOTE: avoid intersecting states, + update objects immutably
    setGameTurns((prevTurns) => {
      let curActivePlayer = "X";
      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        curActivePlayer = "O";
      }
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
