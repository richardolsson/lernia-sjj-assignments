import { initCorsMiddleware } from "../../../utils/cors";

const cors = initCorsMiddleware(["POST", "OPTIONS"]);

function assertValidField(body, fieldName, type = "string") {
  if (!body[fieldName]) {
    throw new Error("Missing field ");
  }
  if (typeof body[fieldName] !== type) {
    throw new Error("Invalid type");
  }
}

function bodyIsValid(body) {
  try {
    const numKeys = Object.keys(body).length;
    if (numKeys < 5 || numKeys > 6) {
      return false;
    }

    assertValidField(body, "name");
    assertValidField(body, "email");
    assertValidField(body, "date");
    assertValidField(body, "time");
    assertValidField(body, "participants", "number");

    if (body.challenge) {
      assertValidField(body, "challenge", "number");
    }

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}

export default async function handler(req, res) {
  await cors(req, res);

  if (req.method == "POST") {
    try {
      if (bodyIsValid(req.body)) {
        res
          .status(200)
          .setHeader("access-control-allow-origin", "*")
          .setHeader("access-control-allow-methods", "POST,OPTIONS")
          .setHeader("access-control-allow-headers", "content-type")
          .json({
            status: "ok",
            booking: req.body,
          });
      } else {
        res
          .status(400)
          .setHeader("access-control-allow-origin", "*")
          .setHeader("access-control-allow-methods", "POST,OPTIONS")
          .setHeader("access-control-allow-headers", "content-type")
          .json({
            error:
              "Body should contain fields 'challenge' (integer), 'name' (string), 'email' (string), 'date' (string), 'time' (string) and 'participants' (integer)",
          });
      }
    } catch (err) {
      return res
        .status(400)
        .setHeader("access-control-allow-origin", "*")
        .setHeader("access-control-allow-methods", "POST,OPTIONS")
        .setHeader("access-control-allow-headers", "content-type")
        .json({ error: "Body must be JSON" });
    }
  } else if (req.method != "OPTIONS") {
    res.status(405).json({ error: "Must use POST" });
  }
}
