import type { Coordinate, Player, SquareValue } from '../types';
import { GameRow } from './GameRow';
import { GameSquare } from './GameSquare';
import { type GetGameStatusReturn } from '../gameLogic';

type GameBoardProps = {
  currentPlayer: Player;
  squares: SquareValue[];
  gameStatus: GetGameStatusReturn;

  onPlay: (squares: SquareValue[], coordinate: Coordinate) => void;
};

type HandleSquareClickProps = {
  col: number;
  i: number;
  row: number;
};

export function GameBoard({
  currentPlayer,
  gameStatus,
  onPlay,
  squares,
}: GameBoardProps): React.JSX.Element {
  function handleSquareClick({ i, row, col }: HandleSquareClickProps) {
    // Don't override movements or don't keep playing after the game is over
    if (squares[i] || gameStatus.isGameOver) {
      return;
    }

    const newSquares = squares.slice();
    newSquares[i] = currentPlayer;
    onPlay(newSquares, { row, col });
  }

  const arrRange = [...Array(3).keys()];

  return (
    <section>
      {arrRange.map((row) => (
        <GameRow key={row}>
          {arrRange.map((col) => {
            const id = 3 * row + col;

            let isWinningSquare = false;
            if (gameStatus.winningStreak !== null) {
              isWinningSquare = gameStatus.winningStreak.includes(id);
            }

            return (
              <GameSquare
                isWinningSquare={isWinningSquare}
                key={id}
                value={squares[id]}
                onSquareClick={() => handleSquareClick({ i: id, row, col })}
              />
            );
          })}
        </GameRow>
      ))}
    </section>
  );
}
