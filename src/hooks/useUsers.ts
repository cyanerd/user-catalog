import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { fetchUsers } from '../api/users';

export function useUsers(query: string, page: number) {
  return useQuery({
    queryKey: ['users', query, page],
    queryFn: () => fetchUsers(query, page),
    placeholderData: keepPreviousData,
    staleTime: 60_000,
  });
}
