import type React from 'react';
import type { SquareValue } from '../types';
import { Button } from './Button';

type GameHistoryProps = {
  history: SquareValue[][];
  currentMovement: number;

  onJump: (movement: number) => void;
};

export function GameHistory({
  currentMovement,
  history,
  onJump,
}: GameHistoryProps): React.JSX.Element {
  const movements = history.map((_h, i) => {
    let children: React.ReactNode;

    // You are at the start
    if (i === 0 && currentMovement === 0) {
      children = (
        <MovementButton disabled onClick={() => onJump(i)}>
          You Are at the Game Start
        </MovementButton>
      );
    }

    // Reset the game
    else if (i === 0) {
      children = (
        <MovementButton onClick={() => onJump(i)}>
          Go to Game Start
        </MovementButton>
      );
    }

    // Current Movement
    else if (currentMovement === i) {
      children = (
        <MovementButton disabled onClick={() => onJump(i)}>
          You Are at Move #{i}
        </MovementButton>
      );
    }

    // Default
    else {
      children = (
        <MovementButton onClick={() => onJump(i)}>
          Go to Move #{i}
        </MovementButton>
      );
    }

    return <MovementListItem key={i}>{children}</MovementListItem>;
  });

  return (
    <section>
      <h2 className="mb-4 text-3xl font-bold">History</h2>
      <ol className="flex flex-col gap-2">{movements}</ol>
    </section>
  );
}

type MovementListItemProps = {
  children: React.ReactNode;
};

export function MovementListItem({
  children,
}: MovementListItemProps): React.JSX.Element {
  return <li className="min-w-50">{children}</li>;
}

type MovementButtonProps = {
  children: React.ReactNode;

  onClick: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function MovementButton({
  children,
  onClick,
  ...props
}: MovementButtonProps): React.JSX.Element {
  return (
    <Button className="w-full" onClick={onClick} {...props}>
      {children}
    </Button>
  );
}
