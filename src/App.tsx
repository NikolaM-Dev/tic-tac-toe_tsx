import { useState } from 'react';

import type { Coordinate, Player, SquareValue } from './types';
import { GameBoard } from './components/GameBoard';
import { GameHistory } from './components/GameHistory';
import { GameStatus } from './components/GameStatus';
import { getGameStatus } from './gameLogic';

export function App() {
  const [squares, setSquares] = useState<SquareValue[]>(Array(9).fill(null));
  const [history, setHistory] = useState<SquareValue[][]>([
    Array(9).fill(null),
  ]);
  const [movementsCoordinates, setMovementsCoordinates] = useState<
    Coordinate[]
  >([]);

  const movementCount = squares.filter((s) => s !== null).length;
  const currentPlayer: Player = movementCount % 2 === 0 ? 'X' : 'O';
  const gameStatus = getGameStatus(squares);

  function handlePlay(newSquares: SquareValue[], coordinate: Coordinate): void {
    setSquares(newSquares);

    setHistory((prevHistory) => {
      if (prevHistory.length - 1 > movementCount) {
        return [...prevHistory.slice(0, movementCount + 1), newSquares];
      }

      return [...prevHistory, newSquares];
    });

    setMovementsCoordinates((prevCoordinates) => {
      if (prevCoordinates.length - 1 > movementCount) {
        return [...prevCoordinates.slice(0, movementCount + 1), coordinate];
      }

      return [...prevCoordinates, coordinate];
    });
  }

  function handleJump(movement: number): void {
    setSquares(history[movement]);
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-neutral-900 p-24 text-neutral-200">
      <h1 className="text-8xl font-bold">Tic Tac Toe</h1>
      <GameStatus currentPlayer={currentPlayer} gameStatus={gameStatus} />

      <main className="flex gap-20">
        <GameBoard
          currentPlayer={currentPlayer}
          onPlay={handlePlay}
          squares={squares}
          gameStatus={gameStatus}
        />
        <GameHistory
          movementsCoordinates={movementsCoordinates}
          currentMovement={movementCount}
          history={history}
          onJump={handleJump}
        />
      </main>
    </div>
  );
}
