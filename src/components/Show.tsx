/**
 * Props for the {@link Show} component.
 *
 * @property {React.ReactNode} children - Content to render when `when` is true.
 * @property {React.ReactNode} [fallback=null] - Content to render when `when` is false.
 * @property {boolean} when - Condition that determines which content to display.
 */
type ShowProps = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  when: boolean;
};

/**
 * Render `children` when `when` is true, otherwise render `fallback`.
 *
 * This utility component simplifies conditional rendering in JSX.
 *
 * @param {ShowProps} props - Component props.
 * @returns {React.JSX.Element} The rendered content based on the `when` prop.
 */
export function Show({
  children,
  fallback = null,
  when,
}: ShowProps): React.JSX.Element {
  if (when) {
    return <>{children}</>;
  }

  return <>{fallback}</>;
}
