"use client";

import { FC, useState } from "react";

const LoginForm: FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <form onSubmit={async (ev) => {
        ev.preventDefault();
        await fetch('/api/login', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            username,
            password,
          }),
        });
      }}>
        <input type="text" placeholder="username" value={username} onChange={(ev) => {
          setUsername(ev.currentTarget.value);
        }} />
        <input type="password" placeholder="password" value={password} onChange={(ev) => {
          setPassword(ev.currentTarget.value);
        }} />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default LoginForm;