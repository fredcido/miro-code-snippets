import { type NextApiRequest, type NextApiResponse } from "next";
import { createRouter } from "next-connect";
import { CreateCodeSnippetSchema } from "~/business/models";
import { extractUser, withAuth } from "~/server/auth";
import { AppError, onError } from "~/server/middleware";
import { codeSnippetsService } from "~/server/services/code-snippets";

const router = createRouter<NextApiRequest, NextApiResponse>();

router
  .use(withAuth)
  .get(async (req, res) => {
    throw new AppError(403, "No user is yet allowed to see all the snippets");

    const userInfo = await extractUser(req.headers.authorization);
    const items = await codeSnippetsService.listAll(userInfo);
    return res.json(items);
  })
  .post(async (req, res) => {
    const boardId = req.headers["x-board-id"] as string;
    if (!boardId) {
      throw new AppError(400, "Missing x-board-id header");
    }

    const newCodeSnippet = CreateCodeSnippetSchema.parse(req.body);
    const userInfo = await extractUser(req.headers.authorization);

    const snippet = await codeSnippetsService.create(
      newCodeSnippet,
      userInfo,
      boardId
    );

    return res.status(201).json(snippet);
  });

export default router.handler({
  onError,
});
