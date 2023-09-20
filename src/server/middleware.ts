import { type NextApiRequest, type NextApiResponse } from "next";

export const onError = (err: unknown, req: NextApiRequest, res: NextApiResponse) => {
  const error = err as Error;
  console.error(error.stack);
  res.status(500).end(error.message);
};
