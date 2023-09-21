import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import { extractUser, withAuth } from "~/server/auth";
import { onError } from "~/server/middleware";
import { codeSnippetsService } from "~/server/services/code-snippets";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.use(withAuth).post(async (req, res) => {
  const id = req.query.id as string;
  const boardId = req.headers["x-board-id"] as string;
  const userInfo = await extractUser(req.headers.authorization);

  const codeSnippet = await codeSnippetsService.getById(id, userInfo);

  const hasAlreadyShared = codeSnippet.shareConfig.some(
    (shareConfig) =>
      shareConfig.identifier === userInfo.user &&
      shareConfig.sourceType === "USER"
  );

  if (hasAlreadyShared) {
    return res.status(400).json({ error: "Code snippet already shared" });
  }

  const snippet = await codeSnippetsService.use(codeSnippet, userInfo, boardId);

  return res.status(201).json(snippet);
});

export default router.handler({
  onError,
});
