import type { NextRequest } from "next/server";

import { verify } from "jsonwebtoken";
import type { UserInfo } from "~/business/models";
import { env } from "~/env.mjs";

export const extractUser = (request: NextRequest): UserInfo => {
  const nope = () => {
    throw new Error("Invalid JWT provided");
  };

  if (!request.headers.has("Authorization")) {
    return nope();
  }

  const Authorization = request.headers.get("Authorization");
  const jwt = Authorization?.split("Beaer: ").pop();

  if (!jwt) {
    return nope();
  }

  return verify(jwt, env.MIRO_CLIENT_SECRET) as unknown as UserInfo;
};
