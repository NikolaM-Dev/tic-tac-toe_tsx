import type { Player } from '../types';
import { type GetGameStatusReturn } from '../gameLogic';

type GameStatusProps = {
  currentPlayer: Player;
  gameStatus: GetGameStatusReturn;
};

export function GameStatus({
  currentPlayer,
  gameStatus,
}: GameStatusProps): React.JSX.Element {
  if (!gameStatus.winner && !gameStatus.isGameOver) {
    return (
      <GameStatusText>
        <Enfasis>{currentPlayer}</Enfasis>'s Turn 🎰
      </GameStatusText>
    );
  }

  if (gameStatus.isGameOver) {
    return (
      <GameStatusText>
        <Enfasis>Draw!</Enfasis> Nobody wins this round. 🤝
      </GameStatusText>
    );
  }

  return (
    <GameStatusText>
      The Player <Enfasis>{gameStatus.winner}</Enfasis> Wins!!! 🏆
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
