"use client";

import { FC, useState } from "react";

const LoginForm: FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <input
        value={username}
        onChange={ev => setUsername(ev.currentTarget.value)}
      />
      <input
        value={password}
        onChange={ev => setPassword(ev.currentTarget.value)}
      />
      <button onClick={() => {
        fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
      }}>Log in</button>
    </div>
  );
};

export default LoginForm;