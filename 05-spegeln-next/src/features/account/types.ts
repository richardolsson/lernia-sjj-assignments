export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export type UserPostBody = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}