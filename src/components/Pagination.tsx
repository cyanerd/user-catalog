import type { ReactNode } from 'react';
import ChevronLeft from '../icons/chevron-left.svg?react';
import ChevronRight from '../icons/chevron-right.svg?react';
import { useMediaQuery } from '../hooks/useMediaQuery';

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

interface NavButtonProps {
  onClick: () => void;
  disabled: boolean;
  children: ReactNode;
}

function NavButton({ onClick, disabled, children }: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium cursor-pointer text-[var(--color-ink-secondary)] hover:bg-[var(--color-surface-hover)] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-150"
    >
      {children}
    </button>
  );
}

export function Pagination({ currentPage, totalPages, onPageChange }: Props) {
  const isSmall = useMediaQuery('(max-width: 639px)');

  if (totalPages <= 1) return null;

  const getPages = (): (number | 'left-dots' | 'right-dots')[] => {
    const pages: (number | 'left-dots' | 'right-dots')[] = [];
    const delta = isSmall ? 1 : 2;

    const left = Math.max(2, currentPage - delta);
    const right = Math.min(totalPages - 1, currentPage + delta);

    pages.push(1);
    if (left > 2) pages.push('left-dots');
    for (let i = left; i <= right; i++) pages.push(i);
    if (right < totalPages - 1) pages.push('right-dots');
    if (totalPages > 1) pages.push(totalPages);

    return pages;
  };

  return (
    <nav
      aria-label="Навигация по страницам"
      className="flex items-center justify-between mt-6 px-1"
    >
      <NavButton onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        <ChevronLeft className="w-4 h-4" />
        <span className="hidden sm:inline">Назад</span>
      </NavButton>

      <div className="flex items-center gap-0.5">
        {getPages().map((page) =>
          typeof page === 'string' ? (
            <span
              key={page}
              className="w-9 h-9 flex items-center justify-center text-sm text-[var(--color-ink-ghost)]"
            >
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              aria-label={`Страница ${page}`}
              aria-current={page === currentPage ? 'page' : undefined}
              className={`w-9 h-9 rounded-lg text-sm font-medium cursor-pointer transition-all duration-150 ${
                page === currentPage
                  ? 'bg-[var(--color-accent)] text-white shadow-[0_1px_3px_rgba(67,56,202,0.3)]'
                  : 'text-[var(--color-ink-secondary)] hover:bg-[var(--color-surface-hover)]'
              }`}
            >
              {page}
            </button>
          ),
        )}
      </div>

      <NavButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <span className="hidden sm:inline">Вперед</span>
        <ChevronRight className="w-4 h-4" />
      </NavButton>
    </nav>
  );
}
