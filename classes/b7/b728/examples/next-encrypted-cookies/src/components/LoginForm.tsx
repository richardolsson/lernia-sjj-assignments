"use client";

import { FC, useState } from "react";

const LoginForm: FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form
        onSubmit={async (ev) => {
          ev.preventDefault();
          const resp = await fetch("/api/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username,
              password,
            }),
          });
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
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default LoginForm;
