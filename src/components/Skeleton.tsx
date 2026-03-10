import { PAGE_SIZE } from '../api/users';
import { TableShell } from './TableShell';

export function SkeletonTable() {
  return (
    <TableShell>
      {Array.from({ length: PAGE_SIZE }, (_, i) => (
        <SkeletonRow key={i} index={i} />
      ))}
    </TableShell>
  );
}

function SkeletonRow({ index }: { index: number }) {
  return (
    <tr
      className="row-animate border-b border-[var(--color-border)] last:border-b-0"
      style={{ animationDelay: `${index * 40}ms` }}
    >
      <td className="py-3.5 pl-5 pr-3">
        <div className="flex items-center gap-3.5">
          <div className="skeleton-shimmer w-9 h-9 rounded-full shrink-0" />
          <div className="space-y-1.5">
            <div className="skeleton-shimmer h-3.5 w-28 rounded" />
            <div className="skeleton-shimmer h-2.5 w-20 rounded" />
          </div>
        </div>
      </td>
      <td className="py-3.5 px-3">
        <div className="skeleton-shimmer h-3.5 w-36 rounded" />
      </td>
      <td className="py-3.5 px-3 hidden md:table-cell">
        <div className="skeleton-shimmer h-3.5 w-28 rounded" />
      </td>
      <td className="py-3.5 px-3 hidden lg:table-cell">
        <div className="skeleton-shimmer h-5 w-20 rounded-md" />
      </td>
      <td className="py-3.5 px-3 pr-5 hidden lg:table-cell">
        <div className="skeleton-shimmer h-3.5 w-16 rounded" />
      </td>
    </tr>
  );
}
