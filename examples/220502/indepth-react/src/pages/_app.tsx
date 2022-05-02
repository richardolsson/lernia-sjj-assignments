import { AppProps } from "next/app";
import { AuthContext } from "../authContext";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContext.Provider
      value={{
        name: "",
        authenticated: false,
      }}
    >
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}
