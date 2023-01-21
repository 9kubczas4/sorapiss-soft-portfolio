export const enum UserRole {
  User = 'user',
  ClientReadonly = 'client-readonly',
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: UserRole;
}
