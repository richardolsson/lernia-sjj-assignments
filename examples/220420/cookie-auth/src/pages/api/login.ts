import Cookies from "cookies";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "POST") {
    const cookies = new Cookies(req, res);
    cookies.set("loggedin", "yes");

    res.status(200).end();
  } else {
    res.status(405).end();
  }
}
