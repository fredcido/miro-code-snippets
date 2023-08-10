import type { NextApiRequest, NextApiResponse } from "next";
import { verify } from "jsonwebtoken";
import { type UserInfo, UserInfoRequestSchema } from "~/business/models";
import { env } from "~/env.mjs";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case "POST": {
        const body = UserInfoRequestSchema.parse(req.body);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        const userInfo = verify(body.jwt, env.MIRO_CLIENT_SECRET) as UserInfo;

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
