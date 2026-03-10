import type { UsersResponse } from '../types/user';

const BASE_URL = 'https://dummyjson.com';
export const PAGE_SIZE = 10;

export async function fetchUsers(query: string, page: number): Promise<UsersResponse> {
  const skip = (page - 1) * PAGE_SIZE;
  const url = query
    ? `${BASE_URL}/users/search?q=${encodeURIComponent(query)}&limit=${PAGE_SIZE}&skip=${skip}`
    : `${BASE_URL}/users?limit=${PAGE_SIZE}&skip=${skip}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch users: ${res.status}`);
  return res.json() as Promise<UsersResponse>;
}
