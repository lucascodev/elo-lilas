export function isDoublePress(previousPressAt: number | null, currentPressAt: number, windowMs: number): boolean {
  if (previousPressAt === null) return false;
  const elapsed = currentPressAt - previousPressAt;
  return elapsed >= 0 && elapsed <= windowMs;
}
