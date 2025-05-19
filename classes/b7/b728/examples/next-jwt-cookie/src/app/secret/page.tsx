import { cookies } from "next/headers";
import jsonwebtoken from "jsonwebtoken";

export default async function SecretPage() {
  const allCookies = await cookies();

  const sessionString = allCookies.get("session")?.value ?? "";

  try {
    const session = jsonwebtoken.verify(sessionString, process.env.ENC_KEY!);
    if (typeof session == "object") {
      const username = session.username;
      return <h1>Hello {username}, this is secret!</h1>;
    }
  } catch (err) {
    return <h1>Nothing here!</h1>;
  }
}
