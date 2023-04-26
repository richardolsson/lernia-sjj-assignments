"use client";

import { FC, useState } from "react";

const LoginForm: FC = () => {
  const [username, setUsername] = useState('');

  return (
    <div>
      <input
        value={username}
        onChange={ev => setUsername(ev.currentTarget.value)}
      />
      <button onClick={() => {
        fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username }),
        });
      }}>Log in</button>
    </div>
  );
};

export default LoginForm;