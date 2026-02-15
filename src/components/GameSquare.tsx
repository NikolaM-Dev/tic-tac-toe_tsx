import type { SquareValue } from '../types';
import { Button } from './Button';

type GameSquareProps = {
  value: SquareValue;

  onSquareClick: () => void;
};

export function GameSquare({
  value,
  onSquareClick,
}: GameSquareProps): React.JSX.Element {
  return (
    <Button
      onClick={onSquareClick}
      className="min-h-24 min-w-24 rounded-none border-black bg-yellow-200 text-6xl font-bold text-black hover:bg-yellow-300"
    >
      {value}
    </Button>
  );
}
