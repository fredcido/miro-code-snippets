import * as jose from "jose";
import { type NextApiRequest, type NextApiResponse } from "next";
import type { UserInfo } from "~/business/models";
import { env } from "~/env.mjs";
import { type NextHandler } from "next-connect/dist/types/types";
import { logger } from "./logger";
import { AppError } from "./middleware";

const nope = () => {
  throw new AppError(401, "Invalid JWT provided");
};

export const extractUser = async (authHeader?: string | null): Promise<UserInfo> => {
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
    return next();
  } catch (error) {
    logger.error(error);
    // @ts-expect-error error is unknown
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    return res.status(401).json({ error: error.message });
  }
};