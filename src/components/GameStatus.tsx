import type { SquareValue, Player } from '../types';
import { getGameStatus } from '../gameLogic';

type GameStatusProps = {
  currentPlayer: Player;
  squares: SquareValue[];
};

export function GameStatus({
  currentPlayer,
  squares,
}: GameStatusProps): React.JSX.Element {
  const status = getGameStatus(squares);
  if (!status.winner && !status.isGameOver) {
    return (
      <GameStatusText>
        <Enfasis>{currentPlayer}</Enfasis>'s Turn 🎰
      </GameStatusText>
    );
  }

  if (status.isGameOver) {
    return (
      <GameStatusText>
        <Enfasis>Draw!</Enfasis> Nobody wins this round. 🤝
      </GameStatusText>
    );
  }

  return (
    <GameStatusText>
      The Player <Enfasis>{status.winner}</Enfasis> Wins!!! 🏆
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
