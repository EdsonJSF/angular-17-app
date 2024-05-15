import { User } from '@interfaces';

export interface UserState {
  users: User[];
  loading: boolean;
}
