export const enum UserRole {
  Editor = 'editor',
  Viewer = 'viewer',
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: UserRole;
}
