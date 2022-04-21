import bcrypt from "bcrypt";
import Cookies from "cookies";
import Iron from "@hapi/iron";
import { NextApiRequest, NextApiResponse } from "next";

// INSECURE! Do not do this. Only for the sake of example
const USERS: Record<string, string> = {
  richard: "$2b$10$jlvz/FpomygRnM7pUjucF.fBt.b.bHx73tbfL33OFrQNcQojCu4W.",
  marcus: "$2b$10$ABjGTjCDD71yL2b2CTP8YOao0P44zRo90HZasCd1ZzN0dqlgmzX62",
};

export const ENC_KEY =
  "v<4h*y!9:wGz,=vkxrP.#9P8dT!ua%=;S56qQ}Nn32`3RXhu}}8y'?_>J9<E&Dz*";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    const { username, password } = req.body;

    const isCorrect = await bcrypt.compare(password, USERS[username]);

    if (isCorrect) {
      const cookies = new Cookies(req, res);
      cookies.set(
        "session",
        await Iron.seal(
          {
            username: username,
            loggedIn: true,
          },
          ENC_KEY,
          Iron.defaults
        )
      );

      res.status(200).end();
    } else {
      res.status(401).end();
    }
  } else {
    res.status(405).end();
  }
}
