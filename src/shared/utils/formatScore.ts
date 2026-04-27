export function formatScore(score: number): string {
  const normalized = Math.max(0, Math.min(100, Math.round(score)));
  return `${normalized}/100`;
}
