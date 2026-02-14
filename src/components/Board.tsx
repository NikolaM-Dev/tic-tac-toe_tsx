import { useState } from 'react';

import type { SquareValue } from '../types';
import { Row } from './Row';
import { Square } from './Square';

type BoardProps = {};

export function Board({}: BoardProps): React.JSX.Element {
  const [squares, setSquares] = useState<SquareValue[]>(Array(9).fill(null));

  function handleSquareClick(idx: number) {
    // Don't override movements
    if (squares[idx]) {
      return;
    }

    const newSquares = squares.slice();
    newSquares[idx] = 'X';
    setSquares(newSquares);
  }

  return (
    <section>
      <Row>
        <Square value={squares[0]} onSquareClick={() => handleSquareClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleSquareClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleSquareClick(2)} />
      </Row>
      <Row>
        <Square value={squares[3]} onSquareClick={() => handleSquareClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleSquareClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleSquareClick(5)} />
      </Row>
      <Row>
        <Square value={squares[6]} onSquareClick={() => handleSquareClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleSquareClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleSquareClick(8)} />
      </Row>
    </section>
  );
}
