import type { User } from '../types/user';
import { TableShell } from './TableShell';

interface Props {
  users: User[];
}

export function UserTable({ users }: Props) {
  if (users.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-[var(--color-ink-tertiary)] text-lg font-medium">
          Пользователи не найдены
        </p>
        <p className="text-[var(--color-ink-ghost)] text-sm mt-1">Попробуйте изменить запрос</p>
      </div>
    );
  }

  return (
    <TableShell>
      {users.map((user, index) => (
        <UserRow key={user.id} user={user} index={index} />
      ))}
    </TableShell>
  );
}

function UserRow({ user, index }: { user: User; index: number }) {
  return (
    <tr
      className="row-animate border-b border-[var(--color-border)] last:border-b-0 transition-colors duration-150 hover:bg-[var(--color-surface-hover)] group cursor-default"
      style={{ animationDelay: `${index * 40}ms` }}
    >
      {/* User */}
      <td className="py-3.5 pl-5 pr-3">
        <div className="flex items-center gap-3.5">
          <div className="relative shrink-0">
            <img
              src={user.image}
              alt={`${user.firstName} ${user.lastName}`}
              width={36}
              height={36}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
              className="w-9 h-9 rounded-full object-cover ring-2 ring-[var(--color-border)] group-hover:ring-[var(--color-accent-soft)] transition-all duration-150"
            />
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-sm text-[var(--color-ink)] truncate">
              {user.firstName} {user.lastName}
            </p>
            <p className="text-xs text-[var(--color-ink-tertiary)] truncate">
              {user.company.title}
            </p>
          </div>
        </div>
      </td>

      {/* Email */}
      <td className="py-3.5 px-3">
        <a
          href={`mailto:${user.email}`}
          className="text-sm text-[var(--color-ink-secondary)] font-[var(--font-mono)] text-[13px] tracking-tight hover:text-[var(--color-accent)] transition-colors duration-150"
        >
          {user.email}
        </a>
      </td>

      {/* Phone */}
      <td className="py-3.5 px-3 hidden md:table-cell">
        <a
          href={`tel:${user.phone}`}
          className="text-sm text-[var(--color-ink-secondary)] tabular-nums hover:text-[var(--color-accent)] transition-colors duration-150"
        >
          {user.phone}
        </a>
      </td>

      {/* Company */}
      <td className="py-3.5 px-3 hidden lg:table-cell">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
          {user.company.name}
        </span>
      </td>

      {/* City */}
      <td className="py-3.5 px-3 pr-5 hidden lg:table-cell">
        <span className="text-sm text-[var(--color-ink-tertiary)]">{user.address.city}</span>
      </td>
    </tr>
  );
}
