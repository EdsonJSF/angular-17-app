import { User } from '.';

export interface UserState {
  users: User[];
  loading: boolean;
}
