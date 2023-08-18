import { type NextApiRequest, type NextApiResponse } from "next";
import { createRouter } from "next-connect";
import { extractUser, withAuth } from "~/server/auth";
import { onError } from "~/server/middleware";
import { codeSnippetsService } from "~/server/services/code-snippets";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.use(withAuth).get(async (req, res) => {
  const boardId = req.headers["x-board-id"] as string;
  const userInfo = await extractUser(req.headers.authorization);
  console.log({ userInfo });
  const items = await codeSnippetsService.getActions(userInfo, boardId);
  console.log({ items });
  return res.json(items);
});

export default router.handler({
  onError,
});
