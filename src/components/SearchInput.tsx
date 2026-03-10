import SearchIcon from '../icons/search.svg?react';
import XMark from '../icons/x-mark.svg?react';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function SearchInput({ value, onChange }: Props) {
  return (
    <div className="relative group">
      <SearchIcon
        aria-hidden="true"
        className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[var(--color-ink-ghost)] group-focus-within:text-[var(--color-accent)] transition-colors duration-200"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === 'Escape' && value && onChange('')}
        aria-label="Поиск пользователей"
        placeholder="Поиск по имени..."
        className="w-full pl-11 pr-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] text-[var(--color-ink)] placeholder-[var(--color-ink-ghost)] text-sm font-medium shadow-[0_1px_2px_rgba(0,0,0,0.04)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/20 focus:border-[var(--color-accent)] transition-all duration-200"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md cursor-pointer text-[var(--color-ink-ghost)] hover:text-[var(--color-ink-secondary)] hover:bg-[var(--color-surface-hover)] transition-all duration-150"
          aria-label="Очистить поиск"
        >
          <XMark className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
