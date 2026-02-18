import type { Player, SquareValue } from './types';

export type GetGameStatusReturn = {
  isGameOver: boolean;
  winner: Player | null;
  winningStreak: [number, number, number] | null;
};

export function getGameStatus(squares: SquareValue[]): GetGameStatusReturn {
  const status: GetGameStatusReturn = {
    isGameOver: false,
    winner: null,
    winningStreak: null,
  };

  const winningPositions: number[][] = [
    // Horizontally
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    // Vertically
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    // Diagonal
    [0, 4, 8],
    [6, 4, 2],
  ];

  for (const winningPosition of winningPositions) {
    const [a, b, c] = winningPosition;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      status.winner = squares[a];
      status.winningStreak = winningPosition as [number, number, number];

      break;
    }
  }

  if (status.winner || squares.every((v) => v !== null)) {
    status.isGameOver = true;
  }

  return status;
}
