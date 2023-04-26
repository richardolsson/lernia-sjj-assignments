import { cookies } from "next/headers";
import { FC } from "react";

const SecretPage: FC = () => {
  const allCookies = cookies();

  const username = allCookies.get('username')?.value;

  return (
    <div>
      {username && <h1>Welcome, {username}</h1>}
      {!username && <h1>You are not allowed here!</h1>}
    </div>
  );
}

export default SecretPage;