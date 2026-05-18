import { cookies } from "next/headers";

export default async function SecretPage() {
  const allCookies = await cookies();
  const username = allCookies.get('username')?.value ?? null;

  if (username) {
    return (
      <h1>Hello, {username}! This page is secret</h1>
    );
  } else {
    return <h1>Nothing to see here</h1>;
  }
}