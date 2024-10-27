export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export interface UserListProps {
  users: User[];
  loading: boolean;
}
