import Iron from '@hapi/iron';
import { cookies } from "next/headers";

export default async function SecretPage() {
  const allCookies = await cookies();
  const sessionString = allCookies.get('session')?.value ?? null;
  if (sessionString) {
    try {
      const sessionData = await Iron.unseal(sessionString, process.env.IRON_KEY || '', Iron.defaults);
      if (sessionData.username) {
        return (
          <h1>Hello, {sessionData.username}! This page is secret</h1>
        );
      }
    } catch (err) {
      // Do nothing, fallback to error message below
    }
  }

  return <h1>Nothing to see here</h1>;
}