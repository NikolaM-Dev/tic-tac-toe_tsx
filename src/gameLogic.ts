import type { SquareValue } from './types';

export function getGameWinner(squares: SquareValue[]): SquareValue {
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
      return squares[a];
    }
  }

  return null;
}
