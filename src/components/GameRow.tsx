type GameRowProps = {
  children: React.ReactNode;
};

export function GameRow({ children }: GameRowProps): React.JSX.Element {
  return <div className="flex">{children}</div>;
}
