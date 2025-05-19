import { cookies } from "next/headers";
import Iron from "@hapi/iron";

export default async function SecretPage() {
  const allCookies = await cookies();

  const sessionString = allCookies.get("session")?.value ?? "";
  let unsealed;
  try {
    unsealed = await Iron.unseal(
      sessionString,
      process.env.ENC_KEY!,
      Iron.defaults
    );
  } catch (err) {
    return <h1>Nothing here!</h1>;
  }

  const username = unsealed.username;

  return <h1>Hello {username}, this is secret!</h1>;
}
