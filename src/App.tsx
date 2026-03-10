import { useState } from 'react';
import { PAGE_SIZE } from './api/users';
import { ErrorState } from './components/ErrorState';
import { Header } from './components/Header';
import { Pagination } from './components/Pagination';
import { SkeletonTable } from './components/Skeleton';
import { UserTable } from './components/UserTable';
import { useDebouncedValue } from './hooks/useDebouncedValue';
import { useUsers } from './hooks/useUsers';

function App() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const debouncedSearch = useDebouncedValue(search, 300);

  const { data, isLoading, isFetching, isError, refetch } = useUsers(debouncedSearch, page);

  const totalPages = data ? Math.ceil(data.total / PAGE_SIZE) : 0;
  const currentPage = totalPages > 0 ? Math.min(page, totalPages) : page;

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[var(--color-surface)]">
      <Header total={data?.total} search={search} onSearchChange={handleSearchChange} />

      <main className="max-w-6xl mx-auto px-6 py-6">
        {isLoading && <SkeletonTable />}
        {!isLoading && isError && <ErrorState onRetry={() => refetch()} />}
        {!isError && data && (
          <>
            <div
              className={`transition-opacity duration-200 ${isFetching && !isLoading ? 'opacity-50' : ''}`}
            >
              <UserTable users={data.users} />
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
