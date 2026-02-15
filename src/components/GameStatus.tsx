import type { SquareValue, Player } from '../types';
import { getGameWinner } from '../gameLogic';

type GameStatusProps = {
  currentPlayer: Player;
  squares: SquareValue[];
};

export function GameStatus({
  currentPlayer,
  squares,
}: GameStatusProps): React.JSX.Element {
  const winner = getGameWinner(squares);
  if (!winner) {
    return (
      <GameStatusText>
        <Enfasis>{currentPlayer}</Enfasis>'s Turn
      </GameStatusText>
    );
  }

  return (
    <GameStatusText>
      The Player <Enfasis>{winner}</Enfasis> Wins!!! 🏆
    </GameStatusText>
  );
}

function GameStatusText({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return <h2 className="text-4xl">{children}</h2>;
}

function Enfasis({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return <strong className="text-red-500">{children}</strong>;
}
