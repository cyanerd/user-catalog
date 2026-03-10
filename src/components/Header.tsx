import { SearchInput } from './SearchInput';
import { pluralize } from '../utils/pluralize';

interface Props {
  total: number | undefined;
  search: string;
  onSearchChange: (value: string) => void;
}

export function Header({ total, search, onSearchChange }: Props) {
  return (
    <header className="border-b border-[var(--color-border)] bg-[var(--color-surface-raised)]">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-[var(--color-ink)] tracking-tight">
              Каталог пользователей
            </h1>
            {total !== undefined ? (
              <p className="text-sm text-[var(--color-ink-tertiary)] mt-1 tabular-nums">
                {total} {pluralize(total, 'пользователь', 'пользователя', 'пользователей')}
              </p>
            ) : (
              <div className="skeleton-shimmer h-[20px] w-40 rounded mt-1" />
            )}
          </div>
          <div className="w-full sm:w-80">
            <SearchInput value={search} onChange={onSearchChange} />
          </div>
        </div>
      </div>
    </header>
  );
}
