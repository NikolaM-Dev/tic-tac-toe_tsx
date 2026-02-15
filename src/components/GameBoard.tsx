import type { Player, SquareValue } from '../types';
import { GameRow } from './GameRow';
import { GameSquare } from './GameSquare';
import { getGameWinner } from '../gameLogic';

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
    if (squares[i] || getGameWinner(squares)) {
      return;
    }

    const newSquares = squares.slice();
    newSquares[i] = currentPlayer;
    onPlay(newSquares);
  }

  return (
    <section>
      <GameRow>
        <GameSquare
          value={squares[0]}
          onSquareClick={() => handleSquareClick(0)}
        />
        <GameSquare
          value={squares[1]}
          onSquareClick={() => handleSquareClick(1)}
        />
        <GameSquare
          value={squares[2]}
          onSquareClick={() => handleSquareClick(2)}
        />
      </GameRow>
      <GameRow>
        <GameSquare
          value={squares[3]}
          onSquareClick={() => handleSquareClick(3)}
        />
        <GameSquare
          value={squares[4]}
          onSquareClick={() => handleSquareClick(4)}
        />
        <GameSquare
          value={squares[5]}
          onSquareClick={() => handleSquareClick(5)}
        />
      </GameRow>
      <GameRow>
        <GameSquare
          value={squares[6]}
          onSquareClick={() => handleSquareClick(6)}
        />
        <GameSquare
          value={squares[7]}
          onSquareClick={() => handleSquareClick(7)}
        />
        <GameSquare
          value={squares[8]}
          onSquareClick={() => handleSquareClick(8)}
        />
      </GameRow>
    </section>
  );
}
