import { NextPage } from "next";
import { useContext, useState } from "react";
import { AuthContext } from "../authContext";
import Headline from "../components/Headline";
import MainLayout from "../layouts/MainLayout";

const LoginPage: NextPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);

  return (
    <MainLayout>
      <Headline>Log in</Headline>
      <form
        onSubmit={async (ev) => {
          ev.preventDefault();
          await login(username, password);
        }}
      >
        <input
          type="text"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <input type="submit" />
      </form>
    </MainLayout>
  );
};

export default LoginPage;
