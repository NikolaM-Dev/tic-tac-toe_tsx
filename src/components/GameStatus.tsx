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
        <strong className="text-orange-600">{currentPlayer}</strong>'s Turn
      </GameStatusText>
    );
  }

  return (
    <GameStatusText>
      The Player <strong className="text-orange-600">{winner}</strong> Wins!!!
      🏆
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
