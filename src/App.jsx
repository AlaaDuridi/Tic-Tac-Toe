import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GamaBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { PLAYERS } from "./constants/players";
import { deriveActivePlayer } from "./helpers/AppHelpers/deriveActivePlayer";
import { deriveWinner } from "./helpers/AppHelpers/deriveWinner";
import { deriveGameBoard } from "./helpers/AppHelpers/deriveGameBoard";
function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState(PLAYERS);

  //derive currentPlayer out of the turns
  const activePlayer = deriveActivePlayer(gameTurns);

  //transform turns into a gameBoard
  //derived state
  const gameBoard = deriveGameBoard(gameTurns);

  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

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

  const handleRestart = () => {
    setGameTurns([]);
  };

  const handlePlayerNameChange = (symbol, newName) => {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  };
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
