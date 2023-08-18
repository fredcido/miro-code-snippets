import * as jose from "jose";
import { type NextApiRequest, type NextApiResponse } from "next";
import type { UserInfo } from "~/business/models";
import { env } from "~/env.mjs";
import { type NextHandler } from "next-connect/dist/types/types";

export const extractUser = async (
  authHeader?: string | null
): Promise<UserInfo> => {
  const nope = () => {
    throw new Error("Invalid JWT provided");
  };

  if (!authHeader) {
    return nope();
  }

  const jwt = authHeader?.split("Bearer ").pop();

  if (jwt) {
    const { payload } = await jose.jwtVerify(
      jwt,
      new TextEncoder().encode(env.MIRO_CLIENT_SECRET)
    );

    return {
      ...payload,
      jwt,
    } as UserInfo;
  } else {
    return nope();
  }
};

export const withAuth = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextHandler
) => {
  try {
    await extractUser(req.headers.authorization);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return await next();
  } catch (error) {
    return res.status(401).json({ error });
  }
};