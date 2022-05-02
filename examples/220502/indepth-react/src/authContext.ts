import React from "react";

export type User = {
  authenticated: boolean;
  name: string;
};

export const AuthContext = React.createContext<{
  user: User;
  login: (username: string, password: string) => Promise<boolean>;
}>({
  user: {
    authenticated: false,
    name: "",
  },
  login: async (username: string, password: string) => false,
});
