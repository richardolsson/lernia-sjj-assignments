import { initCorsMiddleware } from "../../../utils/cors";

const cors = initCorsMiddleware(["POST", "OPTIONS"]);

function assertValidField(body, fieldName) {
  if (!body[fieldName]) {
    throw new Error("Missing field ");
  }
  if (typeof body[fieldName] !== "string") {
    throw new Error("Invalid type");
  }
}

function bodyIsValid(body) {
  try {
    if (Object.keys(body).length != 4) {
      return false;
    }

    assertValidField(body, "name");
    assertValidField(body, "email");
    assertValidField(body, "date");
    assertValidField(body, "time");

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
        res.status(200).json({
          status: "ok",
          booking: req.body,
        });
      } else {
        res.status(400).json({
          error:
            "Body must contain fields 'name', 'email', 'date' and 'time', all should be strings.",
        });
      }
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: "Body must be JSON" });
    }
  } else {
    res.status(405).json({ error: "Must use POST" });
  }
}
