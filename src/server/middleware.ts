import { type NextApiRequest, type NextApiResponse } from "next";
import { logger } from "./logger";

export class AppError extends Error {
  constructor(public status: number, message: string) {
    super(message);
  }
}

export const onError = (
  err: unknown,
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const error = err as Error;
  let code = 500;
  if (error instanceof AppError) {
    code = error.status;
  }
  logger.error(error);
  res.status(code).json({ error: error.message });
};
