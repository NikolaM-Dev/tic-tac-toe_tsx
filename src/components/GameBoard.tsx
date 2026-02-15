import type { Player, SquareValue } from '../types';
import { GameRow } from './GameRow';
import { GameSquare } from './GameSquare';
import { getGameStatus } from '../gameLogic';

type GameBoardProps = {
  currentPlayer: Player;
  squares: SquareValue[];

  onPlay: (squares: SquareValue[]) => void;
};

export function GameBoard({
  currentPlayer,
  onPlay,
  squares,
}: GameBoardProps): React.JSX.Element {
  function handleSquareClick(i: number) {
    // Don't override movements or don't keep playing after the game is over
    if (squares[i] || getGameStatus(squares).isGameOver) {
      return;
    }

    const newSquares = squares.slice();
    newSquares[i] = currentPlayer;
    onPlay(newSquares);
  }

  const arrRange = [...Array(3).keys()];

  return (
    <section>
      {arrRange.map((row) => (
        <GameRow key={row}>
          {arrRange.map((col) => {
            const id = 3 * row + col;

            return (
              <GameSquare
                key={id}
                value={squares[id]}
                onSquareClick={() => handleSquareClick(id)}
              />
            );
          })}
        </GameRow>
      ))}
    </section>
  );
}
