import { type NextApiRequest, type NextApiResponse } from "next";
import { createRouter } from "next-connect";
import { CreateCodeSnippetSchema } from "~/business/models";
import { extractUser, withAuth } from "~/server/auth";
import { onError } from "~/server/middleware";
import { codeSnippetsService } from "~/server/services/code-snippets";

const router = createRouter<NextApiRequest, NextApiResponse>();

router
  .use(withAuth)
  .get(async (req, res) => {
    const userInfo = await extractUser(req.headers.authorization);
    const items = await codeSnippetsService.getAll(userInfo);
    return res.json(items);
  })
  .post(async (req, res) => {
    const boardId = req.headers["x-board-id"] as string;
    console.log(req.body);
    const newCodeSnippet = CreateCodeSnippetSchema.parse(req.body);
    const userInfo = await extractUser(req.headers.authorization);

    const snippet = await codeSnippetsService.create(
      newCodeSnippet,
      userInfo,
      boardId
    );

    return res.status(201).json(snippet);
  })
  .patch(async (req, res) => {
    const id = req.query.id as string;
    await codeSnippetsService.delete(id);
    return res.json({});
  });

export default router.handler({
  onError,
});
