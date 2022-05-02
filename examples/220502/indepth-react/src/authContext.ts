import React from "react";

export type User = {
  authenticated: boolean;
  name: string;
};

export const AuthContext = React.createContext<User>({
  authenticated: false,
  name: "",
});
