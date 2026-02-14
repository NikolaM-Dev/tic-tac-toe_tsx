type RowProps = {
  children: React.ReactNode;
};

export function Row({ children }: RowProps): React.JSX.Element {
  return <div className="flex">{children}</div>;
}
