/**
 * Russian pluralization: picks the correct form based on count.
 * Example: pluralize(5, 'пользователь', 'пользователя', 'пользователей') → 'пользователей'
 */
export function pluralize(count: number, one: string, few: string, many: string): string {
  const abs = Math.abs(count);
  const mod10 = abs % 10;
  const mod100 = abs % 100;

  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return few;
  return many;
}
