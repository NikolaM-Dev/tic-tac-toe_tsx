import type React from 'react';
import type { Coordinate, SquareValue } from '../types';
import { Button } from './Button';
import { useState } from 'react';

type GameHistoryProps = {
  currentMovement: number;
  history: SquareValue[][];
  movementsCoordinates: Coordinate[];

  onJump: (movement: number) => void;
};

const movementsKeys = Array.from({ length: 10 }, () => crypto.randomUUID());

export function GameHistory({
  currentMovement,
  history,
  movementsCoordinates,
  onJump,
}: GameHistoryProps): React.JSX.Element {
  const [isAscending, setIsAscending] = useState(true);
  function handleSorting() {
    setIsAscending(!isAscending);
  }

  const movements = history.map((_h, i) => {
    const orderedIndex = isAscending ? i : history.length - 1 - i;
    let children: React.ReactNode;
    let coordinate: React.ReactNode;
    if (orderedIndex - 1 >= 0) {
      const { row, col } = movementsCoordinates[orderedIndex - 1];
      coordinate = <Coordinates col={col + 1} row={row + 1} />;
    }

    // You are at the start
    if (orderedIndex === 0 && currentMovement === 0) {
      children = (
        <MovementButton disabled onClick={() => onJump(orderedIndex)}>
          You Are at the Game Start
        </MovementButton>
      );
    }

    // Reset the game
    else if (orderedIndex === 0) {
      children = (
        <MovementButton onClick={() => onJump(orderedIndex)}>
          Go to Game Start
        </MovementButton>
      );
    }

    // Current Movement
    else if (currentMovement === orderedIndex) {
      children = (
        <MovementButton disabled onClick={() => onJump(orderedIndex)}>
          You Are at Move #{orderedIndex} {coordinate}
        </MovementButton>
      );
    }

    // Default
    else {
      children = (
        <MovementButton onClick={() => onJump(orderedIndex)}>
          Go to Move #{orderedIndex} {coordinate}
        </MovementButton>
      );
    }

    return (
      <MovementListItem key={movementsKeys[orderedIndex]}>
        {children}
      </MovementListItem>
    );
  });

  return (
    <section>
      <Button
        onClick={handleSorting}
        className="mb-2 min-w-50 cursor-pointer bg-transparent text-3xl font-bold hover:bg-neutral-800/30"
      >
        History {isAscending ? '⬇️' : '⬆️'}
      </Button>
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

type CoordinatesProps = {
  col: number;
  row: number;
};

function Coordinates({ col, row }: CoordinatesProps): React.JSX.Element {
  return (
    <strong>
      (<span className="text-orange-400">{row}</span>,{' '}
      <span className="text-blue-400">{col}</span>)
    </strong>
  );
}
