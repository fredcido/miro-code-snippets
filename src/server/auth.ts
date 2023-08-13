import * as jose from "jose";
import type { UserInfo } from "~/business/models";
import { env } from "~/env.mjs";

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
