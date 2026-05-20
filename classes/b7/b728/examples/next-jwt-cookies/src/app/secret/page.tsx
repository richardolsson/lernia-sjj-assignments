import jsonwebtoken from 'jsonwebtoken';
import { cookies } from "next/headers";

export default async function SecretPage() {
  const allCookies = await cookies();
  const jwt = allCookies.get('session')?.value ?? null;
  if (jwt) {
    try {
      const sessionData = jsonwebtoken.verify(jwt, process.env.JWT_KEY || '');
      if (typeof sessionData == 'object') {
        const username = sessionData.username;

        return (
          <h1>Hello, {username}! This page is secret</h1>
        );
      }
    } catch (err) {
      // Do nothing, just fall back to error message below
    }
  }

  return <h1>Nothing to see here</h1>;
}