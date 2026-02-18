import { twMerge } from 'tailwind-merge';

type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  className,
  ...props
}: ButtonProps): React.JSX.Element {
  return (
    <button
      className={twMerge(
        'rounded-md border border-transparent bg-slate-700 px-4 py-2 text-center text-sm text-white shadow-md transition-all hover:bg-slate-500 hover:shadow-lg focus:shadow-none active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
