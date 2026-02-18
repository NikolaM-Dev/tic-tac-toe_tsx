import type { Player } from '../types';
import { Match, Switch } from './Switch';
import { type GetGameStatusReturn } from '../gameLogic';

type GameStatusProps = {
  currentPlayer: Player;
  gameStatus: GetGameStatusReturn;
};

export function GameStatus({
  currentPlayer,
  gameStatus,
}: GameStatusProps): React.JSX.Element {
  return (
    <GameStatusText>
      <Switch
        fallback={
          <>
            <Emphasis>{currentPlayer}</Emphasis>'s Turn 🎰
          </>
        }
      >
        <Match when={gameStatus.winner != null}>
          The Player <Emphasis>{gameStatus.winner}</Emphasis> Wins!!! 🏆
        </Match>
        <Match when={gameStatus.isGameOver}>
          <Emphasis>Draw!</Emphasis> Nobody wins this round. 🤝
        </Match>
      </Switch>
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

function Emphasis({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return <strong className="text-red-500">{children}</strong>;
}
