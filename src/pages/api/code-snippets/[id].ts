import { type NextApiRequest, type NextApiResponse } from "next";
import { createRouter } from "next-connect";
import { CodeSnippetSchema } from "~/business/models";
import { extractUser, withAuth } from "~/server/auth";
import { AppError, onError } from "~/server/middleware";
import { codeSnippetsService } from "~/server/services/code-snippets";

const router = createRouter<NextApiRequest, NextApiResponse>();

export const assertOwnerOnly = async (req: NextApiRequest) => {
  const id = req.query.id as string;
  if (!id) {
    throw new AppError(400, "Code snippet ID is required");
  }

  const userInfo = await extractUser(req.headers.authorization);
  const snippet = await codeSnippetsService.getById(id, userInfo);

  if (snippet.owner === "OTHER") {
    throw new AppError(403, "Only owners should have access to access snippet");
  }
};

router
  .use(withAuth)
  .get(async (req, res) => {
    await assertOwnerOnly(req);
    const id = req.query.id as string;
    const userInfo = await extractUser(req.headers.authorization);
    const item = await codeSnippetsService.getById(id, userInfo);
    return res.json(item);
  })
  .patch(async (req, res) => {
    await assertOwnerOnly(req);
    const codeSnippet = CodeSnippetSchema.parse(req.body);
    const userInfo = await extractUser(req.headers.authorization);
    const snippet = await codeSnippetsService.update(codeSnippet, userInfo);
    return res.json(snippet);
  })
  .delete(async (req, res) => {
    await assertOwnerOnly(req);
    const id = req.query.id as string;
    await codeSnippetsService.delete(id);
    return res.status(204).json({});
  });

export default router.handler({
  onError,
});
