import { cookies } from "next/headers";
import Iron from '@hapi/iron';
import { ENC_KEY } from "@/constants";

export default async function SecretPage() {
  const allCookies = cookies();

  const sealed = allCookies.get('session')?.value;
  if (!sealed) {
    return null;
  }

  try {
    const sessionData = await Iron.unseal(
      sealed, ENC_KEY, Iron.defaults);

    const username = sessionData.username;

    return (
      <div>
        {username && <h1>Welcome, {username}</h1>}
        {!username && <h1>You are not allowed here!</h1>}
      </div>
    );
  } catch (err) {
    return (
      <div>
        <h1>Invalid session!</h1>
        <p>Did you tamper with your cookie?</p>
      </div>
    );
  }
}