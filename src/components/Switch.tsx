import React from 'react';

/**
 * Props for the {@link Switch} component.
 *
 * @property {React.ReactNode} children - One or more `<Match>` elements.
 * @property {React.ReactNode} [fallback=null] - Rendered when no `<Match>` satisfies its condition.
 */
type SwitchProps = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
};

/**
 * Props for the {@link Match} component used inside {@link Switch}.
 *
 * @property {boolean} when - Condition that decides if the branch should be rendered.
 * @property {React.ReactNode} children - The UI for the branch.
 */
type MatchProps = {
  when: boolean;
  children: React.ReactNode;
};

/**
 * {@link Switch} picks the first {@link Match} whose `when` prop evaluates to a truthy value.
 * If none match, the optional `fallback` is rendered.
 *
 * @param {SwitchProps} props - Component props.
 * @returns {React.ReactNode} The rendered branch or fallback.
 *
 * Usage mirrors [SolidJS](https://docs.solidjs.com/concepts/control-flow/conditional-rendering):
 *
 * ```tsx
 * <Switch fallback={<p>Fallback content</p>}>
 *   <Match when={condition1}>
 *     <p>Outcome 1</p>
 *   </Match>
 *   <Match when={condition2}>
 *     <p>Outcome 2</p>
 *   </Match>
 * </Switch>
 * ```
 */
export function Switch({
  children,
  fallback = null,
}: SwitchProps): React.JSX.Element {
  // Normalize children to an array (handles a single child, fragment, etc.)
  const childrenArray = React.Children.toArray(
    children,
  ) as React.ReactElement<MatchProps>[];
  // Filter to only include valid React elements
  const matches = childrenArray.filter(React.isValidElement);

  // Find the first `<Match>` whose `when` prop is truthy
  const firstMatch = matches.find(
    (child) =>
      // In a typical bundler the component reference is stable, so we can compare directly
      child.type === Match &&
      // The `when` prop decides if the branch should be shown
      Boolean(child.props.when),
  );

  // If we have a matching branch, render *its* children.
  // The `<Match>` itself renders `null`, so we just return its inner JSX.
  if (firstMatch) {
    return <>{firstMatch.props.children}</>;
  }

  // No match – render fallback (if supplied) or nothing.
  return <>{fallback}</>;
}

/**
 * {@link Match} is a marker component used inside {@link Switch}.
 * It does not render any output itself; the `Switch` component decides
 * which branch to display based on the `when` prop.
 *
 * @param {MatchProps} _props - Props are not used directly.
 * @returns {null} Always returns `null` to keep the JSX tree stable.
 */
export function Match(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _props: MatchProps,
): React.ReactNode {
  return null;
}
