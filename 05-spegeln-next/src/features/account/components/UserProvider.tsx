import { FC, ReactNode, createContext, useEffect, useState } from "react";
import { User } from "../types";
import apiRequest from "@/utils/apiRequest";

type UserContextValue = {
  user: User | null;
  loading: boolean;
}

export const UserContext = createContext<UserContextValue>({
  user: null,
  loading: true,
});

type UserProviderProps = {
  children: ReactNode;
}

const UserProvider: FC<UserProviderProps> = ({children}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiRequest<User>('GET', '/api/user')
      .then((user) => {
        setUser(user);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <UserContext.Provider value={{
      user,
      loading,
    }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;