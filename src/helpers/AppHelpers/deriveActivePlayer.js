//helper function
export const deriveActivePlayer = (gameTurns) => {
  let curPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") curPlayer = "O";
  return curPlayer;
};
