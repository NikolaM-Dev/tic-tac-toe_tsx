import type { SquareValue } from '../types';
import { Button } from './Button';

type GameSquareProps = {
  isWinningSquare: boolean;
  value: SquareValue;

  onSquareClick: () => void;
};

export function GameSquare({
  value,
  isWinningSquare,
  onSquareClick,
}: GameSquareProps): React.JSX.Element {
  const accentColor: React.HTMLAttributes<HTMLButtonElement>['className'] =
    isWinningSquare
      ? 'bg-lime-400 hover:bg-lime-500'
      : 'bg-yellow-200 hover:bg-yellow-300';
  return (
    <Button
      onClick={onSquareClick}
      className={`min-h-24 min-w-24 rounded-none border-black text-6xl font-bold text-black ${accentColor}`}
    >
      {value}
    </Button>
  );
}
