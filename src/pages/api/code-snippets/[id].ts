import { type NextApiRequest, type NextApiResponse } from "next";
import { createRouter } from "next-connect";
import { CodeSnippetSchema } from "~/business/models";
import { extractUser, withAuth } from "~/server/auth";
import { onError } from "~/server/middleware";
import { codeSnippetsService } from "~/server/services/code-snippets";

const router = createRouter<NextApiRequest, NextApiResponse>();

router
  .use(withAuth)
  .get(async (req, res) => {
    const id = req.query.id as string;
    const userInfo = await extractUser(req.headers.authorization);
    const item = await codeSnippetsService.getById(id, userInfo);
    return res.json(item);
  })
  .patch(async (req, res) => {
    const codeSnippet = CodeSnippetSchema.parse(req.body);
    const userInfo = await extractUser(req.headers.authorization);
    const snippet = await codeSnippetsService.update(codeSnippet, userInfo);
    return res.json(snippet);
  })
  .delete(async (req, res) => {
    const id = req.query.id as string;
    await codeSnippetsService.delete(id);
    return res.json({});
  });

export default router.handler({
  onError,
});
