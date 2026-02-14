import { Board } from './components/Board';
import { History } from './components/History';

export function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-neutral-900 p-32 text-neutral-200">
      <h1 className="text-8xl font-bold">Tic Tac Toe</h1>
      <h2 className="text-4xl">Game Status</h2>
      <Board />
      <History />
    </div>
  );
}
