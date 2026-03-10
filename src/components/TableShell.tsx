import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function TableShell({ children }: Props) {
  return (
    <div className="overflow-x-auto rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] shadow-[0_1px_3px_rgba(0,0,0,0.04),0_6px_24px_rgba(0,0,0,0.03)]">
      <table className="w-full text-left" aria-label="Каталог пользователей">
        <thead>
          <tr className="border-b border-[var(--color-border)]">
            <th
              scope="col"
              className="py-3.5 pl-5 pr-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-ink-tertiary)]"
            >
              Пользователь
            </th>
            <th
              scope="col"
              className="py-3.5 px-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-ink-tertiary)]"
            >
              Email
            </th>
            <th
              scope="col"
              className="py-3.5 px-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-ink-tertiary)] hidden md:table-cell"
            >
              Телефон
            </th>
            <th
              scope="col"
              className="py-3.5 px-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-ink-tertiary)] hidden lg:table-cell"
            >
              Компания
            </th>
            <th
              scope="col"
              className="py-3.5 px-3 pr-5 text-xs font-semibold uppercase tracking-wider text-[var(--color-ink-tertiary)] hidden lg:table-cell"
            >
              Город
            </th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
