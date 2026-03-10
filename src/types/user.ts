export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  image: string;
  age: number;
  gender: string;
  birthDate: string;
  address: {
    address: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  company: {
    name: string;
    title: string;
    department: string;
  };
  university: string;
}

export interface UsersResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}
