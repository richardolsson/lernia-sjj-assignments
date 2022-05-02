import { AppProps } from "next/app";
import { useState } from "react";
import { AuthContext, User } from "../authContext";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<User>({
    name: "",
    authenticated: false,
  });

  const login = async (username: string, password: string) => {
    // TODO: Log in user using API
    setUser({
      name: username,
      authenticated: true,
    });
    return false;
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}
