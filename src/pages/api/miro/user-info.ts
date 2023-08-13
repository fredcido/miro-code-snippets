import type { NextApiRequest, NextApiResponse } from "next";
import { extractUser } from "~/server/auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case "GET": {
        const userInfo = await extractUser(req.headers.authorization);

        return res.json({
          user: userInfo.user,
          team: userInfo.team,
        });
      }
      default:
        return res.status(405).json({ message: "Method Not Allowed" });
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
}
